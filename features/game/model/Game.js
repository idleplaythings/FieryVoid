model.Game = Extend.register(Game);

function Game(dispatcher, shipStorage, fleetStorage, timelineFactory, args) {
    if ( ! args)
        args = {};

    this.type = 'Game';
    this.dispatcher = dispatcher;
    this.shipStorage = shipStorage;
    this.fleetStorage = fleetStorage;
    this.timelineFactory = timelineFactory;
    // this.dispatcher = new model.EventDispatcher();

    // this.gameScene = new model.GameScene(this.dispatcher, this.gameState);
    this.setState(args);
}

Game.prototype.getRandomFleetForPlayer = function(playerId) {
	
	var shipDesignId = getRandomShipDesignIdForPlayer(playerId);

    if ( ! shipDesignId) {
        return false;
    }

    var shipDesignStorage = dic.get('model.ShipDesignStorage');
    var shipDesign = shipDesignStorage.getShipDesign(shipDesignId);
    
	var fleet = this.fleetStorage.createAndInsertEmptyFleetForMe();
	var ship = this.shipStorage.createFromDesign(shipDesign, playerId);
	
	ship.status.movement.addStartPosition(new model.MovementWaypoint({
        time: 0,
        position: {x:Math.ceil(Math.random() * 200) - 100, y:Math.ceil(Math.random() * 200) - 100},
        velocity: {x:500, y:0},
        facing: 0
    }));
    
	fleet.addShip(ship);
	return fleet;
};


Game.prototype.setStartingConditions = function()
{
    this.name = "a game";
    this.created =  new Date().getTime();
    this.terrainSeed = Math.random();
};

Game.prototype.setState = function(args)
{
    if ( ! args)
        args = {};

    this._id = args._id;
    this.name = args.name || 'unnamed';
    this.background = args.background || null;
    this.terrainSeed = args.terrainSeed || null;
    this.terrain = args.terrain || [];
    this.fleets = args.fleets || [];
    this.asteroids = args.asteroids || [];

    this.players = args.players || [];
    this.gameState = new model.GameState(args.currentGameTime || 0);
    this.created = args.created || null;
};

Game.prototype.init = function()
{
    if (Meteor.isServer)
        return;

    this.gameScene = new model.GameScene(this.dispatcher);
    this.coordinateConverter = new model.CoordinateConverterViewPort(this.gameScene);

    this.uiEventResolver = new model.UiFocusResolver(
        this.coordinateConverter, this.dispatcher);

    //this.movementFactory.createWaypointMenu(
    //    this.coordinateConverter, this.dispatcher, this.uiEventResolver);
};

Game.prototype.addPlayer = function(id)
{
    var players = [].concat(id).map(function(id){
        return {id:id, orderTime:-1}
    });
    this.players = this.players.concat(players);
};

Game.prototype.getPlayer = function(id)
{
    var players = this.players.filter(function(player){
        return player.id == id;
    });

    if (players[0])
        return players[0];

    return null;
};

Game.prototype.addShip = function(shipDesign)
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
    this.shipStorage.addShipToGame(ship, this._id);
};

Game.prototype.play = function()
{
    var container = $('#gameContainer');
    //this.coordinateConverter.setTarget(container);
    this.gameScene.init(container);
    this.dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
    this.dispatcher.attach("ScrollEvent", this.onScroll.bind(this));

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
    this.uiEventResolver.registerListener('mousemove', this.onMouseMove.bind(this), 0);


    this.shipStatusView = new model.ShipStatusView(
        container,
        this.coordinateConverter,
        this.dispatcher
    ).hide();

    new model.ReplayUI(this.gameState).create();
    new model.TurnUi(this._id, this.gameState).create();

    this.moduleView = new model.ModuleDetailView(container);
    this.initGameState(container);
};

Game.prototype.getSelectedShip = function()
{

};

Game.prototype.getShipById = function(id)
{
    var ships = this.ships.filter(function(ship) {
        return ship._id == id;
    });

    if (ships.length) {
        return ships[0];
    }

    return null;
};

