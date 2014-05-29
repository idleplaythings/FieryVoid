model.ShipDesignEditor = function shipDesignEditor(
    dispatcher,
    gameScene,
    gameContainer,
    shipApperanceMenu,
    shipDesignStorage,
    uiEventManager,
    reactiveModuleList,
    animationLoop,
    iconFactory,
    inputModeFactory,
    editorShip,
    selectedModuleForPlacing)
{
    this._dispatcher = dispatcher;
    this._gameScene = gameScene;
    this._gameContainer = gameContainer;
    this._shipApperanceMenu = shipApperanceMenu;
    this._shipDesignStorage = shipDesignStorage;
    this._uiEventManager = uiEventManager;
    this._animationLoop = animationLoop;
    this._moduleList = reactiveModuleList;
    this._iconFactory = iconFactory;
    this._inputModeFactory = inputModeFactory;
    this._editorShip = editorShip;
    this._selectedModuleForPlacing = selectedModuleForPlacing;

    this._designChangeHandle = dispatcher.attach(
        'shipDesignChanged', this._onShipDesignChange.bind(this));

    this._moduleChangeHandle = dispatcher.attach(
        'selectedModuleChange', this._onSelectedModuleChange.bind(this));

    dispatcher.attach(
        'KeyUpEvent', this._onKeyup.bind(this));

    this._inputModeStack = [];

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

    this._shipApperanceMenu.init(shipapperance);
    this._icon = this._iconFactory.create('model.ShipIconEditor');

    this._createButtons(iconcontainer);
    this._reactiveShipDesign = this._shipDesignStorage.getReactiveShipDesign(
        shipDesignId, this._onShipDesignChange.bind(this));

    this._moduleList.init(modulelist).hide().react();

    this._addInputMode(this._inputModeFactory.create('model.InputModeShipEditorDefault'));

    this._animationLoop.start();
};

model.ShipDesignEditor.prototype._addInputMode = function(inputMode){
    this._inputModeStack.push(inputMode);
    this._uiEventManager.setInputMode(inputMode);
};

model.ShipDesignEditor.prototype._removeInputMode = function(){
    if (this._inputModeStack.length <= 1)
        return;

    this._inputModeStack.pop();

    this._uiEventManager.setInputMode(this._inputModeStack[this._inputModeStack.length - 1]);
};

model.ShipDesignEditor.prototype._createButtons = function(iconcontainer)
{
    new model.Button(
        '', 
        this._toggleHullViewMode.bind(this),
        {
            background: '/misc/hullgrid.png',
            size: 'large'
        }
        ).get().appendTo('.buttoncontainer', iconcontainer);

    new model.Button(
        '', 
        this._selectRemove.bind(this),
        {
            background: '/misc/x.png',
            size: 'large'
        }
        ).get().appendTo('.buttoncontainer', iconcontainer); 
};

model.ShipDesignEditor.prototype._selectRemove = function()
{
    this._removeInputMode();

    this._addInputMode(
        this._inputModeFactory.create('model.InputModeShipEditorRemoveModule'));
};

model.ShipDesignEditor.prototype._toggleHullViewMode = function()
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

model.ShipDesignEditor.prototype._onShipDesignChange = function(shipDesign)
{
    if (shipDesign)
    {
        this._shipApperanceMenu.setShipDesign(shipDesign);

        var ship = new model.Ship({shipDesign: shipDesign});
        ship.setIcon(this._icon);

        this._editorShip.set(ship);

        this._positionService = new model.ShipDesignPositionService(shipDesign);
    }
};

model.ShipDesignEditor.prototype._onSelectedModuleChange = function(event)
{
    var module = event.module;

    this._removeInputMode();
    this._selectedModuleForPlacing.set(event.module);
    this._addInputMode(
        this._inputModeFactory.create('model.InputModeShipEditorPlaceModule'));
};

model.ShipDesignEditor.prototype._onKeyup = function(event)
{
    var key = event.key;

    if (key instanceof model.Hotkey.Cancel)
    {
        this._removeInputMode();
        this._moduleList.unselect();
    }
     
};

model.ShipDesignEditor.prototype.destroy = function()
{
    this._reactiveShipDesign.stop();

    this._dispatcher.detach(
        'shipDesignChanged', this._designChangeHandle);

    this._dispatcher.detach(
        'selectedModuleChange', this._moduleChangeHandle);
};