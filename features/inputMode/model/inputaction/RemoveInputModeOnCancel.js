model.inputAction.RemoveInputModeOnCancel = function RemoveInputModeOnCancel(gameActionManager)
{
    this._gameActionManager = gameActionManager;
}


model.inputAction.RemoveInputModeOnCancel.prototype.onKeyUp = function(event)
{
    if (event.key instanceof model.Hotkey.Cancel){
        this._gameActionManager.activateDefaultInputMode();
    }
};
