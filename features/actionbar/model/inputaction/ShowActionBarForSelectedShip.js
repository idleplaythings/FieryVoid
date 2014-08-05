model.inputAction.ShowActionBarForSelectedShip = function ShowActionBarForSelectedShip(
    dispatcher,
    selectedShip,
    gameState,
    actionBar
)
{
    this._dispatcher = dispatcher;
    this._selectedShip = selectedShip;
    this._gameState = gameState;
    this._actionBar = actionBar;

    this._shipSelectedCallback = null;
}

model.inputAction.ShowActionBarForSelectedShip.prototype.onShipSelected = function(event)
{
    this._showActionBar(event.ship);
};

model.inputAction.ShowActionBarForSelectedShip.prototype.onActivation = function()
{
    var ship = this._selectedShip.getShip();

    if (ship) {
        this._showActionBar(ship);
    }

    this._shipSelectedCallback = this._dispatcher.attach('ShipSelectedEvent', this.onShipSelected.bind(this));
};

model.inputAction.ShowActionBarForSelectedShip.prototype.onDeactivation = function()
{
    this._dispatcher.detach('ShipSelectedEvent', this._shipSelectedCallback);
    this._hideActionBar();
};

model.inputAction.ShowActionBarForSelectedShip.prototype._showActionBar = function(ship){
    this._actionBar
        .create(ship, this._gameState.getTurn())
        .show();
};

model.inputAction.ShowActionBarForSelectedShip.prototype._hideActionBar = function(){
    this._actionBar.hide();
};