model.inputAction.LightBlueArrowCursor = function InputActionLightBlueArrowCursor(gameContainer)
{
	this._gameContainer = gameContainer;
}

model.inputAction.LightBlueArrowCursor.prototype.onActivation = function(event)
{
    this._gameContainer.get().addClass('selectCursor');
};

model.inputAction.LightBlueArrowCursor.prototype.onDeactivation = function(event)
{
    this._gameContainer.get().removeClass('selectCursor');
};