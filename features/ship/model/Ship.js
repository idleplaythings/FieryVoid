model.Ship = function Ship(args, timeline)
{
	this.gameScene = null;
    this.icon = null;
    this.setState(args, timeline);
};

model.Ship.prototype.setState = function(args, timeline)
{
	if ( ! args)
        args = {};

    this._id = args._id || null;
    this.fleetId = args.fleetId || null;
    this.gameId = args.gameId || null;

	this.shipDesign = args.shipDesign || null;
    this.status = args.status;

    this.timeline = timeline;

    return this;
};

model.Ship.prototype.serialize = function()
{
	var shipDesign = new model.ShipDesign(this.shipDesign);
	shipDesign.hullLayoutId = this.shipDesign.hullLayout._id;
	delete shipDesign.hullLayout;
	shipDesign.modules =
        this.shipDesign.modules.map(
            function(module){
                return module.serialize();
            });


	var doc = {
		shipDesign: shipDesign,
		fleetId: this.fleetId,
		gameId: this.gameId,
		timeline: this.timeline._id
	}

	if (this._id !== null)
		doc._id = this._id;

    return doc;
};

model.Ship.prototype.getPositionService = function(turn)
{
    return new model.ShipPositionService(this, turn);
};

model.Ship.prototype.getIcon = function()
{
    return this.icon;
};

model.Ship.prototype.subscribeToScene =
    function(gameScene, effectManager, eventDispatcher, uiResolver, gridService, shipService)
{
	this.icon = new model.ShipIcon(gameScene, eventDispatcher).create(this.shipDesign);

    this.gameScene = gameScene;
    this.gameScene.scene.add(this.getIcon().getThreeObject());

    this.shipDesign.modules.forEach(function(module){
        module.ship = this;
        module.dispatcher = eventDispatcher;
        module.gameScene = gameScene;

        if (module.animators.length > 0)
        {
            this.gameScene.animators.push(module);
            module.initAnimators();
        }
    }, this);

	this.status.subscribeToScene(gameScene, effectManager, eventDispatcher, uiResolver, gridService, shipService);
    this.gameScene.animators.push(this);
};

model.Ship.prototype.select = function()
{
    this.getIcon().select();
};

model.Ship.prototype.deselect = function()
{
    this.getIcon().deselect();
};

model.Ship.prototype.animate = function(gameTime)
{
    this.status.animate(gameTime);
};

model.Ship.prototype.setAzimuth = function(azimuth)
{
    this.getIcon().getThreeObject().rotation.z = MathLib.degreeToRadian(MathLib.addToAzimuth(360, -azimuth));
};

model.Ship.prototype.getAzimuth = function()
{
    this.getIcon().getAzimuth();
};

model.Ship.prototype.isHidden = function()
{
    return this.getIcon().hidden;
};

model.Ship.prototype.getPosition = function()
{
    return this.getIcon().getPosition();
};

model.Ship.prototype.setPosition = function(pos)
{
    if (!pos)
        this.getIcon().hide();
    else
        this.getIcon().setPosition(pos);
};
