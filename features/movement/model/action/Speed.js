model.movement.Action.Speed = function Speed(args)
{
	this._change = args.change;
};

model.movement.Action.Speed.ACCELERATE = 1;
model.movement.Action.Speed.DEACCELERATE = -1;

model.movement.Action.Speed.prototype = 
	Object.create(model.movement.Action.prototype);


model.movement.Action.Speed.prototype.getDirection = function(current, movementAbility)
{
	var newSpeed = current.getSpeed() + this._change;
	
	if (newSpeed === 0)
	{
		return current.getFacing();
	};
	if ((current.getSpeed() === 0 && this._change === -1) || (current.getSpeed() == -1 && this._change == 1))
	{
		var max = current.getPosition().getNeighbours().length;
		return current._turn(current.getDirection(), max / 2);
	}
	return current.getDirection();
};

model.movement.Action.Speed.prototype.getSpeed = 
	function(current, movementAbility)
{
	return Math.abs(current.getSpeed() + this._change);
};

model.movement.Action.Speed.prototype.getThrustCost = 
	function(current, movementAbility)
{
	var thrustCost = new model.movement.ThrustCost();
	var cost = movementAbility.getAccelerationCost();
	
	var dir = this._speedChange < 0 ? 0 : 180;
	thrustCost.setCost(current.getThrusterDirection(dir), cost);
	
	return thrustCost;
};

model.movement.Action.Speed.prototype.validateInContextOrFail = function(current)
{
	return;
};

