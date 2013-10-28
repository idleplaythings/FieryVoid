model.ShipInGame = function ShipInGame(args)
{
    if ( ! args)
        args = {};

    this._id = args._id || null;
    this.controller = args.controller || null;
    this.shipDesign = args.shipDesign || null;

    this.movement = args.movement;

    if (this.movement && typeof this.movement.setShip === 'function') {
        this.movement.setShip(this);
    }

    this.icon = null;
    this.gameScene = null;
};

model.ShipInGame.prototype.createTimelines = function(timelineFactory)
{
    this.shipDesign.createTimelines(timelineFactory);
};

model.ShipInGame.prototype.serialize = function()
{
    this.shipDesign.hullLayoutId =
        this.shipDesign.hullLayout._id;

    delete this.shipDesign.hullLayout;

    this.movement = this.movement.serialize();

    this.shipDesign.modules =
        this.shipDesign.modules.map(
            function(module){
                return module.serialize();
            });

    return this;
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

    this.movement.subscribeToScene(this.gameScene.scene, eventDispatcher, uiResolver);

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
    this.movement.animate(gameTime);
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
