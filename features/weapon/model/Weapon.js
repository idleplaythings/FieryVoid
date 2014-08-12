model.Weapon = function Weapon(args, module)
{
	if ( ! args)
		args = {};
		
	this.rangeStrategy = args.rangeStrategy || new model.FixedRangeStrategy(50);
	this.targetStrategy = args.targetStrategy || new model.ShipTargetStrategy();
	this.arcStrategy = args.arcStrategy || new model.WeaponArcStrategy(60);

	this._arcs = null;
	this._module = module;
};

model.Weapon.prototype.calculateWeaponArcs = function(shipDesign, arcService)
{
	this._arcs = arcService.calculateWeaponArc(this._module, shipDesign);
};

model.Weapon.prototype.getArcs = function()
{
	return this._arcs;
};