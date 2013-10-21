model.HullEditor = function HullEditor(target)
{
    var dispatcher = new model.EventDispatcher();
    this.gameScene = new model.GameScene(dispatcher);
    this.gameScene.init(target).animate();

    this.reactiveHullLayout = new model.ReactiveComponent(
        dispatcher,
        HullLayouts,
        "selected_hullLayout",
        'hullLayoutChanged'
    ).react();

    dispatcher.attach(
        'click', this.onClick.bind(this));

    dispatcher.attach(
        'hullLayoutChanged', this.onHullLayoutChanged.bind(this));

    this.icon = new model.ShipIconHullEditor();

    this.display = new model.Display(
        this.icon,
        this.gameScene,
        dispatcher)
    	.renderOn(target);
};

model.HullEditor.prototype.onHullLayoutChanged = function(event)
{
	var hullLayout = event.payload;
	if (hullLayout)
		this.icon.create(new model.ShipDesign({hullLayout: hullLayout}))

};

model.HullEditor.prototype.onClick = function(event)
{
    var pos = event.position;
    var hullLayout = this.reactiveHullLayout.get();

    if ( ! hullLayout)
        return;
    
    var height = Session.get('hullEditor_tileHeight');
    if ( ! height)
        height = 1;

    var curHeight = hullLayout.getTileHeight(pos);

    if (height == curHeight || hullLayout.isDisabledTile(pos))
    {
        hullLayout.toggleDisabledTile(pos);
    }
    else
    {
        hullLayout.setTileHeight(pos, height);
    }
};

model.HullEditor.prototype.destroy = function()
{
	this.reactiveHullLayout.destroy();
};
