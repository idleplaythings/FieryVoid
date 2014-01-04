model.FixedRangeStrategy = function FixedRangeStrategy(args)
{
	this.maxRange = args.maxRange;
};

model.FixedRangeStrategy.prototype.isValid = function(hitCalculation)
{
	return this.maxRange;
};

model.FixedRangeStrategy.prototype.evaluateRange = function(hitCalculation)
{
	if (hitCalculation.getRange() > this.maxRange)
		hitCalculation.miss('Out of range');
};
