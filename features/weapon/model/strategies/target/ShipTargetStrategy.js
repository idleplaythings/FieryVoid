model.ShipTargetStrategy = function ShipTargetStrategy()
{
};

model.ShipTargetStrategy.prototype.isValid = function(hitCalculation)
{
	return true;
};

model.ShipTargetStrategy.prototype.evaluateTarget = function(hitCalculation)
{
	if ( ! hitCalculation.getTarget() instanceof Ship)
		hitCalculation.invalidTarget('Requires ship target');
};