Game.prototype.onClicked = function(payload)
{
    if (payload.stopped)
        return;

    var pos = payload.game;
    var ship = this.getSelectedShip();
    ship.movement.setWaypoint(pos);
};

Game.prototype.initGameState = function(container)
{
    this.terrain = new model.GameTerrain(this.gameScene, container, this.terrainSeed).createRandom();
    this.effectManager = new model.EffectManager(this.gameScene, this.dispatcher);
	this.effectManager.createExplosion();
	
    console.log(this.getShips());
    this.getShips().forEach(
        function(ship){
            ship.subscribeToScene(this.gameScene, this.dispatcher, this.uiEventResolver);
        }, this);

    this.animate();
};

Game.prototype.animate = function()
{
    requestAnimationFrame( this.animate.bind(this) );

    this.gameScene.animate(this.gameState.currentDisplayGameTime);
};

Game.prototype.load = function(doc)
{
    this.setState(doc);
    this.init();
    this.fleets = this.fleetStorage.getFleetsInGame(this._id);
    return this;
};

Game.prototype.getInitialInsert = function()
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

Game.prototype.getShips = function()
{
    return this.fleets.reduce(function(value, fleet){
		return value.concat(fleet.ships);
	}, []);
};


Game.prototype.getSelectedShip = function()
{
    return this.getShips()[0];
};

Game.prototype.updated = function(doc)
{
    console.log('game updated', doc.currentGameTime);

    if (this.gameState.currentGametime < doc.currentGameTime)
    {
        this._changeTurn(doc.currentGameTime);
    }
};

Game.prototype._changeTurn = function(time)
{
    console.log('CHANGE TURN');
    console.log(this);
    this.gameState.currentGametime = time;
    this.timelineFactory.reloadTimelines();
};

Game.prototype.getClosestShip = function()
{
    var center = this.scrolling.position;
    var ships = this.getShips().slice(0).filter(function(ship){return ! ship.isHidden()});

    ships.sort(function(a, b){
       return MathLib.distance(center, a.getPosition()) - MathLib.distance(center, b.getPosition());
    });

    if (ships.length == 0)
        return null;

    var ship = ships[0];
    if (MathLib.distance(center, ship.getPosition()) > 2000)
        return null;

    return ship;
};

Game.prototype.onScroll = function()
{
    if (this.zooming.zoom < 1)
        return;

    var ship = this.getClosestShip();
    if (! ship)
        this.getShips().forEach(function(ship){ship.getIcon().showHull()});

    if ( this.shipStatusView.targetId == ship._id)
        return;

    this.getShips().forEach(function(ship){ship.getIcon().showHull()});
    ship.getIcon().hideHull();
    this.shipStatusView.targetId = ship._id;
    this.shipStatusView.display(ship.getIcon(), ship.status).show();
};

Game.prototype.onZoom = function(event)
{
    if (event.oldZoom < 1 && event.zoom < 1)
        return;

    if ( event.zoom == 1)
    {
        var ship = this.getClosestShip();
        if (! ship)
            return;

        ship.getIcon().hideHull();
        this.shipStatusView.targetId = ship._id;
        this.shipStatusView.display(ship.getIcon(), ship.status).show();
    }
    else
    {
        this.getShips().forEach(function(ship){ship.getIcon().showHull()});
        this.shipStatusView.unsetShipIcon();
        this.shipStatusView.targetId = null;
        this.shipStatusView.hide();
    }
};

Game.prototype.onMouseMove = function(event)
{
    if (this.zooming.zoom < 1)
    {
        this.moduleView.display(null);
        return;
    }

    var ship = this.getClosestShip();
    if (! ship)
        return;

    var module = ship.getIcon().getModuleOnPosition(event.game);

    if (! module)
    {
        this.moduleView.display(null);
        return;
    }

    var modulePos = this.coordinateConverter.fromGameToViewPort(
        ship.getIcon().getModulePositionInGame(module));

    this.moduleView.display(module, modulePos, ship.status);
};
