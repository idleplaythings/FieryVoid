model.SituationDisplayService = function SituationDisplayService(gameScene, gameState, shipService, dispatcher, uiResolver)
{
	this._gameScene = gameScene;
	this._gameState = gameState;
	this._shipService = shipService;
	this._dispatcher = dispatcher;
	this._uiResolver = uiResolver;

	this._actionBar = new model.ActionBar(dispatcher, uiResolver);

	this._weaponIndicatorService = new model.WeaponIndicatorService(this._gameScene, this._gameState)
	
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
	var ship = event.payload;

	if ( ! ship)
		return;

	this._displayIndicators(ship);
	this._actionBar.onShipSelected(ship);
};

model.SituationDisplayService.prototype._displayIndicators = function(ship)
{
	console.log("display");
	ship.shipDesign.modules.forEach(function(module){console.log(module.idOnShip)});
	this._weaponIndicatorService.displayFireOrders(ship, ship.status.managers.weapon.getFireOrders(this._gameState.getTurn()), this._shipService);
};

model.SituationDisplayService.prototype.onShipStatusChange = function(event)
{
	
};