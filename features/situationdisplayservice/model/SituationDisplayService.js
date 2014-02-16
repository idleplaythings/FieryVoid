model.SituationDisplayService = function SituationDisplayService(gameScene, gameState, shipService, dispatcher)
{
	this._gameScene = gameScene;
	this._gameState = gameState;
	this._shipService = shipService;
	this._dispatcher = dispatcher;

	this._dispatcher.attach("TurnEvent", this.onTurnEvent.bind(this));
	this._dispatcher.attach("ShipSelectedEvent", this.onShipSelected.bind(this));
	this._dispatcher.attach("ShipStatusChangeEvent", this.onShipStatusChange.bind(this));
};

model.SituationDisplayService.prototype.animate = function(gameTime)
{
	
};

model.SituationDisplayService.prototype.onTurnEvent = function(event)
{
	
};

model.SituationDisplayService.prototype.onShipSelected = function(event)
{
	
};

model.SituationDisplayService.prototype.onShipStatusChange = function(event)
{
	
};