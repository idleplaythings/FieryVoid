model.ModuleEditor = function ModuleEditor(
	iconcontainer,
	modulelist,
	moduleImageContainer,
	moduleImageStorage)
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
        
    dispatcher.attach(
        'selectedModuleChange', function(event){
			console.log("selecting", event.module._id);
			Session.set("selected_moduleLayout", event.module._id);
		});

    this.icon = new model.ModuleIconEditor(['under', 'inside', 'outside', 'hull', 'over']);
    
    this.possibleIconViewModes = ["outside", "inside"];
    this.iconViewMode = 0;
    
    this.createButtons();
    
    this.moduleList = new model.ReactiveModuleList(
        modulelist, dispatcher, {})
        .react();
    
    this.display = new model.Display(
        this.icon,
        this.gameScene,
        dispatcher)
    	.renderOn(iconcontainer);
    	
	this.moduleImageChooser = new model.ModuleImageChooser(
		dispatcher, moduleImageStorage, moduleImageContainer);
};

model.ModuleEditor.prototype.createButtons = function()
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
        this.toggleGrid.bind(this),
        {
            background: '/misc/grid.png',
            size: 'large'
        }
        ).get().appendTo('.buttoncontainer', this.iconcontainer);
};

model.ModuleEditor.prototype.toggleViewMode = function()
{
    this.iconViewMode++; 
    if (this.iconViewMode >= this.possibleIconViewModes.length)
        this.iconViewMode = 0;

    if (this.possibleIconViewModes[this.iconViewMode] == 'inside')
    {
        this.icon.setInsideMode();
    }
    else
    {
        this.icon.setOutsideMode();
    }
};

model.ModuleEditor.prototype.toggleGrid = function()
{
    this.icon.toggleGrid();
};


model.ModuleEditor.prototype.onModuleLayoutChanged = function(event)
{
	var moduleLayout = event.payload;
	if (moduleLayout)
		this.icon.create(moduleLayout);

};

model.ModuleEditor.prototype.onClick = function(event)
{
	if (this.icon.sprites.grid.hidden)
		return;
		
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
