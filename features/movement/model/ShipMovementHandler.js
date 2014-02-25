
model.movement.ShipMovementHandler = function ShipMovementHandler(gameState, gridService)
{
	this._gameState = gameState;
	this._gridService = gridService;	
};

model.movement.ShipMovementHandler.prototype.setStartPosition = function(ship, movementPosition)
{
	if (movementPosition.toCube)
		movementPosition = movementPosition.toCube();
	
	var route = this.generateDefaultRoute(ship, 0, movementPosition);
	ship.getMovement().addRoute(route);
};

model.movement.ShipMovementHandler.prototype.generateDefaultRoute = function(ship, turn, movementPosition)
{
	var movementAbility = this._getMovementAbility(ship);
	var modifiers = [];

	var speed = movementPosition.getSpeed();
	while(speed--)
	{
		modifiers.push(new model.movement.Action.Move());
	}

	return new model.movement.Route(turn, movementPosition, movementAbility, modifiers);
};


model.movement.ShipMovementHandler.prototype._getMovementAbility = function(ship)
{
    return new model.movement.MovementAbility({
    	accelerationCost: 1,
		turnCostSpeedFactor: 0.5,
		turnDelaySpeedFactor: 0.5,
		thrustAvailable: 20,
		thrusters: [
            new model.movement.Thruster({moduleId:1, direction:0, efficiency: 1, max: 30}),
            new model.movement.Thruster({moduleId:2, direction:90, efficiency: 1, max: 30}),
            new model.movement.Thruster({moduleId:3, direction:270, efficiency: 1, max: 30}),
            new model.movement.Thruster({moduleId:4, direction:180, efficiency: 1, max: 30})
        ]
    });
};

/*
model.movement.ShipMovementHandler.prototype.getTurnDelaySpeedFactor = function()
{
    return this.ship.shipDesign.hullLayout.baseTurnDelay;
};

model.movement.ShipMovementHandler.prototype.getTurnCostSpeedFactor = function()
{
    return this.ship.shipDesign.hullLayout.baseTurnCost;
};

model.movement.ShipMovementHandler.prototype.getSpeedCost = function()
{
    return this.ship.shipDesign.hullLayout.baseSpeedCost;
};
*/
