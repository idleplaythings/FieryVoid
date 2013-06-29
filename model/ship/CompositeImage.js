model.CompositeImage = function CompositeImage(shipDesign)
{
    this.shipDesign = shipDesign;
    this.drawingTool = window.Tools.getCanvasDrawingTool();
    this.imageLoader = new model.ImageLoader();

    this.imageData = {data:null};
    this.imageLoader.addCallback(jQuery.proxy(this, this._createImage), this);
};

model.CompositeImage.prototype.getImageDataToCallback = function(callback)
{
    if (this.imageLoader.isLoading())
    {
        this.imageLoader.addCallback(callback, this, this._doGetImageData);
        return;
    }
    else
    {
        callback.call(this, this._doGetImageData());
    }
};

model.CompositeImage.prototype.getModuleImages = function(type)
{
    var images = [];

    for (var i in this.shipDesign.modules)
    {
        var module = this.shipDesign.modules[i];
        var image = module.image.getByType(type);

        if (image)
            images[i] = this.imageLoader.loadImage(image);
    }

    return images;
};

model.CompositeImage.prototype._drawModuleImages =
    function(context, images)
    {
        for (var i in images)
        {
            var image = images[i];
            var pos = this.getCanvasPosition(this.shipDesign.modules[i].position);

            var w = image.width;
            var h = image.height;

            context.drawImage(image, pos.x, pos.y, w, h);
        }
    };


model.CompositeImage.prototype._doGetImageData = function()
{
    if (this.imageLoader.isLoading())
    {
        throw "Image loading is not ready!";
    }

    if (this.imageData.data == null)
    {
        this.imageData.data = this._createImage();
    }

    return this.imageData;
};

model.CompositeImage.prototype.getDimensions = function()
{

};

model.CompositeImage.prototype.getCanvasPosition = function(pos)
{
    return this.getCoordinateTool().convertGridToCanvas(pos);
};

model.CompositeImage.prototype.getCoordinateTool = function()
{
    var gridWidth = this.shipDesign.hullLayout.width;
    var gridHeight = this.shipDesign.hullLayout.height;

    var dim = this.getDimensions();

    return new model.CoordinateConverter(
        {width: dim.width, height: dim.height},
        {width: gridWidth, height: gridHeight},
        this.shipDesign.hullLayout.tileScale
    );
};