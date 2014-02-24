model.GameActionManager = function GameActionManager(inputModeFactory, uiEventManager)
{
	//this._weaponActionManager = weaponActionManager;
	this._inputModeFactory = inputModeFactory;
	this._uiEventManager = uiEventManager;
};

model.GameActionManager.prototype.init = function()
{
	console.log("GameActionManager init", this._inputModeFactory, this._uiEventManager)
	this._uiEventManager.addInputMode(this._inputModeFactory.create('model.InputModeSelect'));
}