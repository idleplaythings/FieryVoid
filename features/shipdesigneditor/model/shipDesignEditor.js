model.shipDesignEditor = function shipDesignEditor(
    shipDesignId,
    leftSideMenu,
    iconcontainer,
    modulelist,
    shipapperance,
    shipDesignStorage)
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

    this.moduleView = new model.ModuleDetailView(iconcontainer, dispatcher);

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

    this.createButtons();

    this.possibleIconViewModes = ["hull", "grid"];
    this.iconViewMode = 0;
    
    this.reactiveShipDesign = shipDesignStorage.getReactiveShipDesign(
		shipDesignId, this.onShipDesignChange.bind(this));
};

model.shipDesignEditor.prototype.createButtons = function()
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

model.shipDesignEditor.prototype.selectRemove = function()
{
    this.iconcontainer.addClass('remove');
    this.unselectModule();
    this.remove = true;
    this.shipStatusView.hide();
};

model.shipDesignEditor.prototype.unselectRemove = function()
{
    if (this.possibleIconViewModes[this.iconViewMode] == 'grid')
        this.shipStatusView.show();

    this.iconcontainer.removeClass('remove');
    this.remove = false;
};

model.shipDesignEditor.prototype.toggleViewMode = function()
{
    this.iconViewMode++; 
    if (this.iconViewMode >= this.possibleIconViewModes.length)
        this.iconViewMode = 0;

    this.unselectRemove();
    this.unselectModule();

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
};

model.shipDesignEditor.prototype.onShipDesignChange = function(shipDesign)
{
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
        this.icon.create(shipDesign);
        this.shipDesign = shipDesign;

        this.shipStatusView.display(this.icon, new model.ShipStatus(null, shipDesign.modules));
    }
};

model.shipDesignEditor.prototype.onSelectedModuleChange = function(event)
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

model.shipDesignEditor.prototype.onClick = function(event)
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

model.shipDesignEditor.prototype.onKeyup = function(event)
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

model.shipDesignEditor.prototype.turnModule = function(direction)
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

model.shipDesignEditor.prototype.getNewModuleDirection = function(module, direction)
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

model.shipDesignEditor.prototype.unselectModule = function()
{
    this.selectedModule = null;
    this.moduleList.unselect();
    this.selectedModuleIcon.hide();

    if (this.possibleIconViewModes[this.iconViewMode] == 'grid')
    {
        this.shipStatusView.show();
        this.icon.hideGrid();
    }
};

model.shipDesignEditor.prototype.onMouseMove = function(event)
{
    //this.gameScene.light.position = new THREE.Vector3(event.position.game.x * 100, event.position.game.y * 100, -1);

    if ( ! this.selectedModule)
    {
        this.showModuleView(event.position.game);
    }
    else
    {
        this.moduleView.display(null);
        var pos = this.getTileSnap(this.selectedModule, event.tilePosition);
        this.displayPlacedModule(pos, event.tile);
    }
};

model.shipDesignEditor.prototype.displayPlacedModule = function(pos, tile)
{
    var current = this.selectedModuleIcon.getPosition();

    if (pos.x == current.x && pos.y == current.y)
        return;

    var moduleLowerLeftCorner = this.getModuleOffset(this.selectedModule, tile);
    this.selectedModuleIcon.changePositionOnShipDesign(moduleLowerLeftCorner);

    this.selectedModuleIcon.setPosition(pos);
};

model.shipDesignEditor.prototype.showModuleView = function(pos)
{
    var module = this.icon.getModuleOnPosition(pos);
    if (! module)
    {
        this.moduleView.display(null);
        return;
    }

    var modulePos = this.coordinateConverter.fromGameToViewPort(
        this.icon.getModulePositionInGame(module));

    this.moduleView.display(module, modulePos, new model.ShipStatus(null, this.shipDesign.modules));
};

model.shipDesignEditor.prototype.onMouseOut = function(event)
{
    this.selectedModuleIcon.hide();
};

model.shipDesignEditor.prototype.getTileSnap = function(module, pos)
{
    var scale = 30;

    var snap = {x:pos.x, y:pos.y};

    if (module.getWidth() % 2 == 1)
        snap.x += scale/2;

    if (module.getHeight() % 2 == 1)
        snap.y += scale/2;

    return snap;
};

model.shipDesignEditor.prototype.getModuleOffset = function(module, pos)
{
    return {
        x: pos.x - Math.floor(module.getWidth()/ 2),
        y: pos.y - Math.floor(module.getHeight()/ 2)
    }
};


model.shipDesignEditor.prototype.destroy = function()
{
	if (this.reactiveShipDesign)
		this.reactiveShipDesign.stop();
		
	this.display.destroy();
};
