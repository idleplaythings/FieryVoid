model.ShipEditor = function ShipEditor(shipDesignId, leftSideMenu, iconcontainer, modulelist, shipapperance)
{
    var dispatcher = new model.EventDispatcher();
    this.gameScene = new model.GameScene(dispatcher);
    this.gameScene.init(iconcontainer).animate();
    this.iconcontainer = iconcontainer;

    dispatcher.attach(
        'shipDesignChanged', this.onShipDesignChange.bind(this));

    dispatcher.attach(
        'selectedModuleChange', this.onSelectedModuleChange.bind(this));

    dispatcher.attach(
        'mousemove', this.onMouseMove.bind(this));

    dispatcher.attach(
        'mouseout', this.onMouseOut.bind(this));

    dispatcher.attach(
        'click', this.onClick.bind(this));

     dispatcher.attach(
        'keyup', this.onKeyup.bind(this));

    this.icon = new model.ShipIconEditor();

    this.reactiveShipDesign = new model.ReactiveShipDesign(
        shipDesignId,
        dispatcher,
        'shipDesignChanged'
    );

    this.shipStatusView = new model.ShipStatusView(
        iconcontainer,
        new model.CoordinateConverterViewPort(this.gameScene),
        dispatcher
    ).hide();

    this.display = new model.Display(
        this.icon,
        this.gameScene,
        dispatcher)
        .renderOn(iconcontainer);

    this.moduleList = new model.ReactiveModuleList(
        modulelist, dispatcher)
        .hide()
        .react();

    this.shipApperanceMenu = new model.ShipApperanceMenu(
        shipapperance, dispatcher);

    this.selectedModuleIcon = null;

    this.selectedModule = null;
    this.remove = false;
    this.shipDesign = null;

    this.reactiveShipDesign.react();
    this.createButtons();

    this.possibleIconViewModes = ["hull", "grid"];
    this.iconViewMode = 0;
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

    new model.Button(
        '', 
        this.selectRemove.bind(this),
        {
            background: '/misc/x.png',
            size: 'large'
        }
        ).get().appendTo('.buttoncontainer', this.iconcontainer); 
};

model.ShipEditor.prototype.selectRemove = function()
{
    this.shipStatusView.hide();
    this.iconcontainer.addClass('remove');
    this.unselectModule();
    this.remove = true;
};

model.ShipEditor.prototype.unselectRemove = function()
{
    if (this.possibleIconViewModes[this.iconViewMode] == 'grid')
        this.shipStatusView.show();

    this.iconcontainer.removeClass('remove');
    this.remove = false;
};

model.ShipEditor.prototype.toggleViewMode = function()
{
    this.iconViewMode++; 
    if (this.iconViewMode >= this.possibleIconViewModes.length)
        this.iconViewMode = 0;

    if (this.possibleIconViewModes[this.iconViewMode] == 'grid')
    {
        this.shipApperanceMenu.hide();
        this.moduleList.show();
        this.shipStatusView.show();
        this.icon.setInsideMode();
    }
    else
    {
        this.shipApperanceMenu.show();
        this.moduleList.hide();
        this.shipStatusView.hide();
        this.icon.sethullMode();
    }

    this.icon.setMode(this.iconViewMode);
};

model.ShipEditor.prototype.onShipDesignChange = function(event)
{
    var shipDesign = event.payload;
    if (shipDesign)
    {
        this.shipApperanceMenu.setShipDesign(shipDesign);

        if ( ! this.selectedModuleIcon)
        {
            this.selectedModuleIcon = new model.ModuleIconPlacing(
                new model.TilePlacingModule(shipDesign));
            this.gameScene.scene.add(this.selectedModuleIcon.getThreeObject()); 

            if (this.selectedModule)
                this.selectedModuleIcon.create();
        }
        else
        {
            this.selectedModuleIcon.changeShipDesign(shipDesign);
        }
        this.icon.create(shipDesign).sethullMode();
        this.shipDesign = shipDesign;

        this.shipStatusView.display(this.icon, shipDesign.modules);
    }
};

