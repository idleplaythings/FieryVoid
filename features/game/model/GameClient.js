model.GameClient = function GameClient(
    dispatcher,
    gridService,
    shipService,
    timelineFactory,
    gameScene,
    gameContainer,
    uiEventManager,
    gameActionManager,
    gameTerrain,
    gameState,
    args) {

    if ( ! args)
        args = {};

    this.type = 'Game';
    this.dispatcher = dispatcher;
    this.gridService = gridService;
    this.timelineFactory = timelineFactory;
    this.shipService = shipService;
    this.gameScene = gameScene;
    this.gameContainer = gameContainer;
    this.uiEventManager = uiEventManager;
    this.gameActionManager = gameActionManager;
    this.gameTerrain = gameTerrain;
    this.gameState = gameState;

    this.setState(args);

    this.name = "a game";
    this.created =  new Date().getTime();
    this.terrainSeed = Math.random();
}


model.GameClient.prototype.setState = function(args)
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
    this.gameState.startTurn(args.currentGameTurn || 0);
    this.created = args.created || null;
};

model.GameClient.prototype.getPlayer = function(id)
{
    var players = this.players.filter(function(player){
        return player.id == id;
    });

    if (players[0])
        return players[0];

    return null;
};

model.GameClient.prototype.play = function()
{
	var container = $('#gameContainer');
    this.gameContainer.set(container);
    this.gridService.init(100, 100, 300);
    this.uiEventManager.init();
    this.gameActionManager.init();
    this.gameScene.init();
    this.gameTerrain.createRandom(this.terrainSeed);

    this.timelineFactory.startGameSaveInterval(this._id);
    this.animate();
};

model.GameClient.prototype.animate = function()
{
    requestAnimationFrame( this.animate.bind(this) );

    this.gameScene.animate(this.gameState.currentDisplayGameTime);
};

model.GameClient.prototype.load = function(doc)
{
    this.setState(doc);
    this.shipService.loadFleets(this._id);
    //this.fleets = this.fleetStorage.getFleetsInGame(this._id);

    return this;
};

model.GameClient.prototype.updated = function(doc)
{
    if (this.gameState.currentGameTurn < doc.currentGameTurn)
    {
        this.timelineFactory.reloadTimelines();
        this.gameState.changeTurn(doc.currentGameTurn);
    }
};
