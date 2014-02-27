if ( typeof model === 'undefined')
    model = {};

model.ComponentPositionService = function ComponentPositionService(width, height, position, facing)
{
	this._width = width;
	this._height = height;
	this._position = position || {x:0, y:0};
	this._facing = facing || 0;
};

model.ComponentPositionService.prototype.getPosition = function()
{
    return this._position;
};

model.ComponentPositionService.prototype.getFacing = function()
{
    return this._facing;
};

model.ComponentPositionService.prototype.getTilePositionInScene = function(tilePosition)
{
	var scale = 30;
    var dimensions = {
    	x:this._width * scale,
    	y:this._height * scale
    };
    
    var origin = {
        x: (dimensions.x/-2),
        y: (dimensions.y/-2)
    };

    var modulePosition = {
        x: tilePosition.x * scale + origin.x,
        y: tilePosition.y * scale + origin.y
    };

    modulePosition = MathLib.turnVector(modulePosition, this._facing);

    return new THREE.Vector3(this._position.x + modulePosition.x, this._position.y + modulePosition.y, 0);
};

model.ComponentPositionService.prototype.getTileOnPosition = function(scenePosition)
{
    var scale = 30;
    var shipPosition = this._position;

    var dimensions = {
    	x:this._width * scale,
        y:this._height * scale
    };

    var centerDelta = {x: scenePosition.x - shipPosition.x, y: scenePosition.y - shipPosition.y};
    var shipFacing = this._facing;

    centerDelta = MathLib.turnVector(centerDelta, - shipFacing);

    var delta = {x: centerDelta.x + (dimensions.x/2), y: centerDelta.y + (dimensions.y/2)};

    //console.log(scenePosition, dimensions, shipPosition, this._facing, centerDelta, delta);

    return {x: Math.floor(delta.x / scale), y: Math.floor(delta.y / scale) };
};

model.ComponentPositionService.prototype.getClosestTilePositionInScene = function(scenePosition)
{
    var scale = 30;

    var xOffset = (this._width % 2 == 1) ? scale/2: 0;
    scenePosition.x -= xOffset;

    var yOffset = (this._height % 2 == 1) ? scale/2: 0;
    scenePosition.y -= yOffset;

    var x = scenePosition.x % scale;
    x = x < 0 ? scale + x : x;

    var y = scenePosition.y % scale;
    y = y < 0 ? scale + y : y;

    return {
        x: scenePosition.x - x + xOffset,
        y: scenePosition.y - y + yOffset
    };
};