model.ShipEditor.prototype.onSelectedModuleChange = function(event)
{
    if (this.possibleIconViewModes[this.iconViewMode] == 'grid')
    {
        this.shipStatusView.hide();
        this.icon.showGrid();
    }

    this.iconcontainer.removeClass('remove');
    this.remove = false;
    this.selectedModule = event.module;
    this.selectedModuleIcon.create(event.module);
};

model.ShipEditor.prototype.onClick = function(event)
{
    if ( ! this.shipDesign)
        return;

    if (this.remove)
    {
        this.shipDesign.removeModule(event.position);
        return;
    }

    var module = this.selectedModule;
    if ( ! module)
        return;

    var moduleLowerLeftCorner = 
        this.getModuleOffset(module, event.position);

    this.shipDesign.placeModule(module, moduleLowerLeftCorner);
};

model.ShipEditor.prototype.onKeyup = function(event)
{
    var key = event.keyCode;
    switch (event.keyCode)
    {
        case 27:
            this.unselectModule();
            this.unselectRemove();
            break;
        case 37:
            this.turnModule("left");
            break;
        case 39:
            this.turnModule("right");
            break;
        default:
            console.log(event.keyCode);
    }
};

model.ShipEditor.prototype.turnModule = function(direction)
{
    var module = this.selectedModule;

    if ( ! module)
        return;

    var newDirection = this.getNewModuleDirection(module, direction);

    if (newDirection == module.direction)
        return;

    module.setDirection(newDirection);
    this.selectedModuleIcon.create(module);
};

model.ShipEditor.prototype.getNewModuleDirection = function(module, direction)
{
    var allowed = module.allowedDirections;
    var currentDirection = module.direction;

    if (direction == 'right')
    {
        if (currentDirection >= allowed.length)
            return allowed[0];

        return allowed[currentDirection];
    }
    else
    {
        if (currentDirection == 1)
            return allowed[allowed.length-1];

        return allowed[currentDirection-2];
    }
};

model.ShipEditor.prototype.unselectModule = function()
{
    console.log("unselect module");
    if (this.possibleIconViewModes[this.iconViewMode] == 'grid')
    {
        this.shipStatusView.show();
        this.icon.hideGrid();
    }
    console.log("hi");
    this.selectedModule = null;
    this.moduleList.unselect();
    this.selectedModuleIcon.hide();
};

model.ShipEditor.prototype.onMouseMove = function(event)
{
    //this.gameScene.light.position = new THREE.Vector3(event.position.game.x * 100, event.position.game.y * 100, -1);

    if ( ! this.selectedModule)
        return;

    var pos = this.getTileSnap(this.selectedModule, event.tilePosition);
    var current = this.selectedModuleIcon.getPosition();

    if (pos.x == current.x && pos.y == current.y)
        return;

    var moduleLowerLeftCorner = this.getModuleOffset(this.selectedModule, event.tile);
    this.selectedModuleIcon.changePositionOnShipDesign(moduleLowerLeftCorner);

    this.selectedModuleIcon.setPosition(pos);
};

model.ShipEditor.prototype.onMouseOut = function(event)
{
    this.selectedModuleIcon.hide();
};

model.ShipEditor.prototype.getTileSnap = function(module, pos)
{
    var scale = 30;

    var snap = {x:pos.x, y:pos.y};

    if (module.getWidth() % 2 == 1)
        snap.x += scale/2;

    if (module.getHeight() % 2 == 1)
        snap.y += scale/2;

    return snap;
};

model.ShipEditor.prototype.getModuleOffset = function(module, pos)
{
    return {
        x: pos.x - Math.floor(module.getWidth()/ 2),
        y: pos.y - Math.floor(module.getHeight()/ 2)
    }
};


model.ShipEditor.prototype.destroy = function()
{
};