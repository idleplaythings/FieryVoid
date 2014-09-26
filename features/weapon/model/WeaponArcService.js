model.WeaponArcService = function WeaponArcService()
{
	this._rayTraceCount = 360;
};

model.WeaponArcService.prototype.calculateWeaponArc = function (module, shipDesign)
{
	var currentVisible = false;

	var arcs = [];

	for (var i = 0; i <= this._rayTraceCount; i++)
	{
		var theta = 360 / this._rayTraceCount * i;
		var visible = this._isOnArc(module, shipDesign, theta);


		if (currentVisible != visible)
		{
			arcs.push({angle: theta, visible: visible});
			currentVisible = visible;
		}
	}

	return this._evaluateArcs(arcs);
};

model.WeaponArcService.prototype._isOnArc = function(module, shipDesign, direction)
{
	var center = module.getCenterPosition();
	var height = module.getPositionHeight(shipDesign.hullLayout);
	if ( this.comesOverHull(module))
		height += 1;

	var tiles = new model.DirectionalRaytrace(center, direction, 50).get();
	return this.checkTiles(module, tiles, shipDesign, height);
};

model.WeaponArcService.prototype._evaluateArcs = function (arcs)
{
	//console.log("arcs before combine", arcs.map(function(arc){ return {start:arc.start, end:arc.end}}));
	arcs = this._combineArcs(arcs);
	//console.log("arcs after combine", arcs)
	return arcs;
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

	if (combinedArcs.length === 0) {
		return [];
	}

	if (! combinedArcs[combinedArcs.length-1].isClosed())
	{
		if (combinedArcs.length > 1)
			combinedArcs[0].combine(combinedArcs.pop());
		else
			combinedArcs[0].close();
	}

	return combinedArcs;
};

model.WeaponArcService.prototype.checkTiles = function (module, tiles, shipDesign, height)
{
	return tiles.every(function(tile){

		if (module.occupiesPosition(tile))
		{
			//console.log("the weapon itself occupies position", tile);
			return true;
		}

		if (shipDesign.hullLayout.isUnavailableTile(tile))
			return true;

		if (this.getTileHeight(tile, shipDesign) < height)
			return true;

		return false;

	}, this);
};

model.WeaponArcService.prototype.comesOverHull = function (module)
{
	return module.comesOverHull();
};

model.WeaponArcService.prototype.getTileHeight = function (tile, shipDesign)
{
	var module = shipDesign.getModuleInPosition(tile);

	if (! module && shipDesign.hullLayout.isUnavailableTile(tile))
	{
		//console.log("returning height 0 because tile ", tile, "does not have a module and is unavailable")
		return 0;
	}

	var tileHeight = shipDesign.hullLayout.getTileHeight(tile);

	if (module)
	{
		if ( this.comesOverHull(module))
		{
			//console.log("returning tile height ", tileHeight+1, " from tile ", tile, "that has module with turret, module:", module);
			return tileHeight+1;
		}
	}

	//console.log("returning tile height ", tileHeight, " from tile ", tile, "that does not have a module")
	return tileHeight;
};