model.DirectionalRaytrace =  function DirectionalRaytrace(start, direction, length)
{
	this._start = start;
	this._direction = direction;
	this._length = length

	this._stepLength = 0.2;
	this._step = this._getStep();


	this._tiles = this.findTiles();
};

model.DirectionalRaytrace.prototype.get = function()
{
	return this._tiles;
};

model.DirectionalRaytrace.prototype._getStep = function()
{
	var step = MathLib.getExactPointInDirectionInvertY(this._stepLength, this._direction, 0, 0);
	step.x = Math.round(step.x * 100) / 100;
	step.y = Math.round(step.y * 100) / 100;

	return step;
};

model.DirectionalRaytrace.prototype.findTiles = function()
{

	var lengthTraversed = 0;
	var currentPosition = {
		x: this._start.x,
		y: this._start.y
	};

	var tiles = [];

	while(lengthTraversed < this._length)
	{
		currentPosition.x += this._step.x;
		currentPosition.y += this._step.y;

		lengthTraversed += this._stepLength;
		var tile = this._getClosestTile(currentPosition);

		if ( ! this._compareTiles(tile, tiles[tiles.length - 1]))
		{
			tiles.push(tile);
		}
	}
	
	return tiles;
};


model.DirectionalRaytrace.prototype._compareTiles = function(a, b)
{
	if ( ! b || ! a)
		return false;

	return a.x == b.x && a.y == b.y;
}

model.DirectionalRaytrace.prototype._getClosestTile = function(tile)
{
	return{
		x:  Math.floor(tile.x),
		y:  Math.floor(tile.y)
	}
}