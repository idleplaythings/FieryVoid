var actions = model.movement.Action;

model.movement.ShipMovementHandler = function ShipMovementHandler(gameState, gridService)
{
	this._gameState = gameState;
	this._gridService = gridService;	
};

model.movement.ShipMovementHandler.prototype.setStartPosition = function(ship, movementPosition)
{
	var route = this.generateDefaultRoute(ship, 0, movementPosition);
	ship.getMovement().addRoute(route);
};

model.movement.ShipMovementHandler.prototype.generateDefaultRoute = function(ship, turn, movementPosition)
{
	var movementAbility = ship.getMovement().getMovementAbility();
	var modifiers = [];

	var speed = movementPosition.getSpeed();
	while(speed--)
	{
		modifiers.push(new actions.Move());
	}

	return new model.movement.Route(turn, movementPosition, movementAbility, modifiers);
};