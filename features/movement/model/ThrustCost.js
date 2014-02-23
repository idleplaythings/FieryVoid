model.movement.ThrustCost = function ThrustCost(args)
{
	if ( ! args)
		args = {};
	
	this.costs = args.costs ||  {
		0: 0,
		90: 0,
		180: 0,
		270: 0
	};
};

model.movement.ThrustCost.prototype.setCost = function(directions, cost)
{
	if (cost <= 0)
		return;
	
	this.costs[directions] += cost;
	
	return this;
};

model.movement.ThrustCost.prototype.getCosts = function()
{
	return this.costs;
};

model.movement.ThrustCost.prototype.getTotalCost = function()
{
	return this.costs.reduce(function(total, cost){ return total + cost; }, 0);
};

model.movement.ThrustCost.prototype.add = function(cost)
{
	var newCost = new model.movement.ThrustCost();
	
	for (var d in this.costs)
	{
		newCost.setCost(d, this.costs[d]);
	}
	
	for (var d in cost.costs)
	{
		newCost.setCost(d, cost.costs[d]);
	}
	
	return newCost;
};
