model.ShipEditor = function ShipEditor(
	ship,
    iconcontainer,
    shipapperance,
    shipStorage)
{
    var dispatcher = new model.EventDispatcher();
    this.gameScene = new model.GameScene(dispatcher);
    this.gameScene.init(iconcontainer).animate();
    this.iconcontainer = iconcontainer;

    this.icon = new model.ShipIconEditor();
    this.moduleView = new model.ModuleDetailView(iconcontainer);

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
    console.log(ship);
    this.icon.create(ship.shipDesign);
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

model.ShipEditor.prototype.destroy = function()
{
	this.display.destroy();
};
