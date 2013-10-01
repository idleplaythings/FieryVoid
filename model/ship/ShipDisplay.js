model.ShipDisplay = function ShipDisplay(target, canvasClass)
{
    this.ship = null;
    this.target = target;
    this.canvasClass = canvasClass;
    this.canvases = [];
    this.bufferIndex = 0;

    this.createCanvases();
    this.image = null;
};

model.ShipDisplay.prototype.setZIndex = function(value)
{
    this.canvases.forEach(function(canvas){
        jQuery(canvas).css('z-index', value);
    });

    return this;
};

model.ShipDisplay.prototype.setOpacity = function(value)
{
    this.canvases.forEach(function(canvas){
        jQuery(canvas).css('opacity', value);
    });

    return this;
};

model.ShipDisplay.prototype.createCanvases = function()
{
    var dimensions = this.getDimensions();
    var canvases = this.target.find('.'+this.canvasClass);

    if (canvases.length != 2)
    {
        this.canvases.push(jQuery(
            '<canvas class="shipDisplay buffer0 '
            + this.canvasClass
            +'" width="'
            +dimensions.width
            +'" height="'
            +dimensions.height
            +'"></canvas>')
            .appendTo(this.target)[0]);

        this.canvases.push(jQuery(
            '<canvas class="shipDisplay buffer1 '
                + this.canvasClass
                +'" width="'
                +dimensions.width
                +'" height="'
                +dimensions.height
                +'"></canvas>')
            .appendTo(this.target)[0]);
    }
    else
    {
        this.canvases.push(canvases[0]);
        this.canvases.push(canvases[1]);
    }
};

model.ShipDisplay.prototype.clear = function()
{
    var dimensions = this.getDimensions();
    this.canvases.forEach(function(canvas){
        canvas.getContext('2d').clearRect(0, 0, dimensions.width, dimensions.height);
    });
};

model.ShipDisplay.prototype.getDimensions = function()
{
    return {
        width:jQuery(this.target).width(),
        height:jQuery(this.target).height()
    };
};

model.ShipDisplay.prototype.resize = function(width, height)
{
    this.canvases.forEach(function(canvas){
        jQuery(canvas).attr("width", width).attr("height", height);
    });

    this.drawImage();
};

model.ShipDisplay.prototype.receiveImageData = function(data)
{
    this.image = data;
    this.drawImage();
};

model.ShipDisplay.prototype.getContext = function()
{
    return this.canvases[this.bufferIndex].getContext('2d');
};

model.ShipDisplay.prototype.flushBuffer = function()
{
    this.canvases[this.bufferIndex].style.visibility='visible';
    this.bufferIndex = (this.bufferIndex == 0) ? 1 : 0;
    this.canvases[this.bufferIndex].style.visibility='hidden';
};

model.ShipDisplay.prototype.drawImage = function()
{
    if (! this.image || ! this.image.data)
        return;

    var context = this.getContext();

    var dimensions = this.getDimensions();
    context.clearRect(0, 0, dimensions.width, dimensions.height);
    var data = this.image.data;

    var width = data.width;
    var height = data.height;

    var zoom = this.calculateZoomForFit({width:width, height:height});

    var pos = {
        x: (dimensions.width - width*zoom)/2,
        y: (dimensions.height - height*zoom)/2
    };

    //this.context.putImageData(data, 0, 0);
    window.Tools.getCanvasDrawingTool().resizeImageDataAndDraw(
        context, pos, data, zoom);

    this.flushBuffer();
};

model.ShipDisplay.prototype.calculateGridSize = function()
{
    var gridWidth = this.ship.hullLayout.width;
    var gridHeight = this.ship.hullLayout.height;

    var dimensions = this.getDimensions();
    var sizeW = dimensions.width / gridWidth;
    var sizeH = dimensions.height / gridHeight;

    var size = (sizeH < sizeW) ? sizeH : sizeW;

    if (size > 30)
        return 30;

    return size;
};

model.ShipDisplay.prototype.calculateZoomForFit = function()
{
    var size = this.calculateGridSize();
    var nativeGridSize = 30;

    var zoom = size/nativeGridSize;

    if (zoom > 1)
        zoom = 1;

    return zoom;
};

model.ShipDisplay.prototype.getClickedTile = function(pos)
{
    return this.getCoordinateTool().convertWindowToGrid(pos);
};

model.ShipDisplay.prototype.getCanvasPosition = function(pos)
{
    return this.getCoordinateTool().convertGridToCanvas(pos);
};

model.ShipDisplay.prototype.getCoordinateTool = function()
{
    var gridWidth = this.ship.hullLayout.getWidth();
    var gridHeight = this.ship.hullLayout.getHeight();

    return new model.CoordinateConverter(
        this.getDimensions(),
        {width: gridWidth, height: gridHeight},
        this.calculateGridSize()
    );
};