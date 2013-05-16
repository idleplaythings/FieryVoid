model.ShipDisplay = function ShipDisplay(ship, canvas)
{
    this.layout = ship.layout;
    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    this.image = null;
};

model.ShipDisplay.prototype.getDimensions = function()
{
    return {
        width:this.canvas.width(),
        height:this.canvas.height()
    };
};

model.ShipDisplay.prototype.resize = function(width, height)
{
    console.log("resize");

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

model.ShipDisplay.prototype.calculateGridSize = function()
{
    var gridWidth = this.layout.width;
    var gridHeight = this.layout.height;

    var dimensions = this.getDimensions();
    var sizeW = dimensions.width / gridWidth;
    var sizeH = dimensions.height / gridHeight;

    return (sizeH < sizeW) ? sizeH : sizeW;
};

model.ShipDisplay.prototype.calculateZoomForFit = function(dimensions)
{
    var size = this.calculateGridSize();
    var nativeGridSize = this.layout.tileScale;

    return size/nativeGridSize;
}