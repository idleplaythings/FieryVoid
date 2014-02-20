model.WeaponArcService = function WeaponArcService()
{
	this._rayTraceCount = 360;
};

model.WeaponArcService.prototype.calculateWeaponArc = function (module, shipDesign)
{
	var center = module.getCenterPosition();
	var height = module.getPositionHeight(shipDesign.hullLayout);
	if ( this.hasTurret(module))
		height += 1;


	var currentVisible = false;

	var arcs = [];

	//console.log("module height is ", height);

	for (var i = 0; i <= this._rayTraceCount; i++)
	{
		var theta = 360 / this._rayTraceCount * i;
		var target = MathLib.getPointInDirectionInvertY(50, theta, center.x, center.y);
		var tiles = new model.Raytrace(center, target).get();
		//console.log("module pos", center, "target", target, "theta", theta, tiles);
		var visible = this.checkTiles(module, tiles, shipDesign, height);

		//console.log("visible", visible)
		if (currentVisible != visible)
		{
			console.log("module pos", center, "target", target, "target from module", {x:target.x - center.x, y: target.y - center.y}, "theta", theta, tiles, "visible", visible);
			//console.log("visible different than previous", visible);
			arcs.push({angle: theta, visible: visible});
			currentVisible = visible;
		}
	}

	return this._evaluateArcs(arcs);
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

	//console.log(combinedArcs);
	if (! combinedArcs[combinedArcs.length-1].isClosed())
	{
		combinedArcs[0].combine(combinedArcs.pop());
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

model.WeaponArcService.prototype.hasTurret = function (module)
{
	return module.turret;
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
		if ( this.hasTurret(module))
		{
			//console.log("returning tile height ", tileHeight+1, " from tile ", tile, "that has module with turret, module:", module);
			return tileHeight+1;
		}
	}

	//console.log("returning tile height ", tileHeight, " from tile ", tile, "that does not have a module")
	return tileHeight;
};