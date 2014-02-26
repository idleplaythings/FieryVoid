model.PositionService = function PositionService(gridPositionComparison, gridService, gameState, shipMovementAnimationService)
{
	this._gameState = gameState;
	this._gridPositionComparison = gridPositionComparison;
	this._gridService = gridService;
	this._shipMovementAnimationService = shipMovementAnimationService;
};

model.PositionService.prototype.getScenePosition = function(ship)
{
	if ( ! this._shipMovementAnimationService)
		throw new Error("Trying to get scene position but animation service is not set. Are you on server?");

	return this._shipMovementAnimationService.getShipScenePosition(
		ship, this._gameState.getCurrentDisplayTurn(), this._gameState.getCurrentDisplayTime());
};

model.PositionService.prototype.getSceneFacing = function(ship)
{
	if ( ! this._shipMovementAnimationService)
		throw new Error("Trying to get scene facing but animation service is not set. Are you on server?");

	return this._shipMovementAnimationService.getShipSceneFacing(
		ship, this._gameState.getCurrentDisplayTurn(), this._gameState.getCurrentDisplayTime());
};

model.PositionService.prototype.getShipTileOnScenePosition = function(ship, scenePosition)
{
	var componentPosition = new model.ShipDesignPositionService(
		ship.shipDesign, this.getScenePosition(ship), this.getSceneFacing(ship)
	);

	return componentPosition.getTileOnPosition(scenePosition);
};

model.PositionService.prototype.shipOccupiesScenePosition = function(ship, scenePosition)
{
	var componentPosition = new model.ShipDesignPositionService(
		ship.shipDesign, this.getScenePosition(ship), this.getSceneFacing(ship)
	);

	return componentPosition.occupiesPosition(scenePosition);
};

model.PositionService.prototype.getComponentPositionService = function(ship)
{
	return new model.ShipDesignPositionService(
		ship.shipDesign, this.getScenePosition(ship), this.getSceneFacing(ship)
	);
};