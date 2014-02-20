model.ClickStrategy = function ClickStrategy(args)
{
	this.dispatcher = args.dispatcher;
	this.coordinateConverter = args.coordinateConverter;
	this.zoom = args.zoom;
	this.moduleView = args.moduleView;
	this.shipView = args.shipView;
	this.gameScene = args.gameScene;
	this.gameState = args.gameState;

	this._arcIndicator = new model.ArcIndicatorService(this.gameScene);
	
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
		this._arcIndicator.display(null);
		return;
	}
	
	var module = ship.shipDesign.getModuleInPosition(position);
	var positionService = new model.ShipPositionService(ship, this.gameState.getTurn());

	if (module && module.weapon && this.zoom > 0.5)
		this._arcIndicator.display(positionService.getFacing(), module, positionService.getPosition());
	else
		this._arcIndicator.display(null);
	
    if (this.zoom < 1)
    {
        this.showShipView(ship, positionService, module, event);
    }
    else
    {
		this.showModuleView(ship, positionService, module, event);
	}
};

model.ClickStrategy.prototype.showModuleView = function(ship, positionService, module, event)
{
	this.shipView.display(null);

    if (! module)
    {
        this.moduleView.display(null);
        return;
    }

    var modulePos = this.coordinateConverter.fromGameToViewPort(
        positionService.getModuleCenterPositionInScene(module));

    this.moduleView.display(module, modulePos, ship.status);
    event.stop();
};

model.ClickStrategy.prototype.showShipView = function(ship, positionService, module, event)
{
	this.moduleView.display(null);
    var position = this.coordinateConverter.fromGameToViewPort(positionService.getPosition());
     
    this.shipView.display(ship, position);
    event.stop();
};

model.ClickStrategy.prototype.remove = function()
{
	if (this.uiEventResolver)
		this.uiEventResolver.removeClickStrategy(this);
};