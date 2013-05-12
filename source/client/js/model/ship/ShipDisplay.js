var ShipDisplay = function ShipDisplay(ship, target, canvasClass, dispatcher)
{
    this.layout = ship.layout;
    this.dispatcher = dispatcher;
    this.canvas = null;
    this.context = null;
    this.target = target;

    this.create(canvasClass);

    this.image = null;
    this.dispatcher.attach(
        new EventListener("ShipImageChanged", $.proxy(this.drawImage, this))
    );
};

ShipDisplay.prototype.getDimensions = function()
{
    return {
        width:this.target.width(),
        height:this.target.height()
    };
};

ShipDisplay.prototype.create = function(canvasClass)
{
    this.createCanvas(canvasClass);
    this.target.resize($.proxy(this.resize, this));
};

ShipDisplay.prototype.createCanvas = function(canvasClass)
{
    if ( ! this.canvas )
    {
        var dim = this.getDimensions();
        this.canvas = $("<canvas>")
            .addClass(canvasClass)
            .addClass("shipDisplay")
            .attr("width", dim.width)
            .attr("height", dim.height);

        this.canvas.appendTo(this.target);

        this.context = this.canvas.get(0).getContext("2d");
    }
};

ShipDisplay.prototype.resize = function()
{
    console.log("resize");

    var dim = this.getDimensions();
    this.canvas
        .attr("width", dim.width)
        .attr("height", dim.height);

    this.drawImage();
};

ShipDisplay.prototype.receiveImageData = function(data)
{
    this.image = data;
    this.drawImage();
};

ShipDisplay.prototype.drawImage = function()
{
    if (! this.image || ! this.image.data)
        return;

    var dimensions = this.getDimensions();
    this.context.clearRect(0, 0, dimensions.width, dimensions.height);
    var data = this.image.data;

    console.log(data);
    var width = data.width;
    var height = data.height;

    var zoom = this.calculateZoomForFit({width:width, height:height});

    console.log("zoom: " + zoom);
    var pos = {
        x: (dimensions.width - width*zoom)/2,
        y: (dimensions.height - height*zoom)/2
    };

    console.log(pos);
    //this.context.putImageData(data, 0, 0);
    this.resizeImageDataAndDraw(this.context, pos, data, zoom);
};

ShipDisplay.prototype.calculateGridSize = function()
{
    var gridWidth = this.layout.width;
    var gridHeight = this.layout.height;

    var dimensions = this.getDimensions();
    var sizeW = dimensions.width / gridWidth;
    var sizeH = dimensions.height / gridHeight;

    return (sizeH < sizeW) ? sizeH : sizeW;
};

ShipDisplay.prototype.calculateZoomForFit = function(dimensions)
{
    var size = this.calculateGridSize();
    var nativeGridSize = this.layout.tileScale;

    return size/nativeGridSize;
}

ShipDisplay.prototype.resizeImageDataAndDraw = function(target, pos, data, zoom)
{
    var width = data.width;
    var height = data.height;

    var newCanvas = $("<canvas>")
        .attr("width", width)
        .attr("height", height)[0];

    newCanvas.getContext("2d").putImageData(data, 0, 0);

    target.save();
    target.scale(zoom, zoom);
    target.drawImage(newCanvas, pos.x/zoom, pos.y/zoom);
    target.restore();
}