model.movement.Action.Move = function Move()
{
};

model.movement.Action.Move.prototype = 
	Object.create(model.movement.Action.prototype);

model.movement.Action.Move.prototype.getPosition = function(current, movementAbility)
{
	return current.moveToDirection(current.getDirection());
};

model.movement.Action.Move.prototype.getTurnDelay = function(current)
{
	var delay = current.getTurnDelay() - 1;
	if (delay < 0)
		delay = 0;
		
	return delay;
};

model.movement.Action.Move.prototype.getSlipDelay = function(current)
{
	var delay = current.getSlipDelay() - 1;
	if (delay < 0)
		delay = 0;
		
	return delay;
};

model.movement.Action.Move.prototype.validateInContextOrFail = function(current)
{
	return;
};
