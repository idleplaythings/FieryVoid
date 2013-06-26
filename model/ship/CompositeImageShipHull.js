model.CompositeImageShipHull = function CompositeImageShipHull(ship)
{
    model.CompositeImage.call(this);

    this.ship = ship;
    this.color = ship.hullColor;
    this.hullImgName = ship.hullLayout.hullImgName;

    this.base =
        this.imageLoader.loadImage(
            '/ship/' +this.hullImgName+ '-base.png');
    this.shadow =
        this.imageLoader.loadImage(
            '/ship/' +this.hullImgName+ '-shadow.png');
    this.details =
        this.imageLoader.loadImage(
            '/ship/' +this.hullImgName+ '-details.png');

    this.hullModuleImages = this.getModuleImages('hull');
}

model.CompositeImageShipHull.prototype =
    Object.create(model.CompositeImage.prototype);

model.CompositeImageShipHull.prototype.getModuleImages = function(type)
{
    var images = [];

    for (var i in this.ship.modules)
    {
        var module = this.ship.modules[i];
        var image = module.image.getByType(type);

        if (image)
            images[i] = this.imageLoader.loadImage(image);
    }

    return images;
};

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

    context.putImageData(data, 0, 0);

    this.drawingTool.drawAndRotate(
        context, width, height, width*2, height*2, 0, this.details, false);

    this._drawModuleImages(context, this.hullModuleImages);

    this.drawingTool.drawAndRotate(
        context, width, height, width*2, height*2, 0, this.shadow, false);


    return context.getImageData(0, 0, width, height);
};

model.CompositeImageShipHull.prototype._drawModuleImages =
    function(context, images)
{
    for (var i in images)
    {
        var image = images[i];
        var pos = this.getCanvasPosition(this.ship.modules[i].position);

        var w = image.width;
        var h = image.height;

        context.drawImage(image, pos.x, pos.y, w, h);
    }
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

model.CompositeImageShipHull.prototype. getCanvasPosition = function(pos)
{
    return this.getCoordinateTool().convertGridToCanvas(pos);
};

model.CompositeImageShipHull.prototype.getCoordinateTool = function()
{
    var gridWidth = this.ship.hullLayout.width;
    var gridHeight = this.ship.hullLayout.height;

    return new model.CoordinateConverter(
        {width: this.base.width, height: this.base.height},
        {width: gridWidth, height: gridHeight},
        this.ship.hullLayout.tileScale
    );
};