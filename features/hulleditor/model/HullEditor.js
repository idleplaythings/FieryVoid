model.HullEditor = function HullEditor(
    gameContainer,
    uiEventManager,
    dispatcher,
    iconFactory, 
    gameScene, 
    reactiveHullLayout, 
    animationLoop, 
    inputModeFactory,
    selectedHullLayout)
{
    this._uiEventManager = uiEventManager;
    this._dispatcher = dispatcher;
    this._iconFactory = iconFactory;
    this._gameScene = gameScene;
    this._reactiveHullLayout = reactiveHullLayout;
    this._animationLoop = animationLoop;
    this._gameContainer = gameContainer;
    this._inputModeFactory = inputModeFactory;
    this._selectedHullLayout = selectedHullLayout;

    dispatcher.attach(
        'hullLayoutChanged', this.onHullLayoutChanged.bind(this));

    this._icon = this._iconFactory.create('model.ShipIconHullEditor');
   
    this._heightReactivityHandle = null;
};

model.HullEditor.prototype.init = function(target)
{
    this._gameContainer.set(target);
    this._gameScene.init();
    this._uiEventManager.init();
    this._reactiveHullLayout.react();

    this._animationLoop.start();

    var self = this;
    this._heightReactivityHandle = Deps.autorun(function(){
        var height = Session.get('hullEditor_tileHeight');
        self._changeHeight(height);
    });

    this._changeHeight(1);

};

model.HullEditor.prototype._changeHeight = function(height)
{
    if ( ! height)
        height = 1;

    var inputMode = this._inputModeFactory.create('model.InputModeHullEditorHeight' + height);
    this._uiEventManager.removeCurrentInputMode();
    this._uiEventManager.addInputMode(inputMode);
};

model.HullEditor.prototype.onHullLayoutChanged = function(event)
{
	var hullLayout = event.payload;
	if ( ! hullLayout)
        return;

    this._selectedHullLayout.set(hullLayout);
	this._icon.create(new model.ShipDesign({hullLayout: hullLayout}))
};

model.HullEditor.prototype.destroy = function()
{
	this._reactiveHullLayout.destroy();
    this._heightReactivityHandle.stop();
};
