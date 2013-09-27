model.Game = function Game(args)
{
    if ( ! args)
        args = {};

    this.type = 'Game';

    this.gameScene = null;
    this.scrolling = null;
    this.zooming = null;

    this.dispatcher = null;
    this.uiEventResolver = null;
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
        args = {};

    this._id = args._id;
    this.name = args.name || 'unnamed';
    this.background = args.background || null;
    this.terrainSeed = args.terrainSeed || null;
    this.terrain = args.terrain || [];
    this.ships = args.ships || [];
    this.asteroids = args.asteroids || [];

    this.players = args.players || [];

    this.gameState = new model.GameState(args.currentGameTime || 0);

    this.dispatcher = new model.EventDispatcher();
    this.gameScene = new model.GameScene(this.dispatcher, this.gameState);
    this.coordinateConverter = new model.CoordinateConverterViewPort(this.gameScene);

    this.uiEventResolver = new model.UiFocusResolver(
        this.coordinateConverter, new model.EventDispatcher(), this.dispatcher);

    this.timelineFactory = new model.TimelineFactory(
        this.gameState, this._id, new model.TimelineStorage());

    this.movementFactory = new model.MovementFactory(
        this.timelineFactory, this.coordinateConverter, this.dispatcher, this.uiEventResolver);

    this.shipStorage = new model.ShipStorage(
        this._id, this.movementFactory, this.timelineFactory);

    this.created = args.created || null;
};

model.Game.prototype.addPlayer = function(id)
{
    var players = [].concat(id).map(function(id){
        return {id:id, orderTime:-1}
    });
    this.players = this.players.concat(players);
};

model.Game.prototype.getPlayer = function(id)
{
    var players = this.players.filter(function(player){
        return player.id == id;
    });

    if (players[0])
        return players[0];

    return null;
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
    var container = $('#gameContainer');
    this.gameScene.init(container);

    this.uiEventResolver.observeDomElement(container);

    this.scrolling = new model.Scrolling(this.dispatcher);
    this.scrolling.registerTo(this.uiEventResolver);

    this.zooming = new model.Zooming(
        container,
        this.dispatcher,
        this.scrolling,
        this.coordinateConverter);

    this.zooming.init();

    this.uiEventResolver.registerListener('click', this.onClicked.bind(this), 0);

    new model.ReplayUI(this.gameState).create();
    new model.TurnUi(this._id, this.gameState).create();

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
    if (payload.stopped)
        return;

    var pos = payload.game;
    var ship = this.getSelectedShip();
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
    return this;
};

model.Game.prototype.getInitialInsert = function()
{
    return {
        _id: this._id,
        type: this.type,
        name: this.name,
        terrainSeed: this.terrainSeed,
        created: this.created,
        currentGameTime: this.gameState.currentGametime,
        players: this.players
    };
};

model.Game.prototype.getSelectedShip = function()
{
    return this.ships[0];
};

model.Game.prototype.updated = function(doc)
{
    console.log('game updated', doc.currentGameTime);

    if (this.gameState.currentGametime < doc.currentGameTime)
    {
        this._changeTurn(doc.currentGameTime);
    }
};

model.Game.prototype._changeTurn = function(time)
{
    console.log('CHANGE TURN');
    console.log(this);
    this.gameState.currentGametime = time;
    this.timelineFactory.reloadTimelines();
};
