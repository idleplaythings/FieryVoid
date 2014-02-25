model.GameActionManager = function GameActionManager(inputModeFactory, uiEventManager, shipMovementAnimationService)
{
	//this._weaponActionManager = weaponActionManager;
	this._inputModeFactory = inputModeFactory;
	this._uiEventManager = uiEventManager;
	this._shipMovementAnimationService = shipMovementAnimationService;
};

model.GameActionManager.prototype.init = function()
{
	console.log("GameActionManager init", this._inputModeFactory, this._uiEventManager)
	this._uiEventManager.addInputMode(this._inputModeFactory.create('model.InputModeSelect'));

	this._shipMovementAnimationService.renderPathForAll();
};