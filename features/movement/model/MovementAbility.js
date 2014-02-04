if ( typeof model.movement === 'undefined')
    model.movement = {};

model.movement.MovementAbility = function MovementAbility(
	accelerationCost,
	turnCostSpeedFactor,
	turnDelaySpeedFactor,
	thrustAvailable,
	thrusters)
{
	this.accelerationCost = accelerationCost;
	this.turnCostSpeedFactor = turnCostSpeedFactor;
	this.turnDelaySpeedFactor = turnDelaySpeedFactor;
	this.thrustAvailable = thrustAvailable;
	this.thrusters = thrusters;
};

model.movement.MovementAbility.prototype.getTurnCostSpeedFactor = function()
{
	return this.turnCostSpeedFactor;
};

model.movement.MovementAbility.prototype.getShipTurnDelaySpeedFactor = function()
{
	return this.turnDelaySpeedFactor;
};

model.movement.MovementAbility.prototype.getAccelerationCost = function()
{
	return this.accelerationCost;
};

model.movement.MovementAbility.prototype.getAvailableThrust = function()
{
	return this.thrustAvailable;
};

model.movement.MovementAbility.prototype.getThrusters = function()
{
	return this.thrusters;
};
