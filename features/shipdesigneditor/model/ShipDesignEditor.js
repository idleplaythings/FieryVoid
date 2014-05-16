model.ShipDesignEditor = function shipDesignEditor(
    dispatcher,
    gameScene,
    gameContainer,
    coordinateConverter,
    shipStatusView,
    moduleDetailView,
    shipApperanceMenu,
    shipDesignStorage,
    uiEventManager,
    reactiveModuleList,
    arcIndicatorService,
    animationLoop,
    iconFactory,
    inputModeFactory,
    editorShip,
    selectedModuleForPlacing)
{
    this._dispatcher = dispatcher;
    this._gameScene = gameScene;
    this._gameContainer = gameContainer;
    this._coordinateConverter = coordinateConverter;
    this._shipStatusView = shipStatusView;
    this._moduleDetailView = moduleDetailView;
    this._shipApperanceMenu = shipApperanceMenu;
    this._shipDesignStorage = shipDesignStorage;
    this._uiEventManager = uiEventManager;
    this._arcIndicatorService = arcIndicatorService;
    this._animationLoop = animationLoop;
    this._moduleList = reactiveModuleList;
    this._iconFactory = iconFactory;
    this._inputModeFactory = inputModeFactory;
    this._editorShip = editorShip;
    this._selectedModuleForPlacing = selectedModuleForPlacing;


    

    //var dispatcher = new model.EventDispatcher();
    //this.gameScene = new model.GameScene(dispatcher);
    //this.gameScene.init(iconcontainer).animate();
    //this.iconcontainer = iconcontainer;

    this._designChangeHandle = dispatcher.attach(
        'shipDesignChanged', this.onShipDesignChange.bind(this));

    this._moduleChangeHandle = dispatcher.attach(
        'selectedModuleChange', this.onSelectedModuleChange.bind(this));

/*
    dispatcher.attach(
        'MouseMoveEvent', this.onMouseMove.bind(this));

    dispatcher.attach(
        'MouseOutEvent', this.onMouseOut.bind(this));

    dispatcher.attach(
        'ClickEvent', this.onClick.bind(this));

     dispatcher.attach(
        'KeyUpEvent', this.onKeyup.bind(this));
*/

    

    //this._moduleDetailView = new model.ModuleDetailView(iconcontainer, dispatcher);

    //this.coordinateConverter =
    //    new model.CoordinateConverterViewPort(this.gameScene);

    /*
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

    */
    this._iconContainer = null;
    this._icon = null;
    this._selectedModule = null;
    this._remove = false;
    //this._shipDesign = null;
    this._possibleIconViewModes = ["hull", "grid"];
    this._iconViewMode = 0;
    this._positionService = null;
    this._reactiveShipDesign = null;
    this._toggleMenu = this._showModulelist;
};

model.ShipDesignEditor.prototype.init = function (
    shipDesignId,
    leftSideMenu,
    iconcontainer,
    modulelist,
    shipapperance)
{
    this._gameContainer.set(iconcontainer);
    this._gameScene.init();
    this._uiEventManager.init();

    this._iconContainer = iconcontainer;
    this._shipStatusView.hide();

    this._shipApperanceMenu.init(shipapperance);
    this._icon = this._iconFactory.create('model.ShipIconEditor');

    this._createButtons(iconcontainer);
    this._reactiveShipDesign = this._shipDesignStorage.getReactiveShipDesign(
        shipDesignId, this.onShipDesignChange.bind(this));

    this._moduleList.init(modulelist).hide().react();

    this._uiEventManager.addInputMode(this._inputModeFactory.create('model.InputModeShipEditorDefault'));

    this._animationLoop.start();
};

model.ShipDesignEditor.prototype._createButtons = function(iconcontainer)
{
    new model.Button(
        '', 
        this.toggleHullViewMode.bind(this),
        {
            background: '/misc/hullgrid.png',
            size: 'large'
        }
        ).get().appendTo('.buttoncontainer', iconcontainer);

    new model.Button(
        '', 
        this.selectRemove.bind(this),
        {
            background: '/misc/x.png',
            size: 'large'
        }
        ).get().appendTo('.buttoncontainer', iconcontainer); 
};

model.ShipDesignEditor.prototype.selectRemove = function()
{
    this._iconContainer.addClass('remove');
    this.unselectModule();
    this._remove = true;
    this._shipStatusView.hide();
};

model.ShipDesignEditor.prototype.unselectRemove = function()
{
    if (this._possibleIconViewModes[this._iconViewMode] == 'grid')
        this._shipStatusView.show();

    this._iconContainer.removeClass('remove');
    this._remove = false;
};

model.ShipDesignEditor.prototype.toggleHullViewMode = function()
{
    this._dispatcher.dispatch({name:"EditorToggleHullViewModeEvent"});
    this._toggleMenu();
};

model.ShipDesignEditor.prototype._showModulelist = function(){
    this._shipApperanceMenu.hide();
    this._moduleList.show();
    this._toggleMenu = this._showApperanceMenu;
};

model.ShipDesignEditor.prototype._showApperanceMenu = function(){
    this._shipApperanceMenu.show();
    this._moduleList.hide();
    this._toggleMenu = this._showModulelist;
};

model.ShipDesignEditor.prototype.onShipDesignChange = function(shipDesign)
{
    if (shipDesign)
    {
        this._shipApperanceMenu.setShipDesign(shipDesign);
        //this._selectedModuleIcon.create(shipDesign);
        //his._selectedModuleIcon.changeShipDesign(shipDesign);

        var ship = new model.Ship({shipDesign: shipDesign});
        ship.setIcon(this._icon);

        this._editorShip.set(ship);

        this._positionService = new model.ShipDesignPositionService(shipDesign);

        this._shipStatusView.display(
            new model.ShipDesignPositionService(shipDesign), 
            new model.Ship({shipDesign: shipDesign}).getModules()
        );
    }
};

