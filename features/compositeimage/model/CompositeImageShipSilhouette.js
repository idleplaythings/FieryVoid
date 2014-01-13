model.CompositeImageShipSilhouette = function CompositeImageShipSilhouette(shipDesign)
{
    model.CompositeImage.call(this, shipDesign);

    this.hullImgName = shipDesign.hullLayout.hullImgName;
    this.scale = shipDesign.hullLayout.hullScale;

    this.color = '100,100,100';
    this.base =
        this.imageLoader.loadImage(
            '/ship/' +this.hullImgName+ '-base.png');
}

model.CompositeImageShipSilhouette.prototype =
    Object.create(model.CompositeImage.prototype);


model.CompositeImageShipSilhouette.prototype._createImage = function()
{
	var dim = this.getDimensions();
    var width = dim.width;
    var height = dim.height;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);

    var context = drawingCanvas.getContext("2d");

    this.drawingTool.drawAndRotate(
        context, width, height, this.base.width*2*this.scale, this.base.height*2*this.scale, 0, this.base, false);

    var data = context.getImageData(0, 0, width, height);
    this._applyColor(data, this.color);
    context.putImageData(data, 0, 0);

    return context.getImageData(0, 0, width, height);
};
