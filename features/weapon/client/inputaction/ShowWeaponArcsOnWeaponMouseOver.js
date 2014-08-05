model.inputAction.ShowWeaponArcsOnWeaponMouseOver = function ShowWeaponArcsOnWeaponMouseOver(
    dispatcher,
    arcIndicatorService,
    gameState,
    shipMovementAnimationService
)
{
    this._dispatcher = dispatcher;
    this._arcIndicatorService = arcIndicatorService;
    this._gameState = gameState;
    this._shipMovementAnimationService = shipMovementAnimationService;

    this._weaponMouseOverCallback = null;
    this._weaponMouseOutCallback = null;
}


model.inputAction.ShowWeaponArcsOnWeaponMouseOver.prototype.onActivation = function()
{
    this._weaponMouseOverCallback = this._dispatcher.attach('MouseOverWeaponEvent', this._onWeaponMouseover.bind(this));
    this._weaponMouseOutCallback = this._dispatcher.attach('MouseOutWeaponEvent', this._onWeaponMouseout.bind(this));
};

model.inputAction.ShowWeaponArcsOnWeaponMouseOver.prototype.onDeactivation = function()
{
    this._dispatcher.detach('MouseOverWeaponEvent', this._weaponMouseOverCallback);
    this._dispatcher.detach('MouseOutWeaponEvent', this._weaponMouseOutCallback);
    this._arcIndicatorService.removeAll();
};

model.inputAction.ShowWeaponArcsOnWeaponMouseOver.prototype._onWeaponMouseover = function(event)
{
    var ship = event.ship;
    var module = event.module;
    var turn = this._gameState.getTurn();

    
    var facing = this._shipMovementAnimationService.getShipSceneFacing(ship, turn);
    var position = this._shipMovementAnimationService.getShipScenePosition(ship, turn);

    this._arcIndicatorService.display(facing, module, position);
};

model.inputAction.ShowWeaponArcsOnWeaponMouseOver.prototype._onWeaponMouseout = function()
{
    this._arcIndicatorService.removeAll();
};