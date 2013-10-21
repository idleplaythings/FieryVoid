model.CompositeImageShipHull = function CompositeImageShipHull(shipDesign)
{
    model.CompositeImage.call(this, shipDesign);

    this.color = shipDesign.getColor();
    this.patternColor = null; //shipDesign.getPatternColor() || null;
    this.hullImgName = shipDesign.hullLayout.hullImgName;

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
    var width = this.base.width;
    var height = this.base.height;

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

model.CompositeImageShipHull.prototype._applyColor = function(targetData, color)
{
    color = color.split(',');
    var data = targetData.data;

    var pixels = targetData.width * targetData.height * 4;

    while (pixels) {
        var r = pixels-4;
        var g = pixels-3;
        var b = pixels-2;
        var a = pixels-1;

        if (data[a] !== 0)
        {
            data[r] = color[0];
            data[g] = color[1];
            data[b] = color[2];
        }

        pixels -= 4;
    }
    targetData.data = data;
};


model.CompositeImageShipHull.prototype._applyPattern = function(targetData, patternimg)
{
    var data = targetData.data;
    var width = targetData.width;
    var height = targetData.height;

    var drawingCanvas =
        $('<canvas width="'+width+'" height="'+height+'"></canvas>').get(0);
    var context = drawingCanvas.getContext("2d");

    context.drawImage(
        patternimg, 
        width/2 - patternimg.width/2,
        height/2 - patternimg.height/2
    );

    patterImageData = context.getImageData(0, 0, width, height );

    if (this.patternColor)
        this._applyColor(patterImageData, this.patternColor);
    
    var patternData = patterImageData.data;

    var pixels = width * height * 4;

    while (pixels) {
        var r = pixels-4;
        var g = pixels-3;
        var b = pixels-2;
        var a = pixels-1;

        if (data[a] == 0 || patternData[a] == 0)
        {
            pixels -= 4;
            continue;
        }
        
        var m = patternData[a] / 255;
        data[r] = data[r] * (1-m) + patternData[r] * m;
        data[g] = data[g] * (1-m) + patternData[g] * m;
        data[b] = data[b] * (1-m) + patternData[b] * m;

        pixels -= 4;
    }
    targetData.data = data;
};

model.CompositeImage.prototype.getDimensions = function()
{
    return {width:this.base.width, height:this.base.height};
};