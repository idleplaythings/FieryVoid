model.InputMode = function InputMode(args)
{
	this.dispatcher = args.dispatcher;
	this.coordinateConverter = args.coordinateConverter;
	this.zoom = args.zoom;
	this.moduleView = args.moduleView;
	this.shipView = args.shipView;
	this.gameScene = args.gameScene;
	this.gameState = args.gameState;
	this.shipService = args.shipService;

	this._arcIndicator = new model.ArcIndicatorService(this.gameScene);

	this.dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
};

model.InputMode.prototype.onZoom = function(event)
{
	this.zoom = event.zoom;
};

model.InputMode.prototype.showMouseOverView = function(ship, module)
{
	var positionService = ship ? new model.ShipPositionService(ship, this.gameState.getTurn()) : null;

	this.showWeaponArc(ship, positionService, module);
	this.showModuleView(ship, positionService, module);
	this.showShipView(ship, positionService, module);

};

model.InputMode.prototype.showWeaponArc = function(ship, positionService, module)
{
	if (! ship || ! module || ! module.weapon || this.zoom < 0.5)
	{
		this._arcIndicator.removeAll();
		return;
	}

	this._arcIndicator.display(positionService.getFacing(), module, positionService.getPosition());
};

model.InputMode.prototype.showModuleView = function(ship, positionService, module)
{
    if (! ship || ! module ||  this.zoom != 1)
    {
        this.moduleView.remove();
        return;
    }

    var modulePos = this.coordinateConverter.fromGameToViewPort(
        positionService.getModuleCenterPositionInScene(module));

    this.moduleView.display(module, modulePos, ship.status);
};

model.InputMode.prototype.showShipView = function(ship, positionService, module)
{
	if (! ship || this.zoom == 1)
    {
        this.shipView.remove();
        return;
    }

    var position = this.coordinateConverter.fromGameToViewPort(positionService.getPosition());
    this.shipView.display(ship, position);
};

model.InputMode.prototype.remove = function()
{
	if (this.uiEventResolver)
		this.uiEventResolver.removeInputMode(this);
};