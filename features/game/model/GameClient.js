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
    gameAnimationLoop,
    shipMovementAnimationService,
    fleetStorage,
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
    this.gameAnimationLoop = gameAnimationLoop;
    this.shipMovementAnimationService = shipMovementAnimationService;
    this.fleetStorage = fleetStorage;

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
    this.gameState.setTurn(args.currentGameTurn || 0);
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
    this.gameContainer.set($('#gameContainer'));
    this.gameScene.init();
    this.gridService.init(100, 100, 300);
    this.uiEventManager.init();
    this.shipMovementAnimationService.init(this.shipService.getShips());
    this.gameActionManager.init(this._id);
    
    this.gameTerrain.createRandom(this.terrainSeed);

    this.timelineFactory.startGameSaveInterval(this._id);

    this.gameTerrain.startAnimation(this.gameAnimationLoop);
    this.gameAnimationLoop.start();
    this.gameState.startTurn();
};

model.GameClient.prototype.load = function(doc)
{
    this.setState(doc);
    this._fleets = this.fleetStorage.getFleetsInGame(this._id);

    var ships = this._fleets.reduce(function(value, fleet){
        return value.concat(fleet.ships);
    }, []);

    this.shipService.setShips(ships);

    return this;
};

model.GameClient.prototype.updated = function(doc)
{
    for (var i in doc.players){
        var docPlayer = doc.players[i];
        var player = this.getPlayer(docPlayer.id);

        if (docPlayer.committedTurn !== player.committedTurn){
            player.committedTurn = docPlayer.committedTurn;
            this.dispatcher.dispatch({name: 'PlayerTurnChanged', payload: player});
        }
    }
    
    if (this.gameState.currentGameTurn < doc.currentGameTurn)
    {
        this.timelineFactory.reloadTimelines();
        this.gameState.setTurn(doc.currentGameTurn);
        this.gameState.startTurn();
    }
};
