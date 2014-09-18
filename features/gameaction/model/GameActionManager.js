model.GameActionManager = function GameActionManager(inputModeFactory, uiEventManager, shipMovementAnimationService, dispatcher, gameState)
{
	this._inputModeFactory = inputModeFactory;
	this._uiEventManager = uiEventManager;
	this._shipMovementAnimationService = shipMovementAnimationService;
  this._gameid = null;
  this._dispatcher = dispatcher;
  this._gameState = gameState;
  this._defaultInputMode = 'model.InputModeMovement';
};

model.GameActionManager.prototype.activateDefaultInputMode = function(){
  this._uiEventManager.setInputMode(this._inputModeFactory.create(this._defaultInputMode));
};

model.GameActionManager.prototype.init = function(gameid){
  this._gameid = gameid;
	this.activateDefaultInputMode();
  this._dispatcher.attach('TurnStart', this._onTurnEvent.bind(this));
  this._dispatcher.attach('ReplayEnd', this._onReplayEnd.bind(this));
  this._dispatcher.attach('actionBarClickEvent', actionBarClicked.bind(this));
};

model.GameActionManager.prototype.commitTurn = function(){
  Meteor.call('CommitTurn', this._gameid, function(error){
    if (error){
      console.log('committing turn failed', error);
    }
  })
}

model.GameActionManager.prototype.setWeaponSelectedMode = function(selectedWeapons){
  var inputMode = this._inputModeFactory.create('model.InputModeWeaponSelected');
  inputMode.setState('selectedWeapons', selectedWeapons);
  this._uiEventManager.setInputMode(inputMode);
};

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
    this.activateDefaultInputMode();
};

model.GameActionManager.prototype._onReplayEnd = function(event){
  this.activateDefaultInputMode();
};

var actionBarClicked = function(event){
  var type = event.type;
  switch (type){
    case 'movement':
      this._defaultInputMode = 'model.InputModeMovement';
      break;

    case 'weapons':
      this._defaultInputMode = 'model.InputModeWeapon';
      break;

    case 'EW':
      console.log("hi");
      this._defaultInputMode = 'model.InputModeEW';
      break;
  }

  this.activateDefaultInputMode();
};