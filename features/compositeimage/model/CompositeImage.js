model.CompositeImage = function CompositeImage(shipDesign)
{
    this.shipDesign = shipDesign;
    this.drawingTool = window.Tools.getCanvasDrawingTool();
    this.imageLoader = new model.ImageLoader();

    this.imageData = {data:null};
    this.imageLoader.addCallback(this._createImage.bind(this), this);
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
        {
            images[i] = new model.CompositeImageModule({
                imageSrc: image,
                shadow: false,
                rotation:module.getRotation(),
                imageLoader: this.imageLoader
            });
        }
    }

    return images;
};

model.CompositeImage.prototype._drawModuleImages =
    function(context, images)
    {
        for (var i in images)
        {
            var image = images[i];
            var module = this.shipDesign.modules[i];

            image.getImageDataToCallback(
                function(data)
                {
                    data = data.data;

                    var center = this.getCanvasPosition(module.getCenterPosition());
                    var topleft = {
                        x:center.x - data.width / 2 * module.scale,
                        y:center.y - data.height / 2 * module.scale,
                    };

                    this.drawingTool.resizeImageDataAndDraw(context, topleft, data, module.scale);
                    
                }.bind(this)
            );
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
        30
    );
};