model.ShipDesignEditor.prototype.onSelectedModuleChange = function(event)
{

    var module = event.module;

    console.log("event", module);

    if ( ! module){
        this._uiEventManager.removeCurrentInputMode();
        this._uiEventManager.addInputMode(
            this._inputModeFactory.create('model.InputModeShipEditorDefault'));
    }else{ 
        this._selectedModuleForPlacing.set(event.module);
        this._uiEventManager.removeCurrentInputMode();
        this._uiEventManager.addInputMode(
            this._inputModeFactory.create('model.InputModeShipEditorPlaceModule'));
    }
    
    /*
    if (this._possibleIconViewModes[this.iconViewMode] == 'grid')
    {
        this._shipStatusView.hide();
        this._icon.showGrid();
    }

    this.iconcontainer.removeClass('remove');
    this.remove = false;
    this.selectedModule = event.module;
    this.selectedModuleIcon.create(event.module);
    */
};

model.ShipDesignEditor.prototype.onClick = function(event)
{
    if ( ! this.shipDesign)
        return;


    var tile = this.positionService.getTileOnPosition(event.position.game);


    if (this.remove)
    {
        this.shipDesign.removeModule(tile);
        return;
    }

    var module = this.selectedModule;
    if ( ! module)
        return;

    var moduleLowerLeftCorner = 
        this.getModuleOffset(module, tile);

    this.shipDesign.placeModule(module, moduleLowerLeftCorner);
};

model.ShipDesignEditor.prototype.onKeyup = function(event)
{
    var key = event.key;

    if (key instanceof model.Hotkey.Cancel)
    {
        this.unselectModule();
        this.unselectRemove();
    }
    else if ( key instanceof model.Hotkey.Left)
    {
        this.turnModule("left");
    }
    else if ( key instanceof model.Hotkey.Right)
    {
        this.turnModule("right");
    }
     
};

model.ShipDesignEditor.prototype.turnModule = function(direction)
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

model.ShipDesignEditor.prototype.getNewModuleDirection = function(module, direction)
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

model.ShipDesignEditor.prototype.unselectModule = function()
{
    this._selectedModule = null;
    this._moduleList.unselect();
    this._selectedModuleIcon.hide();

    if (this._possibleIconViewModes[this.iconViewMode] == 'grid')
    {
        this._shipStatusView.show();
        this._icon.hideGrid();
    }
};

model.ShipDesignEditor.prototype.onMouseMove = function(event)
{
    //this.gameScene.light.position = new THREE.Vector3(event.position.game.x * 100, event.position.game.y * 100, -1);

    if ( ! this._selectedModule)
    {
        this.showModuleView(event.game);
    }
    else
    {
        this._moduleDetailView.display(null);

        var pos = this.getTileSnap(this._selectedModule, this._positionService.getClosestTilePositionInScene(event.position.game));
        this.displayPlacedModule(pos, this._positionService.getTileOnPosition(pos));
    }
};

model.ShipDesignEditor.prototype.displayPlacedModule = function(pos, tile)
{
    var current = this.selectedModuleIcon.getPosition();

    if (pos.x == current.x && pos.y == current.y)
        return;

    var moduleLowerLeftCorner = this.getModuleOffset(this.selectedModule, tile);
    this.selectedModuleIcon.changePositionOnShipDesign(moduleLowerLeftCorner);

    this.selectedModuleIcon.setPosition(pos);
};

model.ShipDesignEditor.prototype.showModuleView = function(pos)
{
    if ( ! this._positionService)
        return;

    var module = this._positionService.getModuleOnPosition(pos);
    if (! module)
    {
        this._moduleDetailView.display(null);
        this._arcIndicatorService.removeAll();
        return;
    }

    var modulePos = this._coordinateConverter.fromGameToViewPort(
        this._positionService.getModuleCenterPositionInScene(module));

    if (module && module.weapon)
        this._arcIndicatorService.display(0, module, {x:0, y:0});


    this._moduleDetailView.display(this.createModuleFromModuleLayout(module), modulePos);
};

model.ShipDesignEditor.prototype.createModuleFromModuleLayout = function(moduleLayout)
{
    return new model.Module(
        moduleLayout, 
        new model.power.ShipPowerStatus(this._shipDesign.modules)
    );
};

model.ShipDesignEditor.prototype.onMouseOut = function(event)
{
    this._selectedModuleIcon.hide();
};

model.ShipDesignEditor.prototype.getTileSnap = function(module, pos)
{
    var scale = 30;

    var snap = {x:pos.x, y:pos.y};

    if (module.getWidth() % 2 == 1)
        snap.x += scale/2;

    if (module.getHeight() % 2 == 1)
        snap.y += scale/2;

    return snap;
};
/*
model.ShipDesignEditor.prototype.getModuleOffset = function(module, pos)
{
    return {
        x: pos.x - Math.floor(module.getWidth()/ 2),
        y: pos.y - Math.floor(module.getHeight()/ 2)
    }
};
*/


model.ShipDesignEditor.prototype.destroy = function()
{
    this._reactiveShipDesign.stop();

    this._dispatcher.detach(
        'shipDesignChanged', this._designChangeHandle);

    this._dispatcher.detach(
        'selectedModuleChange', this._moduleChangeHandle);
};