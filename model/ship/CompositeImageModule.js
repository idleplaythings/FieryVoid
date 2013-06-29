model.CompositeImageModule = function CompositeImageModule(args)
{
    model.CompositeImage.call(this, args.shipDesign);
    this.shadow = args.shadow || false;
    this.base =
        this.imageLoader.loadImage(args.imageSrc);
}

model.CompositeImageModule.prototype = Object.create(model.CompositeImage.prototype);

model.CompositeImageModule.prototype._createImage = function()
{
    var width = this.base.width;
    var height = this.base.height;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);

    var context = drawingCanvas.getContext("2d");

    if (this.shadow)
    {
        context.drawImage(this.base, 5, 5);
        var data = context.getImageData(0, 0, width, height);
        this._toShadow(data);

        context.putImageData(data, 0, 0);
    }

    context.drawImage(this.base, 0, 0);

    return context.getImageData(0, 0, width, height);
};


model.CompositeImageModule.prototype._toShadow = function(targetData)
{
    var data = targetData.data;

    var pixels = targetData.width * targetData.height * 4;

    while (pixels) {
        var r = pixels-4;
        var g = pixels-3;
        var b = pixels-2;
        var a = pixels-1;

        data[r] = 0;
        data[g] = 0;
        data[b] = 0;
        data[a] = data[a]*0.5;

        pixels -= 4;
    }
    targetData.data = data;
};