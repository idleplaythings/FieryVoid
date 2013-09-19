Meteor.methods({
    GameStart: function (player1Id, player2Id) {
        console.log("game start");

        console.log(player1Id, player2Id);

        var game = new model.Game({
            _id: new Meteor.Collection.ObjectID().toHexString()
        });

        var ship1 = game.getRandomShipForPlayer(player1Id);
        var ship2 = game.getRandomShipForPlayer(player2Id);

        if (!ship1 || !ship2) {
            throw "Ships not found"
        }

        game.setStartingConditions();
        game.ships.push(ship1);
        game.ships.push(ship2);
        game.shipStorage.addShip(ship1);
        game.shipStorage.addShip(ship2);

        Games.insert(game.getInitialInsert());

        return game._id;
    }
});

getGame = function(gameId)
{
    console.log("getting game with id " + gameId);
    var gameDoc = Games.findOne({_id: gameId});
    var game = new model[gameDoc.type]();
    return game.load(gameDoc);
};

getRandomShipDesignIdForPlayer = function(playerId) {
    var shipDesigns = ShipDesigns.find({ owner: playerId }).fetch();

    if (shipDesigns.length === 0) {
        return null;
    }

    var randomIndex = Math.floor(Math.random() * shipDesigns.length);
    return shipDesigns[randomIndex]._id;
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

model.Game.prototype.getRandomShipForPlayer = function(playerId) {
    var shipDesignId = getRandomShipDesignIdForPlayer(playerId);

    if (!shipDesignId) {
        return false;
    }

    var shipDesign = new model.ShipDesignInGame().load(shipDesignId);

    var ship = new model.ShipInGame({
        _id: Math.ceil(Math.random() * 1000),
        controller: playerId,
        shipDesign: shipDesign,
        movement: this.movementFactory.createMovement()
    });

    ship.createTimelines(this.timelineFactory);

    ship.movement.addStartPosition(new model.MovementWaypoint({
        time: 0,
        position: {x:Math.ceil(Math.random() * 200) - 100, y:Math.ceil(Math.random() * 200) - 100},
        velocity: {x:500, y:0},
        facing: 0
    }));

    return ship;
};


model.Game.prototype.setStartingConditions = function()
{
    this.name = "a game";
    this.created =  new Date().getTime();
    this.terrainSeed = Math.random();
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

model.Game.prototype.addShip = function(shipDesign)
{
    var ship = new model.ShipInGame({
        _id: 1,
        controller: Meteor.userId(),
        shipDesign: shipDesign,
        movement: this.movementFactory.createMovement()
    });

    ship.createTimelines(this.timelineFactory);

    ship.movement.addStartPosition(new model.MovementWaypoint({
        time: 0,
        position: {x:0, y:0},
        velocity: {x:500, y:0},
        facing: 0
    }));

    this.ships.push(ship);
    this.shipStorage.addShip(ship);
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

model.Game.prototype.getSelectedShip = function()
{
    return this.ships[0];
};