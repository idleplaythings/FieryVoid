model.inputAction.RedXCursor = function RedXCursor(gameContainer)
{
  this._gameContainer = gameContainer;
}

model.inputAction.RedXCursor.prototype.onActivation = function(event)
{
  this._gameContainer.get().addClass('removeCursor');
};

model.inputAction.RedXCursor.prototype.onDeactivation = function(event)
{
  this._gameContainer.get().removeClass('removeCursor');
};