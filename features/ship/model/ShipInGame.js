model.ShipInGame = function ShipInGame(args)
{
    if ( ! args)
        args = {};

    this._id = args._id || null;
    this.name = args.name || null;
    this.owner = args.owner || null;
    this.controller = args.controller || null;
    this.shipDesign = args.shipDesign || null;
    this.fleetId = args.fleetId || null;
    this.gameId = args.gameId || null;

    this.status = args.status;
    this.icon = null;
    this.gameScene = null;
};

model.ShipInGame.prototype.serialize = function()
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
		status: this.status.serialize(),
		name: this.name,
		owner: this.owner,
		controller: this.controller,
		fleetId: this.fleetId,
		gameId: this.gameId
	}
	
	if (this._id !== null)
		doc._id = this._id;
	
    return doc;
};

model.ShipInGame.prototype.getIcon = function()
{
    if ( ! this.icon )
        this.icon = new model.ShipIcon().create(this.shipDesign);

    return this.icon;
};

model.ShipInGame.prototype.subscribeToScene =
    function(gameScene, eventDispatcher, uiResolver)
{
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

    this.gameScene.animators.push(this);
};

model.ShipInGame.prototype.animate = function(gameTime)
{
    this.status.movement.animate(this, gameTime);
};

model.ShipInGame.prototype.setAzimuth = function(azimuth)
{
    this.getIcon().getThreeObject().rotation.z = MathLib.degreeToRadian(MathLib.addToAzimuth(360, -azimuth));
};

model.ShipInGame.prototype.getAzimuth = function()
{
    this.getIcon().getAzimuth();
};

model.ShipInGame.prototype.isHidden = function()
{
    return this.getIcon().hidden;
};

model.ShipInGame.prototype.getPosition = function()
{
    return this.getIcon().getPosition();
};

model.ShipInGame.prototype.setPosition = function(pos)
{
    if (!pos)
        this.getIcon().hide();
    else
        this.getIcon().setPosition(pos);
};
