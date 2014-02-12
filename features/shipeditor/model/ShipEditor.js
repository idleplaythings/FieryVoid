model.ShipEditor = function ShipEditor(
    iconcontainer,
    shipapperance,
    shipStorage)
{
	this.ship = null;
	this.shipStorage = shipStorage;
	
    var dispatcher = new model.EventDispatcher();
    dispatcher.attach(
        'mousemove', this.onMouseMove.bind(this));
        
    this.gameScene = new model.GameScene(dispatcher);
    this.gameScene.init(iconcontainer).animate();
    this.iconcontainer = iconcontainer;

    this.icon = new model.ShipIconEditor();

    this.coordinateConverter =
        new model.CoordinateConverterViewPort(this.gameScene);

    this.shipStatusView = new model.ShipStatusView(
        iconcontainer,
        this.coordinateConverter,
        dispatcher
    ).hide();

    this.display = new model.Display(
        this.icon,
        this.gameScene,
        dispatcher)
        .renderOn(iconcontainer);

    this.shipApperanceMenu = new model.ShipApperanceMenu(
        shipapperance, dispatcher);

    this.createButtons();

    this.possibleIconViewModes = ["hull", "grid"];
    this.iconViewMode = 0;
    
    this.shipReactivityHandle = null
    this.positionService = null;
};

model.ShipEditor.prototype.setShip = function(shipId)
{
	if (this.shipReactivityHandle)
		this.shipReactivityHandle.stop();
		
    this.shipReactivityHandle = this.shipStorage.getReactiveShip(
		shipId, this.shipChanged.bind(this));
};

model.ShipEditor.prototype.shipChanged = function(ship)
{
    if (ship)
    {
		this.ship = ship;
        this.shipApperanceMenu.setShipDesign(ship.shipDesign);
        this.icon.create(ship.shipDesign);
        this.positionService = new model.ShipDesignPositionService(ship.shipDesign);
        this.shipStatusView.display(this.positionService, ship.status);
    };
};

model.ShipEditor.prototype.createButtons = function()
{
    new model.Button(
        '', 
        this.toggleViewMode.bind(this),
        {
            background: '/misc/hullgrid.png',
            size: 'large'
        }
        ).get().appendTo('.buttoncontainer', this.iconcontainer);
};


model.ShipEditor.prototype.toggleViewMode = function()
{
    this.iconViewMode++; 
    if (this.iconViewMode >= this.possibleIconViewModes.length)
        this.iconViewMode = 0;

    if (this.possibleIconViewModes[this.iconViewMode] == 'grid')
    {
        this.shipApperanceMenu.hide();
        this.shipStatusView.show();
        this.icon.setInsideMode();
    }
    else
    {
        this.shipApperanceMenu.show();
        this.shipStatusView.hide();
        this.icon.sethullMode();
    }
};

model.ShipEditor.prototype.onMouseMove = function(event)
{
    if ( ! this.ship)
        return;

    var module = this.positionService.getModuleOnPosition(event.position.game);


    if (! module)
    {
        this.shipStatusView.displayModuleView(null);
        return;
    }

    var modulePos = this.coordinateConverter.fromGameToViewPort(
        this.positionService.getModuleCenterPositionInScene(module));

	this.shipStatusView.displayModuleView(module, modulePos, this.ship.status);
};

model.ShipEditor.prototype.destroy = function()
{
	this.shipReactivityHandle.stop();
	this.display.destroy();
};
