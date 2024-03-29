model.HitLocationService = function HitLocationService(positionService)
{
	this._positionService = positionService;
};

model.HitLocationService.prototype.applyScatter = function(shooter, target, weapon, targetTile)
{
	//TODO
};

model.HitLocationService.prototype._getWeaponDirection = function(shooter, weapon, target, targetTile, turn)
{
	var weaponPosition = this._positionService.getComponentPositionService(shooter, turn, 0).getModuleCenterPositionInScene(weapon);
	var targetPosition = this._positionService.getComponentPositionService(target, turn, 0).getTilePositionInScene(targetTile);
	var weaponDirection = MathLib.getAzimuthFromTarget(targetPosition, weaponPosition);
  var targetFacing = this._positionService.getSceneFacing(target, turn, 0);
	
  var relativeDirection = MathLib.addToAzimuth(360 - targetFacing, weaponDirection);
	return relativeDirection;
};

model.HitLocationService.prototype.isOnWeaponArc = function(shooter, weapon, target, targetTile, turn){
    var weaponPosition = this._positionService.getScenePosition(shooter, turn, 0);
    var targetPosition = this._positionService.getScenePosition(target, turn, 0);
    var targetDirection = MathLib.getAzimuthFromTarget(weaponPosition, targetPosition);
    var shooterFacing = this._positionService.getSceneFacing(shooter, turn, 0);

    var relativeDirection = MathLib.addToAzimuth(360 - shooterFacing, targetDirection);

    var onArc = Boolean(weapon.getArcs().filter(function(arc){
        return arc.isOnArc(relativeDirection);
    }).pop());

    return onArc;
};

model.HitLocationService.prototype.isValidTarget = function(shooter, weapon, target, targetTile, turn)
{
    if ( ! this.isOnWeaponArc(shooter, weapon, target, targetTile, turn)){
      console.log("not on weapon arc");
      return false;
    }

	var weaponDirection = this._getWeaponDirection(shooter, weapon, target, targetTile, turn);
	var tiles = this.getValidTargetTiles(weaponDirection, targetTile, target.shipDesign, target.getDamage());
	
	var tile = tiles.filter(function(tile){
		return tile.x == targetTile.x && tile.y == targetTile.y;
	})[0];
	return (tile) ? true : false;
};

model.HitLocationService.prototype.getClosestValidTarget = function(shooter, weapon, target, targetTile, turn)
{
    if ( ! this.isOnWeaponArc(shooter, weapon, target, targetTile, turn)){
        return;
    }

	var weaponDirection = this._getWeaponDirection(shooter, weapon, target, targetTile, turn);
	var tiles = this.getValidTargetTiles(weaponDirection, targetTile, target.shipDesign, target.getDamage());
	var tile = tiles.filter(function(tile){
		return tile.x == targetTile.x && tile.y == targetTile.y;
	})[0];

	if (tile)
		return tile;

	return tiles.pop();
};

model.HitLocationService.prototype.getHitTilePercentage = function(scatter, targetTile, shipDesign)
{
	var tiles = this.getTilesOnScatterRadius(scatter, targetTile, shipDesign);
	var all = tiles.length;
	var hits = tiles.filter(function(tile){return tile.height > 0}).length;

	return hits / all;
};

model.HitLocationService.prototype.getTilesOnScatterRadius = function(scatter, targetTile, shipDesign)
{
	var start = {
		x: Math.floor(targetTile.x - scatter),
		y: Math.floor(targetTile.y - scatter)
	};

	var end = {
		x: Math.ceil(targetTile.x + scatter),
		y: Math.ceil(targetTile.y + scatter)
	};

	var tiles = [];

	for (var x = start.x; x <= end.x; x++)
	{
		for (var y = start.y; y <= end.y; y++)
		{
			var position = {x:x, y:y};
			if (MathLib.distance(targetTile, position) > scatter)
				continue;

			var height = 0;
			if ( ! shipDesign.hullLayout.isUnavailableTile(position))
			{
				height = shipDesign.hullLayout.getTileHeight(position);
			}

			tiles.push({
				position: position,
				height: height
			})
		}	
	}

	return tiles;
};

model.HitLocationService.prototype.getValidTargetTiles = function(weaponDirection, position, shipDesign, damageService)
{
	return this.discountUnreachableTiles(
		this.getTilesInLine(weaponDirection, position, shipDesign),
		shipDesign,
		damageService
	);
};

model.HitLocationService.prototype.getTilesInLine = function(weaponDirection, targetTile, shipDesign)
{
	var tiles = new model.DirectionalRaytrace(targetTile, weaponDirection, 100).get().reverse();

    if (tiles.indexOf(targetTile) < 0){
        tiles = tiles.concat(targetTile);
    }
	tiles = tiles.concat( new model.DirectionalRaytrace(targetTile,  MathLib.addToAzimuth(weaponDirection, 180), 100).get());

	tiles = tiles.filter(function(tile){
        return ! shipDesign.hullLayout.isUnavailableTile(tile)
    });

    return this.removeDuplicates(tiles);
};

model.HitLocationService.prototype.removeDuplicates = function(tiles)
{
    for (var i = tiles.length-1; i >= 0; i--){
        var toDelete = tiles[i];
        var duplicates = tiles.filter(function(tile){
            return (tile.x == toDelete.x && tile.y == toDelete.y);
        });

        if (duplicates.length > 1){
            tiles.splice(i, 1);
        }
    }

    return tiles;
};

model.HitLocationService.prototype.discountUnreachableTiles = function(tilePositions, shipDesign, damageService)
{
	var maxHeight = 0;
	var penetrationDistance = Math.ceil(tilePositions.length / 2);
	var count = 0;

	return tilePositions.filter(function(position){
		if (damageService.isDestroyedTile(position))
			return false;

		count ++;

		if (count > penetrationDistance)
			return false;

		var height = shipDesign.hullLayout.getTileHeight(position);
		if (height < maxHeight)
			return false;

		if (height > maxHeight)
			maxHeight = height;

		return true;
	}, this);
};