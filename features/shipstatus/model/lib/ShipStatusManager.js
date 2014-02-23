if ( typeof model === 'undefined')
    model = {};

model.ShipStatusManager = function ShipStatusManager(ship, modules, timeline)
{
	this.ship = ship;
	this.modules = modules;
	this.timeline = timeline;
	this.currentTurn = null;
}

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

model.ShipStatusManager.prototype.getPositionService = function(ship)
{
    return new model.ShipDesignPositionService(
        ship.shipDesign,
        ship.status.managers.movement.getScenePositionAtTurn(this.currentTurn),
        ship.status.managers.movement.getSceneFacingAtTurn(this.currentTurn)
    );
}
