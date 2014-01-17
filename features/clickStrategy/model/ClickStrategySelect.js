model.ClickStrategySelect = function ClickStrategySelect(shipService)
{
	this.shipService = shipService;
};

model.ClickStrategySelect.prototype.clickShip = function(ship, position, event)
{
	console.log("select ship", ship);
	this.shipService.selectShip(ship);
	
	event.stop();
};

model.ClickStrategySelect.prototype.clickHex = function(hex, event)
{
	var ship = this.shipService.getSelectedShip();
	
	if ( ! ship)
		return;
		
	ship.status.managers.movement.targetHex(hex);
	event.stop();
};

model.ClickStrategySelect.prototype.activate = function()
{
	jQuery("#gameContainer").addClass('selectCursor');
};

model.ClickStrategySelect.prototype.deactivate = function()
{
	jQuery("#gameContainer").removeClass('selectCursor');
};