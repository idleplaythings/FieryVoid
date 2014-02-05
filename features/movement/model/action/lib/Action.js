if ( typeof model === 'undefined')
    model = {};

if ( typeof model.movement === 'undefined')
    model.movement = {};

model.movement.Action = function Action()
{
	
};

model.movement.Action.THRUSTER_FRONT = 0;
model.movement.Action.THRUSTER_RIGHT = 90;
model.movement.Action.THRUSTER_REAR = 180;
model.movement.Action.THRUSTER_LEFT = 270;

model.movement.Action.prototype.apply = 
	function(current, movementAbility)
{
	return new model.movement.Position({
		position: this.getPosition(current, movementAbility),
		facing: this.getFacing(current, movementAbility),
		direction: this.getDirection(current, movementAbility),
		speed: this.getSpeed(current, movementAbility),
		turnDelay: this.getTurnDelay(current, movementAbility),
		slipDelay: this.getSlipDelay(current, movementAbility),
		thrustCost: current.getThrustCost().add(this.getThrustCost(current, movementAbility))
	});
};

model.movement.Action.prototype.getPosition = function(current, movementAbility)
{
	return current.getPosition();
};

model.movement.Action.prototype.getFacing = function(current, movementAbility)
{
	return current.getFacing();
};

model.movement.Action.prototype.getDirection = function(current, movementAbility)
{
	return current.getDirection();
};

model.movement.Action.prototype.getSpeed = function(current, movementAbility)
{
	return current.getSpeed();
};

model.movement.Action.prototype.getTurnDelay = function(current, movementAbility)
{
	return current.getTurnDelay();
};

model.movement.Action.prototype.getSlipDelay = function(current, movementAbility)
{
	return current.getSlipDelay();
};

model.movement.Action.prototype.getThrustCost = function(current, movementAbility)
{
	return new model.movement.ThrustCost();
};

model.movement.Action.prototype.getTotalThrustCost = function(current, movementAbility)
{
	var cost = this.getThrustCost(current, movementAbility);
	
	if ( ! cost)
		return 0;
		
	return cost.getTotalCost();
};
