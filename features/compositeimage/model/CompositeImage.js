model.CompositeImage = function CompositeImage(shipDesign)
{
    this.shipDesign = shipDesign;
    this.drawingTool = window.Tools.getCanvasDrawingTool();
    this.imageLoader = new model.ImageLoader();

    this.imageData = {data:null};
    this.imageLoader.addCallback(this._createImage.bind(this), this);
    this.scale = 1;
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

model.CompositeImage.prototype.getModuleNormalMaps = function(type)
{
	return this.getModuleImages(type, true);
};

model.CompositeImage.prototype.getModuleImages = function(type, normal)
{
    var images = [];

    for (var i in this.shipDesign.modules)
    {
        var module = this.shipDesign.modules[i];
        var image = normal ? module.image.getNormalByType(type) : module.image.getByType(type);

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
                    
                    if ( ! data)
						return;

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

model.CompositeImage.prototype.getDimensions = function()
{
    var hull = this.shipDesign.hullLayout;
    if (! hull.width || ! hull.height)
    {
		if (this.base)
		{
			console.log("base");
			return {
				width: this.base.width,
				height: this.base.height
			};
		}
		
			console.log("fixed");
		return {
			width:200,
			height:200
		};
	}
	
    return {
        width:hull.width * 30,
        height:hull.height * 30
    };
};


model.CompositeImage.prototype._mergeNormalMaps =
    function(targetData, images)
{
	for (var i in images)
	{
		var image = images[i];
		var module = this.shipDesign.modules[i];

		image.getImageDataToCallback(
			function(data)
			{
				data = data.data;
				
				if ( ! data)
					return;

				var center = this.getCanvasPosition(module.getCenterPosition());
				var topleft = {
					x:center.x - data.width / 2 * module.scale,
					y:center.y - data.height / 2 * module.scale,
				};

				var data = this.drawingTool.scaleAndGetImageData(data, module.scale);
				this._mergeImageDatas(targetData, data, topleft, module);
				
				
			}.bind(this)
		);
	}
};

model.CompositeImage.prototype._mergeImageDatas =
    function(to, from, position, module)
{
	//Console.log(module, module.direction);
	var pixelsInFrom = from.width * from.height;
	var sub = new THREE.Vector3(255*0.5, 255*0.5, 255*0.5);
	
	for (var x = 0; x < from.width; x++)
	{
		for (var y = 0; y < from.height; y++)
		{
			var fi = (y * from.width + x) * 4;
			var ti = ((y + position.y) * to.width + (x + position.x)) * 4;
			
			if (from.data[fi+3] > 0)
			{
				var fv = new THREE.Vector3(from.data[fi+0], from.data[fi+1], from.data[fi+2]);
				var tv = new THREE.Vector3(to.data[ti+0], to.data[ti+1], to.data[ti+2]);
				
				fv.sub(sub).multiplyScalar(2);
				tv.sub(sub).multiplyScalar(2);
				
				this._swapNormalsByRotation(fv, module);
				
				var alpha = from.data[fi+3];
				var result = tv.multiplyScalar(255 - alpha).add(fv.multiplyScalar(alpha)).normalize();
				
				to.data[ti+0] = 255 * (result.x * 0.5 + 0.5);
				to.data[ti+1] = 255 * (result.y * 0.5 + 0.5);
				to.data[ti+2] = 255 * (result.z * 0.5 + 0.5);
			}
		}
	}
	
};
	
model.CompositeImage.prototype._swapNormalsByRotation = function(vector, module)
{
	var y = vector.y;
	var x = vector.x; 
	
	switch (module.direction)
    {
        case 2:
            vector.x = -y;
            vector.y = x;
            break;
        case 3:
            vector.x = y;
            vector.y = -x;
            break;
        case 4:
            vector.x = -x;
            vector.y = -y;
            break;
    }
};
	
