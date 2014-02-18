model.WeaponScatterStrategy = function WeaponScatterStrategy(args)
{
	this.baseScatter = args.baseScatter;
	this.rangeScatter = args.rangeScatter;
};

model.WeaponScatterStrategy.prototype.isValid = function()
{
	return true;
};