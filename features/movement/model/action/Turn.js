model.movement.Action.Turn = function Turn(args)
{
	if ( ! args)
		args = {};
		
	this._turnDirection = args.turnDirection;
	
	model.movement.Action.call(this, args);
	
	this._validateTurnDirection();
};

model.movement.Action.Turn.CW = 1;
model.movement.Action.Turn.CCW = -1;

model.movement.Action.Turn.prototype = 
	Object.create(model.movement.Action.prototype);

model.movement.Action.Turn.createFrom = 
	function(turnDirection, action)
{
	return new model.movement.Action.Turn({
			position: action.getPosition(),
			facing: action.turnFacing(turnDirection),
			direction: action.turnDirection(turnDirection),
			speed: action.getSpeed()
		}
	);
};

model.movement.Action.Turn.prototype.getTurnDelay = 
	function(movementStatus)
{
	return Math.ceil(
		this.speed * movementStatus.getShipTurnDelaySpeedFactor());
};

model.movement.Action.Turn.prototype.getThrustCost = 
	function(movementStatus)
{
	/*
	var thrustCost = new model.ThrustCost();
	var totalCost = 
		Math.ceil(this.movementStatus.getTurnCostSpeedFactor * this.speed);
	
	var side = this.getSideThrusterLocation(
		this.orginalDirection, this.direction);
		
	var rear = this.getRearThrusterLocation
		this.orginalDirection, this.direction);
	
	var cost = Math.floor(totalCost / 2);
	var extra = Math.floor(totalCost % 2);
	
	thrustCost.setCost(side, cost);
	thrustCost.setCost(rear, cost);
	
	return thrustCost;
	*/
};

model.movement.Action.Turn.prototype._validateTurnDirection = function()
{
	if ( this._turnDirection != model.movement.Action.Turn.CW
		&& this._turnDirection != model.movement.Action.Turn.CCW)
		throw new Error("Invalid turn direction");
};
