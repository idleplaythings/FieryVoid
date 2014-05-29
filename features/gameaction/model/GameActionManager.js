model.GameActionManager = function GameActionManager(inputModeFactory, uiEventManager, shipMovementAnimationService)
{
	//this._weaponActionManager = weaponActionManager;
	this._inputModeFactory = inputModeFactory;
	this._uiEventManager = uiEventManager;
	this._shipMovementAnimationService = shipMovementAnimationService;
};

model.GameActionManager.prototype.init = function()
{
	this._uiEventManager.setInputMode(this._inputModeFactory.create('model.InputModeSelect'));
};