model.CompositeImageShipModules = function CompositeImageShipModules(shipDesign)
{
    model.CompositeImage.call(this, shipDesign);

    this.moduleImages = this.getModuleImages('outside');
    this.moduleImagesHull = this.getModuleImages('hull');
}

model.CompositeImageShipModules.prototype =
    Object.create(model.CompositeImage.prototype);


model.CompositeImageShipModules.prototype._createImage = function()
{
    var dim = this.getDimensions();
    var width = dim.width;
    var height = dim.height;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);

    var context = drawingCanvas.getContext("2d");

    this._drawModuleImages(context, this.moduleImages);
    this._drawModuleImages(context, this.moduleImagesHull);

    return context.getImageData(0, 0, width, height);
};

model.CompositeImage.prototype.getDimensions = function()
{
    var hull = this.shipDesign.hullLayout;
    return {
        width:hull.width * hull.tileScale,
        height:hull.height * hull.tileScale
    };
};