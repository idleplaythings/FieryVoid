if ( typeof model.movement === 'undefined')
    model.movement = {};

model.movement.MovementAbility = function MovementAbility(args)
{
	this.accelerationCost = args.accelerationCost;
	this.turnCostSpeedFactor = args.turnCostSpeedFactor;
	this.turnDelaySpeedFactor = args.turnDelaySpeedFactor;
	this.thrustAvailable = args.thrustAvailable;
	this.thrusters = args.thrusters;
};

model.movement.MovementAbility.deserialize = function(serialized)
{
	serialized.thrusters = serialized.thrusters.map(function(thruster){
		return new model.movement.ThrusterInUse(thruster);
	});
	
	return new model.movement.MovementAbility(serialized);
};

model.movement.MovementAbility.prototype.serialize = function()
{
	return {
		accelerationCost: this.accelerationCost,
		turnCostSpeedFactor: this.turnCostSpeedFactor,
		turnDelaySpeedFactor: this.turnDelaySpeedFactor,
		thrustAvailable: this.thrustAvailable,
		thrusters: this.thrusters
	};
};

model.movement.MovementAbility.prototype.getTurnCostSpeedFactor = function()
{
	return this.turnCostSpeedFactor;
};

model.movement.MovementAbility.prototype.getShipTurnDelaySpeedFactor = function()
{
	console.log(this.turnDelaySpeedFactor);
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
