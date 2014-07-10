model.GameActionManager = function GameActionManager(inputModeFactory, uiEventManager, shipMovementAnimationService, dispatcher, gameState)
{
	//this._weaponActionManager = weaponActionManager;
	this._inputModeFactory = inputModeFactory;
	this._uiEventManager = uiEventManager;
	this._shipMovementAnimationService = shipMovementAnimationService;
  this._gameid = null;
  this._dispatcher = dispatcher;
  this._gameState = gameState;
};

model.GameActionManager.prototype.init = function(gameid){
  this._gameid = gameid;
	this._uiEventManager.setInputMode(this._inputModeFactory.create('model.InputModeSelect'));
  this._dispatcher.attach('TurnStart', this._onTurnEvent.bind(this));
  this._dispatcher.attach('ReplayEnd', this._onReplayEnd.bind(this));
};

model.GameActionManager.prototype.commitTurn = function(){
  Meteor.call('CommitTurn', this._gameid, function(error){
    if (error){
      console.log('committing turn failed', error);
    }
  })
}

model.GameActionManager.prototype.replay = function(event){
  this._uiEventManager.setInputMode(this._inputModeFactory.create('model.InputModeReplay'));
};

model.GameActionManager.prototype.selectMode = function(event){
  this._uiEventManager.setInputMode(this._inputModeFactory.create('model.InputModeSelect'));
};


model.GameActionManager.prototype._onTurnEvent = function(event){
  console.log("start turn", event.turn)
  this._shipMovementAnimationService.load(event.turn);
  if (event.turn > 0)
    this.replay();
  else
    this.selectMode();
}

model.GameActionManager.prototype._onReplayEnd = function(event){
  this._uiEventManager.setInputMode(this._inputModeFactory.create('model.InputModeSelect'));
}