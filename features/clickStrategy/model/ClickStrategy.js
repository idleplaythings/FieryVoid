model.ClickStrategy = function ClickStrategy(args)
{
	this.dispatcher = args.dispatcher;
	this.coordinateConverter = args.coordinateConverter;
	this.zoom = args.zoom;
	this.moduleView = args.moduleView;
	this.shipView = args.shipView;
	
	this.dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
};

model.ClickStrategy.prototype.onZoom = function(event)
{
	this.zoom = event.zoom;
};

model.ClickStrategy.prototype.mouseOverShip = function(ship, position, event)
{
	if (! ship)
	{
		this.moduleView.display(null);
		this.shipView.display(null);
		return;
	}
	
	var module = ship.shipDesign.getModuleInPosition(position);
	
    if (this.zoom < 1)
    {
        this.showShipView(ship, position, module, event);
    }
    else
    {
		this.showModuleView(ship, position, module, event);
	}
};

model.ClickStrategy.prototype.showModuleView = function(ship, position, module, event)
{
	this.shipView.display(null);
	var module = ship.shipDesign.getModuleInPosition(position);

    if (! module)
    {
        this.moduleView.display(null);
        return;
    }

    var modulePos = this.coordinateConverter.fromGameToViewPort(
        ship.getIcon().getModulePositionInGame(module));

    this.moduleView.display(module, modulePos, ship.status);
    event.stop();
};

model.ClickStrategy.prototype.showShipView = function(ship, position, module, event)
{
	this.moduleView.display(null);
    var position = this.coordinateConverter.fromGameToViewPort(
        ship.getIcon().getPosition());
     
    this.shipView.display(ship, position);
    event.stop();
};

model.ClickStrategy.prototype.remove = function()
{
	if (this.uiEventResolver)
		this.uiEventResolver.removeClickStrategy(this);
};