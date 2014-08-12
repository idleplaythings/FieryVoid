model.inputAction.ShowWeaponTargetingOnMouseOver = function ShowWeaponTargetingOnMouseOver(
    weaponIndicatorService,
    selectedShip,
    gameState,
    hitLocationService,
    shipService
)
{
    this._weaponIndicatorService = weaponIndicatorService;
    this._selectedShip = selectedShip;
    this._gameState = gameState;
    this._hitLocationService = hitLocationService;
    this._shipService = shipService;
}

model.inputAction.ShowWeaponTargetingOnMouseOver.prototype.onDeactivation = function()
{
    this._weaponIndicatorService.removeAll();
};

model.inputAction.ShowWeaponTargetingOnMouseOver.prototype.onMouseMove = function(event, inputMode, inputState)
{
    var scenePosition = event.game;

    var shipAndTile = this._shipService.getShipAndTileOnScenePosition(scenePosition);
    var ship = shipAndTile ? shipAndTile.ship : null;
    var tile = shipAndTile ? shipAndTile.tile : null;
    var module = ship ? ship.shipDesign.getModuleInPosition(tile) : null;

    if (! ship || ! tile){
        this._weaponIndicatorService.removeAll();
        return;
    }


    //this.showMouseOverView(ship, module, tile);
    this.displayWeaponTargeting(ship, tile, inputState.get('selectedWeapons'));
};

model.inputAction.ShowWeaponTargetingOnMouseOver.prototype.displayWeaponTargeting = function(target, tile, weapons)
{
    this._weaponIndicatorService.removeAll();
    var shooter = this._selectedShip.getShip();
    var turn = this._gameState.getTurn();

    weapons.forEach(function(weapon){
        if (this._hitLocationService.isValidTarget(shooter, weapon, target, tile, turn)){
            //var targetTile = this._hitLocationService.getClosestValidTarget(shooter, weapon, target, tile, turn);
            this._weaponIndicatorService.addLineAndEllipse(shooter, target, weapon, tile, turn, {});
        }
    }, this);
};
