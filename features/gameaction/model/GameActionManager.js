model.GameActionManager = function GameActionManager(inputModeFactory, uiEventManager, shipMovementAnimationService)
{
	//this._weaponActionManager = weaponActionManager;
	this._inputModeFactory = inputModeFactory;
	this._uiEventManager = uiEventManager;
	this._shipMovementAnimationService = shipMovementAnimationService;
  this._gameid = null;
};

model.GameActionManager.prototype.init = function(gameid){
  this._gameid = gameid;
	this._uiEventManager.setInputMode(this._inputModeFactory.create('model.InputModeSelect'));
};

model.GameActionManager.prototype.commitTurn = function(){
  Meteor.call('CommitTurn', this._gameid, function(error){
    if (error){
      console.log('committing turn failed', error);
    }
  })
}