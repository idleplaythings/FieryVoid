model.inputAction.TargetShipOnClick = function TargetShipOnClick(
  selectedShip, weaponService, shipService, gameState)
{
  this._shipService = shipService;
  this._weaponService = weaponService;
  this._selectedShip = selectedShip;
  this._gameState = gameState;
}

model.inputAction.TargetShipOnClick.prototype.onActivation = function()
{
};

model.inputAction.TargetShipOnClick.prototype.onDeactivation = function()
{
};

model.inputAction.TargetShipOnClick.prototype.onClick = function(event, inputMode, inputState)
{
  var scenePosition = event.game;

  var shipAndTile = this._shipService.getShipAndTileOnScenePosition(scenePosition);
  var ship = shipAndTile ? shipAndTile.ship : null;
  var tile = shipAndTile ? shipAndTile.tile : null;
  var module = ship ? ship.shipDesign.getModuleInPosition(tile) : null;

  if (! ship || ! tile){
      return;
  }

  targetShip.call(this, ship, tile, inputState.get('selectedWeapons'));
};

var targetShip = function(target, tile, weapons)
{
  var shooter = this._selectedShip.getShip();
  var turn = this._gameState.getTurn();

  weapons.forEach(function(weapon){
    if (this._weaponService.isValidTarget(shooter, target, weapon, tile, turn)){
      this._weaponService.addFireOrder(shooter, target, weapon, tile, turn);
    }
  }, this);
};