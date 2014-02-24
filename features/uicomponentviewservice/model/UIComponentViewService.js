model.UIComponentViewService = function UIComponentViewService(dispatcher, shipStatusView)
{
	this._dispatcher = dispatcher;
	this._shipStatusView = shipStatusView;
	/*
	this._uiResolver = uiResolver;

	this._selectedShip = null;
	this._actionBar = new model.ActionBar(dispatcher, uiResolver, gameScene);

	this._weaponIndicatorService = new model.WeaponIndicatorService(this._gameScene, this._gameState)
	
	this._dispatcher.attach("TurnEvent", this.onTurnEvent.bind(this));
	this._dispatcher.attach("ShipSelectedEvent", this.onShipSelected.bind(this));
	this._dispatcher.attach("FireOrdersChangedEvent", this.onFireOrdersChanged.bind(this));
	*/
};

model.UIComponentViewService.prototype.animate = function(gameTime)
{
	
};

model.UIComponentViewService.prototype.onTurnEvent = function(event)
{
	
};

model.UIComponentViewService.prototype.onShipSelected = function(event)
{
	var ship = event.payload;

	if ( ! ship)
		return;

	this._selectedShip = ship;
	this._displayIndicators(ship);
	this._actionBar.onShipSelected(ship, this._gameState.getTurn());
};

model.UIComponentViewService.prototype._displayIndicators = function(ship)
{
	this.displayFireOrders(ship);
};

model.UIComponentViewService.prototype.onFireOrdersChanged = function(event)
{
	var ship = event.ship;

	if (this._selectedShip == ship)
	{
		this.displayFireOrders(ship);
	}
};

model.UIComponentViewService.prototype.displayFireOrders = function(ship)
{

	this._weaponIndicatorService.removeAll();
	this._weaponIndicatorService.displayFireOrders(ship, ship.status.managers.weapon.getFireOrders(this._gameState.getTurn()), this._shipService);
	
};