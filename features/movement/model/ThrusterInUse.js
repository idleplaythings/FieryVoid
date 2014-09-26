model.movement.ThrusterInUse = function ThrusterInUse(args)
{
	this.moduleId = args.moduleId;
  this.direction = args.direction;
  this.efficiency = args.efficiency;
  this.max = args.max;
  this.over = args.over;
	this.use = args.use || 0;
};

model.movement.ThrusterInUse.prototype.pay = function(cost)
{
	var available = this.getAvailable();
	console.log(available);
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

model.movement.ThrusterInUse.prototype.getThrustDirection = function()
{
  switch(this.direction)
  {
    case 1: return 0;
    case 2: return 270;
    case 3: return 90;
    case 4: return 180;
  }
};

model.movement.ThrusterInUse.prototype.getAvailable = function()
{
	return this.max - this.use;
};


