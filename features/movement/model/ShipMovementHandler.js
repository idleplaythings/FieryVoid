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

model.movement.ShipMovementHandler.prototype.addDefaultRouteFor = function(ship, turn)
{
  var startPosition = ship.getMovement().getRouteByTurn(turn-1).getNextStartPosition();

  var route = this.generateDefaultRoute(ship, turn, startPosition);
  ship.getMovement().addRoute(route);
};

model.movement.ShipMovementHandler.prototype.generateDefaultRoute = function(ship, turn, movementPosition)
{
	var movementAbility = this.getMovementAbility(ship, turn);
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
  var hullLayoutMovement = ship.getMovementAbility();

  return new model.movement.MovementAbility({
  	accelerationCost: hullLayoutMovement.baseSpeedCost,
		turnCostSpeedFactor: hullLayoutMovement.baseTurnCost,
		turnDelaySpeedFactor: hullLayoutMovement.baseTurnDelay,
		thrustAvailable: new model.movement.ThrustService().getTotalThrustProduced(ship, turn),
		thrusters: ship.getThrusters(turn).map(function(module){
      return module.getThruster().getThrusterInUse();
    })
  });
};
