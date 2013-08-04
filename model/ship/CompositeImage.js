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

            var pos = this.getCanvasPosition(this.shipDesign.modules[i].position);

            image.getImageDataToCallback(
                function(data)
                {
                    data = data.data;

                    var canvas =
                        $('<canvas width="'+data.width+'" height="'+data.height+'"></canvas>').get(0);
                    var tmp = canvas.getContext("2d");

                    tmp.putImageData(data, 0, 0);
                    context.drawImage(canvas, pos.x, pos.y);
                }
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
        this.shipDesign.hullLayout.tileScale
    );
};