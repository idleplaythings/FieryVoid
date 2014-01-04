model.Weapon = function Weapon(args)
{
	if ( ! args)
		args = {};
		
	this.rangeStrategy = args.rangeStrategy || new model.FixedRangeStrategy(50);
	this.targetStrategy = args.targetStrategy || new model.ShipTargetStrategy();
};
