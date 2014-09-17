model.inputAction.RemoveFireOrderAtWeaponSelect = function RemoveFireOrderAtWeaponSelect(
  dispatcher,
  weaponService,
  gameState
  )
{
  this._dispatcher = dispatcher;
  this._weaponService = weaponService;
  this._gameState = gameState;

  this._weaponSelectedCallback = null;
}

model.inputAction.RemoveFireOrderAtWeaponSelect.prototype.onActivation = function(event, inputMode, inputState)
{
  this._weaponSelectedCallback = this._dispatcher.attach(
    'weaponSelectedEvent',
    onWeaponSelected.bind(this)
    );

  var turn = this._gameState.getTurn();
  inputState.get('selectedWeapons').forEach(function(weapon){
    this._weaponService.removeFireOrder(weapon, turn);
  }, this);
};

model.inputAction.RemoveFireOrderAtWeaponSelect.prototype.onDeactivation = function()
{
  this._dispatcher.detach('weaponSelectedEvent', this._weaponSelectedCallback);
};

var onWeaponSelected = function(event)
{
  var turn = this._gameState.getTurn();
  this._weaponService.removeFireOrder(event.module, turn);
};
