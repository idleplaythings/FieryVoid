model.Game = Extend.register(Game);

function Game(dispatcher, gridService, shipStorage, fleetStorage, timelineFactory, gameScene, args) {
    if ( ! args)
        args = {};

    this.type = 'Game';
    this.dispatcher = dispatcher;
    this.gridService = gridService;
    this.shipStorage = shipStorage;
    this.fleetStorage = fleetStorage;
    this.timelineFactory = timelineFactory;
    this.gameScene = gameScene;


    // this.gameScene = new model.GameScene(this.dispatcher, this.gameState);
    this.setState(args);

    this.name = "a game";
    this.created =  new Date().getTime();
    this.terrainSeed = Math.random();
}

Game.prototype.getRandomFleetForPlayer = function(playerId) {

	var fleet = this.fleetStorage.createAndInsertEmptyFleetForMe();

	var shipCount = 1;

	while(shipCount--)
	{
			var shipDesignId = getRandomShipDesignIdForPlayer(playerId);

		if ( ! shipDesignId) {
			return false;
		}

		var ship = this.shipStorage.createFromDesignId(shipDesignId, playerId);

		ship.status.managers.movement.addStartPosition( {
			//TODO: movement
		});

		fleet.addShip(ship);
	}

	return fleet;
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

    this.gridService.init(100, 100, 300);

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

    this.uiEventResolver.registerListener('click', this.onClick.bind(this), 0);
    this.uiEventResolver.registerListener('mousemove', this.onMouseMove.bind(this), 0);

    new model.ReplayUI(this.gameState).create();
    new model.TurnUi(this._id, this.gameState).create();

	var shipStatusView = new model.ShipStatusView(
        container,
        this.coordinateConverter,
        this.dispatcher
    ).hide();

	this.shipService = new model.ShipService(
		this.fleets,
		new model.ModuleDetailView(container),
		shipStatusView,
		this.dispatcher,
		this.uiEventResolver,
		this.coordinateConverter
	);

	this.uiEventResolver.addClickStrategy(
		new model.ClickStrategySelect(this.shipService)
	);

	this.actionBar = new model.ActionBar(this.dispatcher);

    this._initGameState(container);
};

Game.prototype._initGameState = function(container)
{
    this.terrain = new model.GameTerrain(
        this.gameScene,
        container,
        this.terrainSeed,
        this.gridService
    ).createRandom();
    this.effectManager = new model.EffectManager(this.gameScene, this.dispatcher);
	this.effectManager.createExplosion();
    this.shipService.subscribeToScene(
        this.gameScene,
        this.effectManager,
        this.dispatcher,
        this.uiEventResolver,
        this.gridService
    );

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

Game.prototype.onScroll = function(event)
{

};

Game.prototype.onZoom = function(event)
{

};

Game.prototype.onClick = function(event)
{
	if (event.stopped)
		return;

    var coordinates = this.gridService.resolveGridCoordinates(event.game);

    // var range = this.gridService.getRange(coordinates, 2);
    // this.gridService.select(range);

    var steps = this.gridService.traverse(coordinates, 20, this._validateTerrain.bind(this));

    var result = [];
    steps.forEach(function(coordinatesAtDistance, distance) {
        var opacity = 0.5 - (distance / 20 * 0.5) + 0.5;
        result = result.concat(coordinatesAtDistance.map(function(coordinates) {
            coordinates.opacity = opacity;
            return coordinates;
        }));
    });

    this.gridService.select(result);
};

Game.prototype._validateTerrain = function(coordinates)
{
    if (this._terrainMap == null) {
        this._terrainMap = {};
        this.terrain.asteroidBelt.asteroids.forEach(function(asteroid) {
            this._terrainMap[asteroid.coordinates.q + ',' + asteroid.coordinates.r] = true;
        }, this);
    }

    return this._terrainMap[coordinates.q + ',' + coordinates.r] !== true;
};

Game.prototype.onMouseMove = function(event)
{
    this._highlightMouseOverHex(event);
};

Game.prototype._highlightMouseOverHex = function(event)
{
    this.gridService.highlightHexAt(event.game);
};
