model.GameActionManager = function GameActionManager(weaponActionManager, inputModeFactory, uiEventManager)
{
	this._weaponActionManager = weaponActionManager;
	this._inputModeFactory = inputModeFactory;
	this._uiEventManager = uiEventManager;
};

model.GameActionManager.prototype.init = function()
{

}