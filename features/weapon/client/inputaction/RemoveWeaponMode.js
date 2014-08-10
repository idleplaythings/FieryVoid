model.inputAction.RemoveWeaponMode = function RemoveWeaponMode(gameActionManager)
{
    this._gameActionManager = gameActionManager;
}


model.inputAction.RemoveWeaponMode.prototype.onKeyUp = function(event)
{
    if (event.key instanceof model.Hotkey.Cancel){
        this._gameActionManager.removeWeaponMode();
    }
};
