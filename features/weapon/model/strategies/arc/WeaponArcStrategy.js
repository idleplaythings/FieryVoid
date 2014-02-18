model.WeaponArcStrategy = function WeaponArcStrategy(args)
{
	this._arcSize = args.weaponArc;
};

model.WeaponArcStrategy.prototype.isValid = function()
{
	return true;
};