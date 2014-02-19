model.WeaponArcService = function WeaponArcService()
{
	this._rayTraceCount = 360;
};

model.WeaponArcService.prototype.calculateWeaponArc = function (module, shipDesign)
{
	var center = module.getCenterPosition();
	var height = module.getPositionHeight(shipDesign.hullLayout);
	if ( this.hasTurret(module))
		return height+1;

	console.log(center);

	var currentVisible = false;

	var arcs = [];

	for (var i = 0; i <= this._rayTraceCount; i++)
	{
		var theta = 360 / this._rayTraceCount * i;
		var target = MathLib.getPointInDirectionInvertY(100, theta, center.x, center.y);
		var tiles = new model.Raytrace(center, target).get();

		var visible = this.checkTiles(tiles, shipDesign);

		if (currentVisible != visible)
			arcs.push({angle: theta, visible: visible});
	}

	return this._evaluateArcs(arcs);
};

model.WeaponArcService.prototype._combineArcs = function (arcs)
{
	var combinedArcs = [];
	arcs.forEach(function(arc){
		if (arc.visible)
			combinedArcs.push(new model.WeaponArc(arc.angle));

		if (! arc.visible)
			combinedArcs.push(combinedArcs.pop().setEnd(arc.angle));
	}, this);

	console.log(combinedArcs);
	if (! combinedArcs[combinedArcs.length-1].isClosed())
	{
		combinedArcs[0].combine(combinedArcs.pop());
	}

	return combinedArcs;
};

model.WeaponArcService.prototype.checkTiles = function (tiles, shipDesign)
{
	return tiles.every(function(tile){

		if (shipDesign.hullLayout.isUnavailableTile(tile))
			return true;

		if (this.getTileHeight(tile, shipDesign) < height)
			return true;

		return false;

	}, this);
};

model.WeaponArcService.prototype.hasTurret = function (module)
{
	return false;
};

model.WeaponArcService.prototype.getTileHeight = function (pos, shipDesign)
{
	var module = shipDesign.getModuleInPosition(pos);

	if (! module && this.shipDesign.hullLayout.isUnavailableTile(tile))
		return 0;

	var tileHeight = this.shipDesign.hullLayout.getTileHeight(pos);

	if (! module)
		return tileHeight;

	if (module)
	{
		if ( this.hasTurret(module))
			return tileHeight+1;
	}

	return tileHeight;
};