model.CompositeImageShipHullAndModules = function CompositeImageShipHullAndModules(shipDesign)
{
    model.CompositeImageShipHull.call(this, shipDesign);

    this.moduleImages = this.getModuleImages('outside');
    this.turrets = this.getModuleImages('over');
}

model.CompositeImageShipHullAndModules.prototype =
    Object.create(model.CompositeImageShipHull.prototype);


model.CompositeImageShipHullAndModules.prototype._createImage = function()
{
    var width = this.base.width;
    var height = this.base.height;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);

    var context = drawingCanvas.getContext("2d");

    this._drawModuleImages(context, this.moduleImages);
    this._drawModuleImages(context, this.hullModuleImages);

    var hullImageData = model.CompositeImageShipHull.prototype._createImage.call(this);

    var canvas2 =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);

    var context2 = canvas2.getContext("2d");

    context2.putImageData(hullImageData, 0, 0);
    context.drawImage(canvas2, 0, 0);

    this._drawModuleImages(context, this.turrets);

    return context.getImageData(0, 0, width, height);
};
