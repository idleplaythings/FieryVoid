model.ShipInGame = function ShipInGame(args)
{
    if ( ! args)
        args = [];

    this._id = args._id || null;
    this.position = args.position || null;
    this.detectionStatus = args.detectionStatus || null;
    this.controller = args.controller || null;
    this.shipDesign = args.shipDesign || null;

    this.icon = null;
    this.gameScene = null;
};

model.ShipInGame.prototype.loadWithDocument = function(doc)
{
    doc.shipDesign =
        new model.ShipDesignInGame().loadWithDocument(doc.shipDesign);

    if ( ! doc.shipDesign)
        return null;

    _.extend(this, doc);
    return this;
};

model.ShipInGame.prototype.getIcon = function(eventDispatcher)
{
    if ( ! this.icon )
        this.icon = new model.ShipIcon(this.shipDesign, eventDispatcher).create();

    return this.icon;
};

model.ShipInGame.prototype.subscribeToScene =
    function(gameScene, eventDispatcher)
{
    console.log(gameScene);
    this.gameScene = gameScene;
    this.gameScene.scene.add(this.getIcon(eventDispatcher).getThreeObject());

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), new THREE.MeshNormalMaterial());
    plane.overdraw = true;
    //this.gameScene.getScene().add(plane);
};