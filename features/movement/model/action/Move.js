model.movement.Action.Move = function Move(args)
{
	model.movement.Action.call(this, args);
};

model.movement.Action.Move.prototype = 
	Object.create(model.movement.Action.prototype);

model.movement.Action.Move.createFrom = function(action)
{
	return new model.movement.Action.Move({
			position: action.getStepInDirection(action.getDirection()),
			facing: action.getFacing(),
			direction: action.getDirection(),
			speed: action.getSpeed()
		}
	);
};

model.movement.Action.Move.prototype.getTurnDelay = function()
{
	return -1;
};

model.movement.Action.Move.prototype.getSlipDelay = function()
{
	return -1;
};

model.movement.Action.Move.prototype.getThrustCost = function()
{
	return null;
};
