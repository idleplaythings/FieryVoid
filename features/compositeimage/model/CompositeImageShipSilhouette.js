model.CompositeImageShipSilhouette = function CompositeImageShipSilhouette(shipDesign)
{
    model.CompositeImage.call(this, shipDesign);

    this.hullImgName = shipDesign.hullLayout.hullImgName;

    this.color = '0,0,0';
    this.base =
        this.imageLoader.loadImage(
            '/ship/' +this.hullImgName+ '-base.png');
}

model.CompositeImageShipSilhouette.prototype =
    Object.create(model.CompositeImage.prototype);


model.CompositeImageShipSilhouette.prototype._createImage = function()
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

    return context.getImageData(0, 0, width, height);
};

model.CompositeImage.prototype.getDimensions = function()
{
    return {width:this.base.width, height:this.base.height};
};