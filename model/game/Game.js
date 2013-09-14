getGame = function(gameId)
{
    console.log("getting game with id " + gameId);
    var gameDoc = Games.findOne({_id: gameId});
    var game = new model[gameDoc.type];
    return game.load(gameDoc);
};

model.Game = function Game(args)
{
    if ( ! args)
        args = [];

    this.type = 'Game';

    this.gameScene = null;
    this.scrolling = null;
    this.zooming = null;

    this.dispatcher = null;
    this.uiEventResolver = null;
    this.replayUI = null;
    this.movementFactory = null;

    this.setState(args);
};

model.Game.prototype.setState = function(args)
{
    if ( ! args)
        args = [];

    this._id = args._id;
    this.name = args.name || 'unnamed';
    this.background = args.background || null;
    this.terrainSeed = args.terrainSeed || null;
    this.terrain = args.terrain || [];
    this.ships = args.ships || [];
    this.asteroids = args.asteroids || [];

    this.gameState = new model.GameState(args.currentGameTime || 0);

    this.timelineFactory = new model.TimelineFactory(
        this.gameState, this._id, new model.TimelineStorage());

    this.movementFactory = new model.MovementFactory(this.timelineFactory);

    this.shipStorage = new model.ShipStorage(
        this._id, this.movementFactory, this.timelineFactory);

    this.created = args.created || null;
};

model.Game.prototype.play = function()
{
    this.dispatcher = new model.EventDispatcher();

    var container = jQuery('#gameContainer');
    this.gameScene = new model.GameScene(this.dispatcher, this.gameState);
    this.gameScene.init(container);

    var coordinateConverter = new model.CoordinateConverterViewPort(this.gameScene);
    this.uiEventResolver = new model.UiFocusResolver(coordinateConverter, new model.EventDispatcher(), this.dispatcher);
    this.uiEventResolver.observeDomElement(container);

    this.scrolling = new model.Scrolling(this.dispatcher);
    this.scrolling.registerTo(this.uiEventResolver);

    this.zooming = new model.Zooming(
        container,
        this.dispatcher,
        this.scrolling,
        coordinateConverter);

    this.zooming.init();

    this.uiEventResolver.registerListener('click', this.onClicked.bind(this), 0);

    this.replayUI = new model.ReplayUI(this.gameState);
    this.replayUI.create();

    this.initGameState(container);
};

model.Game.prototype.getSelectedShip = function()
{

};

model.Game.prototype.getShipById = function(id)
{
    var ships = this.ships.filter(function(ship) {
        return ship._id == id;
    });

    if (ships.length) {
        return ships[0];
    }

    return null;
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
    this.setState(doc);
    this.ships = this.shipStorage.getShipsInGame();
    console.log(this);
    return this;
};

model.Game.prototype.getInitialInsert = function()
{
    return {
        _id: this._id,
        type: this.type,
        name: this.name,
        terrainSeed: this.terrainSeed,
        created: this.created
    };
};