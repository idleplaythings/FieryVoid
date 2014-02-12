model.HitLocationService = function HitLocationService()
{
	
};

model.HitLocationService.prototype.applyScatter = function(scatter, weaponDirection, targetLocation, shipDesign, damageService)
{
	var position = {
		x: targetLocation.x + ((Math.random() * scatter * 2) - scatter),
		y: targetLocation.x + ((Math.random() * scatter * 2) - scatter)
	};

	if (shipDesign.hullLayout.isUnavailableTile(position))
		return null;

	return this.getClosestValidTarget(weaponDirection, position, shipDesign, damageService);
};

model.HitLocationService.prototype.isValidTarget = function(weaponDirection, targetLocation, shipDesign, damageService)
{
	var tiles = this.getValidTargetTiles(weaponDirection, targetLocation, shipDesign, damageService);
	var tile = tiles.filter(function(tile){
		return tile.x == targetLocation.x && tile.y == targetLocation.y;
	})[0];

	return (tile) ? true : false;
};

model.HitLocationService.prototype.getClosestValidTarget = function(weaponDirection, targetLocation, shipDesign, damageService)
{
	var tiles = this.getValidTargetTiles(weaponDirection, targetLocation, shipDesign, damageService);
	var tile = tiles.filter(function(tile){
		return tile.x == targetLocation.x && tile.y == targetLocation.y;
	})[0];

	if (tile)
		return tile;

	return tiles.pop();
};

model.HitLocationService.prototype.getHitTilePercentage = function(scatter, targetLocation, shipDesign)
{
	var tiles = this.getTilesOnScatterRadius(scatter, targetLocation, shipDesign);
	var all = tiles.length;
	var hits = tiles.filter(function(tile){return tile.height > 0}).length;

	return hits / all;
};

model.HitLocationService.prototype.getTilesOnScatterRadius = function(scatter, targetLocation, shipDesign)
{
	var start = {
		x: Math.floor(targetLocation.x - scatter),
		y: Math.floor(targetLocation.y - scatter)
	};

	var end = {
		x: Math.ceil(targetLocation.x + scatter),
		y: Math.ceil(targetLocation.y + scatter)
	};

	var tiles = [];

	for (var x = start.x; x <= end.x; x++)
	{
		for (var y = start.y; y <= end.y; y++)
		{
			var position = {x:x, y:y};
			if (MathLib.distance(targetLocation, position) > scatter)
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

model.HitLocationService.prototype.getTilesInLine = function(weaponDirection, position, shipDesign)
{
	var start = MathLib.getPointInDirectionInvertY(100, weaponDirection, position.x, position.y);
	var end = MathLib.getPointInDirectionInvertY(100, MathLib.addToAzimuth(weaponDirection, 180), position.x, position.y);
	var tiles = new model.Raytrace(start, position).get();
	tiles = tiles.concat(new model.Raytrace(position, end).get());
	return tiles.filter(function(tile){return ! shipDesign.hullLayout.isUnavailableTile(tile)});
	
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