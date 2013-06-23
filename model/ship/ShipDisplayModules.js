model.ShipDisplayModules = function ShipDisplayModules(
    target, canvasClass, type, shadow)
{
    model.ShipDisplay.call(this, target, canvasClass);

    this.shadow = shadow || false;
    this.type = type;
    this.drawingTool = window.Tools.getCanvasDrawingTool();
    this.images = null;
    this.drawnCount = 0;
}

model.ShipDisplayModules.prototype = Object.create(model.ShipDisplay.prototype);

model.ShipDisplayModules.prototype.getImages = function(type)
{
    var images = [];

    for (var i in this.ship.modules)
    {
        var module = this.ship.modules[i];
        var image = ModuleImages.findOne({name: module.image}).getByType(type);

        if (image)
            images[i] = new model.CompositeImageModule(
                {imageSrc: image, shadow: this.shadow});
    }

    return images;
};

model.ShipDisplayModules.prototype.start = function(ship)
{
    this.ship = ship;
    this.images = this.getImages(this.type);
    this.drawnCount = 0;

    var dimensions = this.getDimensions();
    this.getContext().clearRect(0, 0, dimensions.width, dimensions.height);

    if (this.images.length == 0)
        this.flushBuffer();

    for (var i in this.images)
    {
        var image = this.images[i];
        image.getImageDataToCallback(jQuery.proxy(this.receiveImageData, this, i));
    }
};

model.ShipDisplayModules.prototype.receiveImageData = function(i, data)
{
    this.drawImage(data, i);
    this.drawnCount++;
    if (this.drawnCount == this.images.length)
        this.flushBuffer();
};

model.ShipDisplayModules.prototype.drawImage = function(image, i)
{
    var data = image.data;

    var width = data.width;
    var height = data.height;

    var zoom = this.calculateZoomForFit({width:width, height:height});

    var pos = this.getCanvasPosition(this.ship.modules[i].position);

    //this.context.putImageData(data, 0, 0);
    window.Tools.getCanvasDrawingTool().resizeImageDataAndDraw(
        this.getContext(), pos, data, zoom);
};