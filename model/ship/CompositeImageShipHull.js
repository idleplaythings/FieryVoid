model.CompositeImageShipHull = function CompositeImageShipHull(args)
{
    model.CompositeImage.call(this, args);

    this.color = args.color || '255,255,255';
    this.hullImgName = args.hullImgName;

    this.base =
        this.imageLoader.loadImage('/ship/' +this.hullImgName+ '-base.png');
    this.details =
        this.imageLoader.loadImage('/ship/' +this.hullImgName+ '-details.png');
}

model.CompositeImageShipHull.prototype = Object.create(model.CompositeImage.prototype);


model.CompositeImageShipHull.prototype._createImage = function()
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

model.CompositeImageShipHull.prototype._applyColor = function(targetData, color)
{
    console.log(color);
    color = color.split(',');
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