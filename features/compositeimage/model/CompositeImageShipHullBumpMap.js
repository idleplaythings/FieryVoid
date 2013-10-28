model.CompositeImageShipHullBumpMap = function CompositeImageShipHullBumpMap(shipDesign)
{
    model.CompositeImage.call(this, shipDesign);

    this.color = shipDesign.getColor();
    this.hullImgName = shipDesign.hullLayout.hullImgName;
    this.scale = shipDesign.hullLayout.hullScale;

    this.base =
        this.imageLoader.loadImage(
            '/ship/' +this.hullImgName+ '-bump.png');

    this.hullModuleImages = this.getModuleImages('hullbump');
}

model.CompositeImageShipHullBumpMap.prototype =
    Object.create(model.CompositeImage.prototype);


model.CompositeImageShipHullBumpMap.prototype._createImage = function()
{
    var width = this.base.width;
    var height = this.base.height;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);

    var context = drawingCanvas.getContext("2d");

    this.drawingTool.drawAndRotate(
        context, width, height, width*2*this.scale, height*2*this.scale, 0, this.base, false);

    this._drawModuleImages(context, this.hullModuleImages);

    return context.getImageData(0, 0, width, height);
};

model.CompositeImageShipHullBumpMap.prototype.getDimensions = function()
{
    return {width:this.base.width, height:this.base.height};
};