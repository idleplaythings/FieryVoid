model.inputAction.Replay = function Replay(gameState)
{
    this._gameState = gameState;
}

model.inputAction.Replay.prototype.onActivation = function()
{
    this._gameState.replay();
};

model.inputAction.Replay.prototype.onKeyUp = function(event)
{
    if (event.key instanceof model.Hotkey.Cancel){
        this._gameState.endReplay();
    }
};
