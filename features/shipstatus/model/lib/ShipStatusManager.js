if ( typeof model === 'undefined')
    model = {};

model.ShipStatusManager = function ShipStatusManager(ship, modules, timeline)
{
	this.ship = ship;
	this.modules = modules;
	this.timeline = timeline;
	this.currentTurn = null;
}

model.ShipStatusManager.prototype.subscribeToScene = function(
    gameScene, effectManager, dispatcher, uiResolver, gridService, shipService, gameState)
{
    this.gameScene = gameScene;
    this.effectManager = effectManager;
    this.dispatcher = dispatcher;
    this.uiResolver = uiResolver;
    this.gridService = gridService;
    this.shipService = shipService;
    this.gameState = gameState;

   	this.dispatcher.attach("TurnEvent", this.onTurnEvent.bind(this));
    this.onSubscribedToScene();
};

model.ShipStatusManager.prototype.animate = function(gameTime)
{
	
};

model.ShipStatusManager.prototype.onTurnEvent = function(event)
{
	if (event.type == 'start')
	{
		this.currentTurn = event.turn;
		this.startTurn(this.currentTurn);
	}
	else if (event.type == 'end')
	{
		this.endTurn(this.currentTurn);
		this.currentTurn = null;
	}
};
model.ShipStatusManager.prototype.getTurn = function()
{
	return this.currentTurn;
}

model.ShipStatusManager.prototype.startTurn = function(turn)
{
	
};

model.ShipStatusManager.prototype.endTurn = function(turn)
{
	
};

model.ShipStatusManager.prototype.acceptOrders = function()
{
	if (this.currentTurn === null)
		return false;

	return true;
};

model.ShipStatusManager.prototype.onSubscribedToScene = function()
{
};

model.ShipStatusManager.prototype.getActionButtons = function()
{
    return [];
};

model.ShipStatusManager.prototype.getModuleById = function(id)
{
	if ( ! this.modules)
		return null;

	return this.modules.filter(function(module){
		return module.idOnShip == id;
	}).pop();
};