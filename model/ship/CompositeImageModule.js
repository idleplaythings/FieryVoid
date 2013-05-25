model.CompositeImageModule = function CompositeImageModule(args)
{
    model.CompositeImage.call(this, args);

    this.color = args.color || Array(255,255,255);
    this.imgName = args.imgName;
    this.imgType = args.imgType;

    this.base =
        this.imageLoader.loadImage('/module/' +this.imgName+ '-' +this.imgType+ '.png');
}

model.CompositeImageModule.prototype = Object.create(model.CompositeImage.prototype);


model.CompositeImageModule.prototype._createImage = function()
{
    var width = this.base.width;
    var height = this.base.height;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);

    var context = drawingCanvas.getContext("2d");

    this.drawingTool.drawAndRotate(
        context, width, height, width*2, height*2, 0, this.base, false);

    return context.getImageData(0, 0, width, height);
};
