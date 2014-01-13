model.CompositeImageShipModulesNormalMaps = function CompositeImageShipModulesNormalMaps(shipDesign, types)
{
    model.CompositeImage.call(this, shipDesign);

    this.types = types.map(function(type){
        return this.getModuleNormalMaps(type);
    }, this);

};

model.CompositeImageShipModulesNormalMaps.prototype =
    Object.create(model.CompositeImage.prototype);

model.CompositeImageShipModulesNormalMaps.prototype._createImage = function()
{
	console.log("create modules normal map");
    var dim = this.getDimensions();
    var width = dim.width;
    var height = dim.height;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);

    var context = drawingCanvas.getContext("2d");
    context.fillStyle = 'rgba(127,127,255,1.0)';
    context.fillRect(0,0,width,height);

	var data =  context.getImageData(0, 0, width, height);
    this.types.forEach(function(images){
        //this._drawModuleImages(context, images);
        this._mergeNormalMaps(data, images);
    }, this);
    
    

    return data;
};
