model.DamageTile = function DamageTile()
{
	this.reset();
};

model.DamageTile.prototype.reset = function()
{
	this._brush = 0;
	this._texture = 0;
	this._opacity = 255;
	this._scale = 127;
	this._position = {x:0, y:0};
	this._holeSize = 0;
	
	return this;
};

model.DamageTile.prototype.setOpacity = function(value) // 0 - 1
{
	this._opacity = Math.floor(value * 255);
	return this;
};

model.DamageTile.prototype.setHoleSize = function(value) //0 - 2
{
	this._holeSize = Math.floor(value * 255);
	
	return this;
};

model.DamageTile.prototype.setScale = function(value) //0 - 2
{
	this._scale = Math.floor(value * 255);
	
	return this;
};

model.DamageTile.prototype.setBrush = function(value) //0 - 2
{
	this._brush = value;
	
	return this;
};

model.DamageTile.prototype.setTexture = function(value) //0 - 2
{
	this._texture = value;
	
	return this;
};

model.DamageTile.prototype.setPosition = function(value) //0 - 2
{
	this._position = value;
	
	return this;
};

model.DamageTile.prototype.setDamageLookup = function(imageData, hullDimensions)
{
	var i = this._getPixelIndex(hullDimensions);
	
	var data = imageData.data;

	data[i+0] = this._texture;
	data[i+1] = this._brush;
	data[i+2] = this._position.x;
	data[i+3] = this._position.y;
    imageData.data = data;
    
    return this;
};

model.DamageTile.prototype.setDamageLookup2 = function(imageData, hullDimensions)
{
	var i = this._getPixelIndex(hullDimensions);
	
	var data = imageData.data;

	data[i+0] = this._scale;
	data[i+1] = this._opacity;
	data[i+2] = this._holeSize;
	data[i+3] = 0;
    imageData.data = data;
    
    return this;
};

model.DamageTile.prototype._getPixelIndex = function(hullDimensions)
{
	var pixelY = hullDimensions.height - 1 - this._position.y;
	var i = (pixelY * hullDimensions.width + this._position.x) * 4;
	
	return i;
};
