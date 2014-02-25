model.movement.Thruster = function Thruster(args)
{
	this.moduleId = args.moduleId;
	this.direction = args.direction;
	this.efficiency = args.efficiency;
	this.max = args.max;
	
	this.use = 0;
};

model.movement.Thruster.prototype.pay = function(cost)
{
	var available = this.max - this.use;
	
	if (available < 0)
		return cost;

	if (available >= cost)
	{
		this.use += cost;
		return 0;
	}
	
	this.use = this.max;
	return cost - available;
};

model.movement.Thruster.prototype.getThrustDirection = function()
{
	return this.direction;
}

