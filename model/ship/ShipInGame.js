model.ShipInGame = function ShipInGame(args)
{
    if ( ! args)
        args = [];

    this._id = args._id || null;
    this.detectionStatus = args.detectionStatus || null;
    this.controller = args.controller || null;
    this.shipDesign = args.shipDesign || null;

    var position = args.position || null;
    this.movement = new model.Movement();
    if ( position )
        this.movement.setStartPosition(position);

    this.icon = null;
    this.gameScene = null;
};

model.ShipInGame.prototype.prepareForSave = function()
{
    this.shipDesign.hullLayoutId =
        this.shipDesign.hullLayout._id;

    delete this.shipDesign.hullLayout;

    this.movement = this.movement.serialize();

    this.shipDesign.modules =
        this.shipDesign.modules.map(
            function(module){
                return {
                    module: module._id,
                    position: module.position,
                    direction: module.direction
                };
            });

};

model.ShipInGame.prototype.loadWithDocument = function(doc)
{
    doc.shipDesign =
        new model.ShipDesignInGame().loadWithDocument(doc.shipDesign);

    if ( ! doc.shipDesign)
        return null;

    doc.movement = this.movement.unserialize(doc.movement);

    _.extend(this, doc);
    return this;
};

model.ShipInGame.prototype.getIcon = function(eventDispatcher)
{
    if ( ! this.icon )
        this.icon = new model.ShipIcon(this, eventDispatcher).create();

    return this.icon;
};

model.ShipInGame.prototype.subscribeToScene =
    function(gameScene, eventDispatcher)
{
    this.gameScene = gameScene;
    this.gameScene.scene.add(this.getIcon(eventDispatcher).getThreeObject());

    this.movement.subscribeToScene(this.gameScene.scene);

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
};

model.ShipInGame.prototype.setAzimuth = function(azimuth)
{
    this.getIcon().getThreeObject().rotation.z = MathLib.degreeToRadian(MathLib.addToAzimuth(360, -azimuth));
};

model.ShipInGame.prototype.setPosition = function(pos)
{
    this.position = pos;
    this.getIcon().getThreeObject().position = new THREE.Vector3(pos.x, pos.y, 0);
};
