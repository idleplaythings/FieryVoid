model.ModuleEditor = function ModuleEditor(iconcontainer)
{
    var dispatcher = new model.EventDispatcher();
    this.gameScene = new model.GameScene(dispatcher);
    this.gameScene.init(iconcontainer).animate();

    this.reactiveModuleLayout = new model.ReactiveComponent(
        dispatcher,
        ModuleLayouts,
        "selected_moduleLayout",
        'moduleLayoutChanged'
    ).react();

    dispatcher.attach(
        'click', this.onClick.bind(this));

    dispatcher.attach(
        'moduleLayoutChanged', this.onModuleLayoutChanged.bind(this));

    this.icon = new model.ModuleIconEditor(['inside', 'over']);
    this.display = new model.Display(
        this.icon,
        this.gameScene,
        dispatcher)
    	.renderOn(iconcontainer);
};

model.ModuleEditor.prototype.onModuleLayoutChanged = function(event)
{
	var moduleLayout = event.payload;
	if (moduleLayout)
		this.icon.create(moduleLayout);

};

model.ModuleEditor.prototype.onClick = function(event)
{
    var pos = event.position;
    var module = this.reactiveModuleLayout.get();

    if ( ! module)
        return;

    var type = Session.get('moduleEditor_brushType');

    if ( ! type)
        module.toggleDisabledTile(pos);
    else if (type == 'outside')
        module.toggleOutsideTile(pos);

};

model.ModuleEditor.prototype.destroy = function()
{
	this.reactiveModuleLayout.destroy();
};
