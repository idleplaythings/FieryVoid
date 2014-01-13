model.CompositeImageShipHullNormalMap = function CompositeImageShipHullNormalMap(shipDesign)
{
    model.CompositeImage.call(this, shipDesign);

    this.color = shipDesign.getColor();
    this.hullImgName = shipDesign.hullLayout.hullImgName;
    this.scale = shipDesign.hullLayout.hullScale;

	this.compositeName = "hull normal map";
	
    this.base =
        this.imageLoader.loadImage(
            '/ship/' +this.hullImgName+ '-normal.png');

    this.hullModuleImages = this.getModuleNormalMaps('hull');
};

model.CompositeImageShipHullNormalMap.prototype =
    Object.create(model.CompositeImage.prototype);


model.CompositeImageShipHullNormalMap.prototype._createImage = function()
{
	var dim = this.getDimensions();
    var width = dim.width;
    var height = dim.height;
    //var width = this.base.width*this.scale;
    //var height = this.base.height*this.scale;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);

    var context = drawingCanvas.getContext("2d");

    this.drawingTool.drawAndRotate(
        context, width, height, this.base.width*2*this.scale, this.base.height*2*this.scale, 0, this.base, false);

	//this._drawModuleImages(context, this.hullModuleImages);
	var data = context.getImageData(0, 0, width, height);
	this._mergeNormalMaps(data, this.hullModuleImages);

    return data;
};

    
	
	
	
	
	
