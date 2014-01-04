model.RangePenaltyStrategy = function RangePenaltyStrategy(args)
{
	this.penalty = args.rangePenalty;
};

model.RangePenaltyStrategy.prototype.isValid = function(hitCalculation)
{
	return this.penalty;
};

model.RangePenaltyStrategy.prototype.evaluateRange = function(hitCalculation)
{
	var range = hitCalculation.getRange();
	
	if (range === 0)
		return;
		
	var description = 'Range penalty, -' + this.rangePenaltyPerHex + ' per hex.';
	var penalty = this.penalty * range;
	hitCalculation.decreaseHitChange(penalty, description);
};
