model.ModuleEditor = function ModuleEditor(
    gameContainer,
    uiEventManager,
    dispatcher,
    iconFactory, 
    gameScene, 
    reactiveModuleLayout, 
    animationLoop, 
    inputModeFactory,
    selectedModuleLayout,
    moduleList,
    moduleImageChooser,
    inputAction)
{
    this._uiEventManager = uiEventManager;
    this._dispatcher = dispatcher;
    this._iconFactory = iconFactory;
    this._gameScene = gameScene;
    this._reactiveModuleLayout = reactiveModuleLayout;
    this._animationLoop = animationLoop;
    this._gameContainer = gameContainer;
    this._inputModeFactory = inputModeFactory;
    this._selectedModuleLayout = selectedModuleLayout;
    this._inputAction = inputAction;

    this._moduleList = moduleList;
    this._moduleImageChooser = moduleImageChooser;


    dispatcher.attach(
        'moduleLayoutChanged', this.onModuleLayoutChanged.bind(this));

    dispatcher.attach(
        'selectedModuleChange', function(payload){
            console.log(payload);
            Session.set('moduleeditor_selected_moduleLayout', payload.module._id);
        });
    

    this._icon = this._iconFactory.create('model.ModuleIconEditor');

    
    //this.possibleIconViewModes = ["outside", "inside"];
    //this.iconViewMode = 0;
};

model.ModuleEditor.prototype.init = function(displayTarget, modulelistTarget, moduleImageChooser){
    this._gameContainer.set(displayTarget);
    this._gameScene.init();
    this._uiEventManager.init();
    this._reactiveModuleLayout.react();
    this._moduleList.init(modulelistTarget).react();
    this._moduleImageChooser.init(moduleImageChooser);

    this.createButtons(displayTarget);

    var inputMode = this._inputModeFactory.create('model.InputModeModuleEditor');
    this._uiEventManager.setInputMode(inputMode);

    this._animationLoop.start();
};

model.ModuleEditor.prototype.setOnDisable = function(){
    this._inputAction.setOnDisable();
};

model.ModuleEditor.prototype.setOnOutside = function(){
    this._inputAction.setOnOutside();
};

model.ModuleEditor.prototype.onModuleLayoutChanged = function(event)
{
    var moduleLayout = event.payload;
    if ( ! moduleLayout)
        return;

    this._selectedModuleLayout.set(moduleLayout);
    this._icon.create(moduleLayout);
};

model.ModuleEditor.prototype.createButtons = function(target)
{
    new model.Button(
        '', 
        this._icon.toggleViewMode.bind(this._icon),
        {
            background: '/misc/hullgrid.png',
            size: 'large'
        }
        ).get().appendTo('.buttoncontainer', target);
        
	new model.Button(
        '', 
        this._icon.toggleGrid.bind(this._icon),
        {
            background: '/misc/grid.png',
            size: 'large'
        }
        ).get().appendTo('.buttoncontainer', target);
};

model.ModuleEditor.prototype.onClick = function(event)
{
	if (this.icon.sprites.grid.hidden)
		return;

    var module = this.reactiveModuleLayout.get();

    if ( ! module)
        return;

    var positionService = new model.ModuleLayoutPositionService(module);
    var tile = positionService.getTileOnPosition(event.position.game);

    var type = Session.get('moduleEditor_brushType');

    if ( ! type)
        module.toggleDisabledTile(tile);
    else if (type == 'outside')
        module.toggleOutsideTile(tile);

};

model.ModuleEditor.prototype.destroy = function()
{
	this._reactiveModuleLayout.destroy();
};
