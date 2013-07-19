getGame = function(gameId)
{
    var gameDoc = Games.findOne({_id: gameId});
    var game = new model[gameDoc.type];
    return game.load(gameDoc);
};

model.Game = function Game(args)
{
    if ( ! args)
        args = [];

    this.name = args.name || 'unnamed';
    this.background = args.background || null;
    this.terrainSeed = args.terrainSeed || null;
    this.terrain = args.terrain || [];
    this.ships = args.ships || [];

    this.created = args.created || null;

    this.type = 'Game';

    this.gameScene = null;
    this.scrolling = null;
    this.zooming = null;

    this.dispatcher = null;
};

model.Game.prototype.play = function()
{
    this.dispatcher = new model.EventDispatcher();

    var container = jQuery('#gameContainer');
    this.gameScene = new model.GameScene(this.dispatcher);
    this.gameScene.init(container);

    this.scrolling = new model.Scrolling(container, this.dispatcher, this.gameScene);
    this.scrolling.init();

    this.zooming = new model.Zooming(container, this.dispatcher);
    this.zooming.init();

    this.dispatcher.attach(new model.EventListener(
        "clickEvent",
        jQuery.proxy(this.onClicked, this)));

    this.initGameState(container, this.dispatcher);
};

model.Game.prototype.getSelectedShip = function()
{

};

model.Game.prototype.onClicked = function(event)
{
    var pos = event.position;
    console.log("click");
    console.log(pos);

    var ship = this.getSelectedShip();
    console.log(ship);
    ship.movement.setWaypoint(pos);
};

model.Game.prototype.initGameState = function(container, eventDispatcher)
{
    this.terrain = new model.GameTerrain().createRandom(
        container, this.terrainSeed, this.gameScene);


    this.ships.forEach(
        function(ship){
            ship.subscribeToScene(this.gameScene, eventDispatcher);
        }, this);
    this.gameScene.animate();
};

model.Game.prototype.load = function(doc)
{
    var invalidShip = false;
    doc.ships = doc.ships.map(
        function(shipDoc)
        {
            var ship = new model.ShipInGame().loadWithDocument(shipDoc)
            if (! ship)
                invalidShip = true;

            window.ship = ship;
            return ship;
        });

    if (invalidShip)
        return null;

    _.extend(this, doc);
    return this;
};

model.Game.prototype.prepareForSave = function()
{
    this.ships = this.ships.map(
        function(ship){
            ship.shipDesign.hullLayoutId =
                ship.shipDesign.hullLayout._id;

            delete ship.shipDesign.hullLayout;
            delete ship.movement;

            ship.shipDesign.modules =
                ship.shipDesign.modules.map(
                    function(module){
                        return {
                            module: module._id,
                            position: module.position,
                            direction: module.direction
                            };
                    });

            return ship;
        });

    this.terrainSeed = Math.random();
    return this;
};
