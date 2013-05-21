model.ShipHullCompositeImage = function ShipHullCompositeImage(args)
{
    this.drawingTool = window.Tools.getCanvasDrawingTool();
    this.imageLoader = new model.ImageLoader();

    this.color = args.color || Array(255,255,255);

    this.hullName = args.hullName;

    this.imageData = {data:null};
    this.imageLoader.addCallback(jQuery.proxy(this, this._createImage), this);

    this.base =
        this.imageLoader.loadImage('/ship/' +this.hullName+ '-base.png');
    this.details =
        this.imageLoader.loadImage('/ship/' +this.hullName+ '-details.png');
};

model.ShipHullCompositeImage.prototype.getImageDataToCallback = function(callback)
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

model.ShipHullCompositeImage.prototype.setColor = function(color)
{
    this.color = color;
    this.imageData.data = this._createImage();
}

model.ShipHullCompositeImage.prototype._doGetImageData = function()
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

model.ShipHullCompositeImage.prototype._createImage = function()
{
    var width = this.base.width;
    var height = this.base.height;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);

    var context = drawingCanvas.getContext("2d");

    this.drawingTool.drawAndRotate(
        context, width, height, width*2, height*2, 0, this.base, false);

    var data = context.getImageData(0, 0, width, height);
    this._applyColor(data, this.color);

    context.putImageData(data, 0, 0);

    this.drawingTool.drawAndRotate(
        context, width, height, width*2, height*2, 0, this.details, false);

    return context.getImageData(0, 0, width, height);
};

model.ShipHullCompositeImage.prototype._applyColor = function(targetData, color )
{
    var data = targetData.data;

    var pixels = targetData.width * targetData.height * 4;

    while (pixels) {
        var r = pixels-4;
        var g = pixels-3;
        var b = pixels-2;
        var a = pixels-1;

        if (data[a] !== 0)
        {
            data[r] = color[0];
            data[g] = color[1];
            data[b] = color[2];
        }

        pixels -= 4;
    }
    targetData.data = data;
};
