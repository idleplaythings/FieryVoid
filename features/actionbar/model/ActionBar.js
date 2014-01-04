model.ActionBar = function ActionBar(dispatcher)
{
    this.dispatcher = dispatcher;
    this.dispatcher.attach('ShipSelectedEvent', this.onShipSelected.bind(this));
    this.ship = null;
    this.container = null;
};

model.ActionBar.prototype.create = function(ship)
{
	var container = this.getContainer();
	container.html('');
	
	var buttons = ship.status.getActionButtons();
	console.log(buttons);
	buttons.forEach(function(button){
		button.get().appendTo(container);
	});
};

model.ActionBar.prototype.onShipSelected = function(event)
{
	console.log("ship selected", event);
    var ship = event.payload;
    
    if (! ship)
		return;
		
	this.ship = ship;
	this.create(ship);
};

model.ActionBar.prototype.getContainer = function(event)
{
	if ( this.container)
		return this.container;
		
	var container = jQuery('#ActionBar');
    if (container.length == 0)
    {
		this.container = jQuery('<div id="ActionBar"></div>').appendTo('#gameContainer');
	}
	else
	{
		this.container = container;
	}
	
	return this.container;
};
