model.inputAction.ShowEWMenu = function ShowEWMenu(
  selectedShip, shipService, gameState, dispatcher, ewMenu, positionService)
{
  this._selectedShip = selectedShip;
  this._shipService = shipService;
  this._gameState = gameState;
  this._dispatcher = dispatcher;
  this._menu = ewMenu;
  this._positionService = positionService;
}

model.inputAction.ShowEWMenu.prototype.onActivation = function()
{
  this._menu.init();
};

model.inputAction.ShowEWMenu.prototype.onDeactivation = function()
{
  this._menu.destroy();
};

model.inputAction.ShowEWMenu.prototype.onClick = function(event, inputMode, inputState)
{
  var scenePosition = event.game;

  var shipAndTile = this._shipService.getShipAndTileOnScenePosition(scenePosition);
  var ship = shipAndTile ? shipAndTile.ship : null;
  var tile = shipAndTile ? shipAndTile.tile : null;

  if (! ship || ! tile){
    this._menu.hide();
    return;
  }

  showMenu.call(this, ship);
};

var showMenu = function(target)
{
  var owner = this._selectedShip.getShip();
  var turn = this._gameState.getTurn();

  var position = this._positionService.getScenePosition(target, turn, 0);
    
  this._menu.show(position, owner, target, turn);
};