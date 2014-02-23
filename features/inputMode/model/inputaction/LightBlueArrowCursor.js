model.inputAction.LightBlueArrowCursor = function InputActionLightBlueArrowCursor(gameContainer)
{
	this._gameContainer = gameContainer;
}

model.inputAction.LightBlueArrowCursor.prototype.onActivate = function(event)
{
    this._gameContainer.get().addClass('selectCursor');
};

model.inputAction.LightBlueArrowCursor.prototype.onDeactivate = function(event)
{
    this._gameContainer.get().removeClass('selectCursor');
};