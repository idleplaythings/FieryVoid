model.inputAction.DisplayFireOrdersOnActionButtons = function DisplayFireOrdersOnActionButtons(
    dispatcher,
    actionBar,
    selectedShip,
    gameState
)
{
    this._dispatcher = dispatcher;
    this._actionBar = actionBar;
    this._selectedShip = selectedShip;
    this._gameState = gameState;

    this._fireOrdersChangedCallback = null;
    this._shipSelectedCallback = null;
}

model.inputAction.DisplayFireOrdersOnActionButtons.prototype.onActivation = function(event)
{
  this._shipSelectedCallback = this._dispatcher.attach('ShipSelectedEvent', onShipSelected.bind(this));
  this._fireOrdersChangedCallback = this._dispatcher.attach('fireOrdersChanged', fireOrdersChanged.bind(this));

  var ship = this._selectedShip.getShip();

  if ( ! ship){
    return;
  }

  setFireOrders.call(this, ship);    
};

model.inputAction.DisplayFireOrdersOnActionButtons.prototype.onDeactivation = function()
{
  this._dispatcher.detach('fireOrdersChanged', this._fireOrdersChangedCallback);
};

var onShipSelected = function(event){
  setFireOrders.call(this, event.ship);
};

var setFireOrders = function(ship){
  var turn = this._gameState.getTurn();
  var weapons = ship.getWeapons().filter(function(module){
    return module.hasFireOrder(turn);
  });

  this._actionBar.activateByModules(weapons);
};

var fireOrdersChanged = function(event)
{
  var weapon = event.weapon;
  var fireOrder = event.fireOrder;

  if ( ! fireOrder){
    this._actionBar.deactivateByModules(weapon);
  } else {
    this._actionBar.activateByModules(weapon);
  }
};
