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
    this.asteroids = args.asteroids || [];

    this.created = args.created || null;

    this.type = 'Game';

    this.gameScene = null;
    this.scrolling = null;
    this.zooming = null;

    this.dispatcher = null;
    this.uiEventResolver = null;
};

model.Game.prototype.play = function()
{
    this.dispatcher = new model.EventDispatcher();

    var container = jQuery('#gameContainer');
    this.gameScene = new model.GameScene(this.dispatcher);
    this.gameScene.init(container);

    var coordinateConverter = new model.CoordinateConverterViewPort(this.gameScene);
    this.uiEventResolver = new model.UiFocusResolver(coordinateConverter, this.dispatcher);
    this.uiEventResolver.observeDomElement(container);

    this.scrolling = new model.Scrolling(this.dispatcher);
    this.scrolling.registerTo(this.uiEventResolver);

    this.zooming = new model.Zooming(
        container,
        this.dispatcher,
        this.scrolling,
        coordinateConverter);

    this.zooming.init();

    this.uiEventResolver.registerListener(this.onClicked.bind(this), 0, 'click');

    this.initGameState(container);
};

model.Game.prototype.getSelectedShip = function()
{

};

model.Game.prototype.onClicked = function(payload)
{
    var pos = payload.game;
    console.log("click");
    console.log(pos);

    var ship = this.getSelectedShip();
    console.log(ship);
    ship.movement.setWaypoint(pos);
};

model.Game.prototype.initGameState = function(container)
{
    this.terrain = new model.GameTerrain(this.gameScene, container, this.terrainSeed).createRandom();

    this.ships.forEach(
        function(ship){
            ship.subscribeToScene(this.gameScene, this.dispatcher, this.uiEventResolver);
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
            ship.prepareForSave();
            return ship;
        });

    this.terrainSeed = Math.random();
    return this;
};
