model.inputAction.Replay = function Replay(gameState, effectManager)
{
  this._gameState = gameState;
  this._effectManager = effectManager;
}

model.inputAction.Replay.prototype.onActivation = function()
{
  var turn = this._gameState.getTurn() - 1;

  //TODO: Remeber that each ship icon also has an effect manager that must be notified
/*
  var bolt = new effect.particle.Bolt({
    startTime: 0.0,
    endTime: 1.0,
    start: {x:0, y:0},
    end: {x:10000, y:0},
    velocity: 768,
    turn:turn
  });

  this._effectManager.register(bolt);
  */

  this._effectManager.loadTurn(turn);
  this._gameState.replay(turn);
};

model.inputAction.Replay.prototype.onKeyUp = function(event)
{
  if (event.key instanceof model.Hotkey.Cancel){
    this._gameState.endReplay();
  }
};
