model.inputAction.CustomCursor = function InputActionLightBlueArrowCursor(gameContainer, cursorClass)
{
	this._gameContainer = gameContainer;
  this._cursorClass = cursorClass;
}

model.inputAction.CustomCursor.prototype.onActivation = function(event)
{
    this._gameContainer.get().addClass(this._cursorClass);
};

model.inputAction.CustomCursor.prototype.onDeactivation = function(event)
{
    this._gameContainer.get().removeClass(this._cursorClass);
};