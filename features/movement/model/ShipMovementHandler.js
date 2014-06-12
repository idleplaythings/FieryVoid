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
	var movementAbility = this.getMovementAbility(ship);
	var modifiers = [];

	var speed = movementPosition.getSpeed();
	while(speed--)
	{
		modifiers.push(new model.movement.Action.Move());
	}

	return new model.movement.Route(turn, movementPosition, movementAbility, modifiers);
};


model.movement.ShipMovementHandler.prototype.getMovementAbility = function(ship, turn)
{
    return new model.movement.MovementAbility({
    	accelerationCost: 1,
  		turnCostSpeedFactor: 0.001,
  		turnDelaySpeedFactor: 0.001,
  		thrustAvailable: 20,
  		thrusters: [
        new model.movement.Thruster({moduleId:1, direction:0, efficiency: 1, max: 10}),
        new model.movement.Thruster({moduleId:2, direction:90, efficiency: 1, max: 10}),
        new model.movement.Thruster({moduleId:3, direction:270, efficiency: 1, max: 10}),
        new model.movement.Thruster({moduleId:4, direction:180, efficiency: 1, max: 15})
      ]
    });
};
