model.CompositeImage = function CompositeImage(args)
{
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

model.CompositeImage.prototype.setColor = function(color)
{
    this.color = color;
    this.imageData.data = this._createImage();
}

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