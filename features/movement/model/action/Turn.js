model.movement.Action.Turn = function Turn(args)
{
	this._turnDirection = args.turnDirection;
	this._validateTurnDirection();
};

model.movement.Action.Turn.CW = 1;
model.movement.Action.Turn.CCW = -1;

model.movement.Action.Turn.prototype = 
	Object.create(model.movement.Action.prototype);

model.movement.Action.Turn.prototype.getDisplayName = function(current, movementAbility)
{
	return this._turnDirection === model.movement.Action.Turn.CW ? 'Right turn' : 'Left turn';
};

model.movement.Action.Turn.prototype.getFacing = function(current, movementAbility)
{
	return current.turnFacing(this._turnDirection);
};

model.movement.Action.Turn.prototype.getDirection = function(current, movementAbility)
{
	return current.turnDirection(this._turnDirection);
};

model.movement.Action.Turn.prototype.getTurnDelay = 
	function(current, movementAbility)
{
	return Math.ceil(
		current.getSpeed() * movementAbility.getShipTurnDelaySpeedFactor());
};

model.movement.Action.Turn.prototype.getThrustCost = 
	function(current, movementAbility)
{
	var thrustCost = new model.movement.ThrustCost();
	var totalCost = 
		Math.ceil(movementAbility.getTurnCostSpeedFactor() * current.getSpeed());
	
	var dir = this._turnDirection == model.movement.Action.Turn.CW ? 270 : 90;
	var side = current.getThrusterDirection(dir);	
	var rear = current.getThrusterDirection(180);
	
	var cost = totalCost / 2;
	
	thrustCost.setCost(side, cost);
	thrustCost.setCost(rear, cost);
	
	return thrustCost;
};

model.movement.Action.Turn.prototype._validateTurnDirection = function()
{
	if ( this._turnDirection != model.movement.Action.Turn.CW
		&& this._turnDirection != model.movement.Action.Turn.CCW)
		throw new Error("Invalid turn direction: '" + this._turnDirection + "'");
};

model.movement.Action.Turn.prototype.validateInContextOrFail = function(current)
{
	if (current.getTurnDelay() > 0)
		throw new Error("Unable to turn within turn delay");
};
