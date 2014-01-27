model.movement.ThrustCost = function ThrustCost()
{
	this.costs = {};
};

model.movement.ThrustCost.prototype.setCost = function(directions, cost)
{
	if (cost <= 0)
		return;
	
	if (this.costs[directions])
		this.costs[directions] += cost;

	this.costs[directions] = cost;
};
