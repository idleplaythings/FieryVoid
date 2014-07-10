model.inputAction.TurnButtons = function TurnButtons(gameActionManager)
{
  this._gameActionManager = gameActionManager;
  this._endTurnButton = new model.Button('End Turn', this._onEndTurn.bind(this), {classes: ['menubarButton']});
  this._replayButton = new model.Button('Replay', this._onReplay.bind(this), {classes: ['menubarButton']});
}

model.inputAction.TurnButtons.prototype.onActivation = function()
{
  this._endTurnButton.get().appendTo('.menubar.top');
  this._replayButton.get().appendTo('.menubar.top');
};

model.inputAction.TurnButtons.prototype.onDeactivation = function(event)
{
  this._endTurnButton.remove();
  this._replayButton.remove();
};

model.inputAction.TurnButtons.prototype._onEndTurn = function(event)
{
  this._gameActionManager.commitTurn();
};

model.inputAction.TurnButtons.prototype._onReplay = function(event)
{
  this._gameActionManager.replay();
};