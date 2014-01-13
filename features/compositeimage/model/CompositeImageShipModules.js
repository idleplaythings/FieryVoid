model.CompositeImageShipModules = function CompositeImageShipModules(shipDesign, types)
{
    model.CompositeImage.call(this, shipDesign);

    this.types = types.map(function(type){
        return this.getModuleImages(type);
    }, this);

};

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

    this.types.forEach(function(images){
        this._drawModuleImages(context, images);
    }, this);

    return context.getImageData(0, 0, width, height);
};
