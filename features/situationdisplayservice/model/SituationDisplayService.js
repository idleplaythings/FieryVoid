model.SituationDisplayService = function SituationDisplayService(gameScene, gameState, shipService, dispatcher, uiResolver)
{
	this._gameScene = gameScene;
	this._gameState = gameState;
	this._shipService = shipService;
	this._dispatcher = dispatcher;
	this._uiResolver = uiResolver;

	this._selectedShip = null;
	this._actionBar = new model.ActionBar(dispatcher, uiResolver, gameScene);

	this._weaponIndicatorService = new model.WeaponIndicatorService(this._gameScene, this._gameState)
	
	this._dispatcher.attach("TurnEvent", this.onTurnEvent.bind(this));
	this._dispatcher.attach("ShipSelectedEvent", this.onShipSelected.bind(this));
	this._dispatcher.attach("FireOrdersChangedEvent", this.onFireOrdersChanged.bind(this));
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

	this._selectedShip = ship;
	this._displayIndicators(ship);
	this._actionBar.onShipSelected(ship, this._gameState.getTurn());
};

model.SituationDisplayService.prototype._displayIndicators = function(ship)
{
	this.displayFireOrders(ship);
};

model.SituationDisplayService.prototype.onFireOrdersChanged = function(event)
{
	var ship = event.ship;

	if (this._selectedShip == ship)
	{
		this.displayFireOrders(ship);
	}
};

model.SituationDisplayService.prototype.displayFireOrders = function(ship)
{

	this._weaponIndicatorService.removeAll();
	this._weaponIndicatorService.displayFireOrders(ship, ship.status.managers.weapon.getFireOrders(this._gameState.getTurn()), this._shipService);
	
};