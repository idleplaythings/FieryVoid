model.inputAction.TargetShipOnClick = function TargetShipOnClick(
  selectedShip, weaponService, shipService, gameState, dispatcher, gameActionManager)
{
  this._shipService = shipService;
  this._weaponService = weaponService;
  this._selectedShip = selectedShip;
  this._gameState = gameState;
  this._dispatcher = dispatcher;
  this._gameActionManager = gameActionManager;
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

  targetShip.call(this, ship, tile, inputState.get('selectedWeapons'), inputState);
};

var targetShip = function(target, tile, weapons, inputState)
{
  var shooter = this._selectedShip.getShip();
  var turn = this._gameState.getTurn();

  var firingWeapons = [];
  var nonFiringweapons = weapons.filter(function(weapon){
    var valid = this._weaponService.isValidTarget(shooter, target, weapon, tile, turn);
    if (valid){
      this._weaponService.addFireOrder(shooter, target, weapon, tile, turn);
    }

    firingWeapons.push(weapon);

    return ! valid;
  }.bind(this));

  inputState.set('selectedWeapons', nonFiringweapons);

  firingWeapons.forEach(function(weapon){
    this._dispatcher.dispatch({name: "weaponDeselectedEvent", ship: shooter, module: weapon, modules: nonFiringweapons});
  }, this);

  if (nonFiringweapons.length === 0){
    this._gameActionManager.activateDefaultInputMode();
  }
};