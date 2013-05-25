model.ShipDisplay = function ShipDisplay(layout, canvas)
{
    this.layout = layout;
    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    this.image = null;
};

model.ShipDisplay.prototype.getDimensions = function()
{
    return {
        width:$(this.canvas).width(),
        height:$(this.canvas).height()
    };
};

model.ShipDisplay.prototype.resize = function(width, height)
{
    this.canvas
        .attr("width", width)
        .attr("height", height);

    this.drawImage();
};

model.ShipDisplay.prototype.receiveImageData = function(data)
{
    this.image = data;
    this.drawImage();
};

model.ShipDisplay.prototype.drawImage = function()
{
    if (! this.image || ! this.image.data)
        return;

    var dimensions = this.getDimensions();
    this.context.clearRect(0, 0, dimensions.width, dimensions.height);
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
        this.context, pos, data, zoom);
};

model.ShipDisplay.prototype.calculateGridSize = function()
{
    var gridWidth = this.layout.width;
    var gridHeight = this.layout.height;

    var dimensions = this.getDimensions();
    var sizeW = dimensions.width / gridWidth;
    var sizeH = dimensions.height / gridHeight;

    var size = (sizeH < sizeW) ? sizeH : sizeW;

    if (size > 30)
        return 30;

    return size;
};

model.ShipDisplay.prototype.calculateZoomForFit = function(dimensions)
{
    var size = this.calculateGridSize();
    var nativeGridSize = this.layout.tileScale;

    var zoom = size/nativeGridSize;

    if (zoom > 1)
        zoom = 1;

    return zoom;
}