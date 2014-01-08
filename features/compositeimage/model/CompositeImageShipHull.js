model.CompositeImageShipHull = function CompositeImageShipHull(shipDesign)
{
    model.CompositeImage.call(this, shipDesign);

    this.color = shipDesign.getColor();
    this.patternColor = null; //shipDesign.getPatternColor() || null;
    this.hullImgName = shipDesign.hullLayout.hullImgName;
    this.scale = shipDesign.hullLayout.hullScale || 1;

    this.base =
        this.imageLoader.loadImage(
            '/ship/' +this.hullImgName+ '-base.png');
    this.shadow =
        this.imageLoader.loadImage(
            '/ship/' +this.hullImgName+ '-shadow.png');
    this.details =
        this.imageLoader.loadImage(
            '/ship/' +this.hullImgName+ '-details.png');

    this.pattern = 
        this.imageLoader.loadImage(
            '/ship/hullpatterntest.png');

    this.hullModuleImages = this.getModuleImages('hull');
}

model.CompositeImageShipHull.prototype =
    Object.create(model.CompositeImage.prototype);


model.CompositeImageShipHull.prototype._createImage = function()
{
    var width = this.base.width*this.scale;
    var height = this.base.height*this.scale;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);

    var context = drawingCanvas.getContext("2d");

    this.drawingTool.drawAndRotate(
        context, width, height, width*2, height*2, 0, this.base, false);

    var data = context.getImageData(0, 0, width, height);
    this._applyColor(data, this.color);
    this._applyPattern(data, this.pattern);

    context.putImageData(data, 0, 0);

    this.drawingTool.drawAndRotate(
       context, width, height, width*2, height*2, 0, this.details, false);

    this._drawModuleImages(context, this.hullModuleImages);

    this.drawingTool.drawAndRotate(
        context, width, height, width*2, height*2, 0, this.shadow, false);

    return context.getImageData(0, 0, width, height);
};

model.CompositeImageShipHull.prototype.getDimensions = function()
{
    return {width:this.base.width, height:this.base.height};
};
