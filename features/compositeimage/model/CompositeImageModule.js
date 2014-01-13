model.CompositeImageModule = function CompositeImageModule(args)
{
    model.CompositeImage.call(this);
    this.shadow = args.shadow || false;
    this.imageLoader = args.imageLoader || this.imageLoader;
    this.base =
        this.imageLoader.loadImage(args.imageSrc);
    this.rotation = args.rotation || 0;
}

model.CompositeImageModule.prototype =
    Object.create(model.CompositeImage.prototype);

model.CompositeImageModule.prototype._createImage = function()
{
    var width = this.base.width;
    var height = this.base.height;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);

    var context = drawingCanvas.getContext("2d");

	if ( ! this.base.loaded)
		return null;
		
    if (this.shadow)
    {
        context.drawImage(this.base, 5, 5);
        var data = context.getImageData(0, 0, width, height);
        this._toShadow(data);

        context.putImageData(data, 0, 0);
    }
	
	context.drawImage(this.base, 0, 0);
	return this.rotate(this.rotation, drawingCanvas);
	
};

model.CompositeImageModule.prototype.rotate = function(rotation, drawingCanvas)
{
    var flipDimensions = rotation == 90 || rotation == 270;
    var w = (flipDimensions) ? this.base.height : this.base.width;
    var h = (flipDimensions) ? this.base.width : this.base.height;

    var rotationCanvas =
        $('<canvas width="'+w+'" height="'+h+'"></canvas>').get(0);

    var context = rotationCanvas.getContext("2d");
    context.save();
    // translate and rotate
    context.translate(w/2,h/2);
    context.rotate(rotation*Math.PI/180);
    if (flipDimensions)
    {
        context.translate(-h/2,-w/2);
    }
    else
    {
        context.translate(-w/2,-h/2);
    }

    // draw the previows image, now rotated
    context.drawImage(drawingCanvas, 0, 0);
    context.restore();

    return context.getImageData(0, 0, w, h);
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
