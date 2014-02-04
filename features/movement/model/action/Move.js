model.movement.Action.Move = function Move()
{
};

model.movement.Action.Move.prototype = 
	Object.create(model.movement.Action.prototype);

model.movement.Action.Move.prototype.getPosition = function(current, movementAbility)
{
	return current.moveToDirection(current.getDirection());
};

model.movement.Action.Move.prototype.getTurnDelay = function()
{
	return -1;
};

model.movement.Action.Move.prototype.getSlipDelay = function()
{
	return -1;
};

model.movement.Action.Move.prototype.validateInContextOrFail = function(current)
{
	return;
};
