model.CompositeImage = function CompositeImage(shipDesign)
{
    this.shipDesign = shipDesign;
    this.drawingTool = window.Tools.getCanvasDrawingTool();
    this.imageLoader = new model.ImageLoader();

    this.imageData = {data:null};
    this.imageLoader.addCallback(this._createImage.bind(this), this);
};

model.CompositeImage.prototype.getImageDataToCallback = function(callback)
{
    if (this.imageLoader.isLoading())
    {
        this.imageLoader.addCallback(callback, this, this._doGetImageData);
        return;
    }
    else
    {
        callback.call(this, this._doGetImageData());
    }
};

model.CompositeImage.prototype.getModuleImages = function(type)
{
    var images = [];

    for (var i in this.shipDesign.modules)
    {
        var module = this.shipDesign.modules[i];
        var image = module.image.getByType(type);

        if (image)
        {
            images[i] = new model.CompositeImageModule({
                imageSrc: image,
                shadow: false,
                rotation:module.getRotation(),
                imageLoader: this.imageLoader
            });
        }
    }

    return images;
};

model.CompositeImage.prototype._drawModuleImages =
    function(context, images)
    {
        for (var i in images)
        {
            var image = images[i];
            var module = this.shipDesign.modules[i];

            image.getImageDataToCallback(
                function(data)
                {
                    data = data.data;

                    var center = this.getCanvasPosition(module.getCenterPosition());
                    var topleft = {
                        x:center.x - data.width / 2 * module.scale,
                        y:center.y - data.height / 2 * module.scale,
                    };

                    this.drawingTool.resizeImageDataAndDraw(context, topleft, data, module.scale);
                    
                }.bind(this)
            );
        }
    };


model.CompositeImage.prototype._doGetImageData = function()
{
    if (this.imageLoader.isLoading())
    {
        throw "Image loading is not ready!";
    }

    if (this.imageData.data == null)
    {
        this.imageData.data = this._createImage();
    }

    return this.imageData;
};

model.CompositeImage.prototype.getCanvasPosition = function(pos)
{
    return this.getCoordinateTool().convertGridToCanvas(pos);
};

model.CompositeImage.prototype.getCoordinateTool = function()
{
    var gridWidth = this.shipDesign.hullLayout.width;
    var gridHeight = this.shipDesign.hullLayout.height;

    var dim = this.getDimensions();

    return new model.CoordinateConverter(
        {width: dim.width, height: dim.height},
        {width: gridWidth, height: gridHeight},
        30
    );
};


model.CompositeImage.prototype._applyColor = function(targetData, color)
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


model.CompositeImage.prototype._applyPattern = function(targetData, patternimg)
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