
model.Game = function Game(gridService, shipService, gameTerrain, gameState, shipMovementHandler, fleetStorage, args) {

    if ( ! args)
        args = {};

    this.type = 'Game';
    this.gridService = gridService;
    this.shipService = shipService;
    this.gameTerrain = gameTerrain;
    this.gameState = gameState;
    this.shipMovementHandler = shipMovementHandler;
    this.fleetStorage = fleetStorage;
    

    this.setState(args);

    this.name = "a game";
    this.created =  new Date().getTime();
    this.terrainSeed = Math.random();
}

model.Game.prototype.getRandomFleetForPlayer = function(playerId, fleetStorage, shipStorage) {

	var fleet = fleetStorage.createAndInsertEmptyFleetForMe();

	var shipCount = 1;

	while(shipCount--)
	{
			var shipDesignId = getRandomShipDesignIdForPlayer(playerId);

		if ( ! shipDesignId) {
			return false;
		}

		var ship = shipStorage.createFromDesignId(shipDesignId, playerId);
        console.log(ship);
        
		this.shipMovementHandler.setStartPosition(
            ship,
			new model.movement.Position({
				position: new model.hexagon.coordinate.Offset(
					Math.floor(Math.random() * 10),
					Math.floor(Math.random() * 10)
				),
				speed: 5
			})
		);


		fleet.addShip(ship);
	}

	return fleet;
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
    this.fleets = args.fleets || [];
    this.asteroids = args.asteroids || [];

    this.players = args.players || [];
    this.gameState.setTurn(args.currentGameTurn || 0);
    this.created = args.created || null;
};

model.Game.prototype.addPlayer = function(id)
{
    if (this.getPlayer(id))
        return;

    this.players.push({id:id, committedTurn:-1});
};

model.Game.prototype.getPlayer = function(id)
{
    return players = this.players.filter(function(player){
        return player.id == id;
    })[0];
};

model.Game.prototype.allPlayersReady = function()
{
    var turn = this.gameState.getTurn();
    return this.players.every(function(player){
        return player.committedTurn == turn;
    });
};

model.Game.prototype.load = function(doc)
{
    this.setState(doc);
    this._fleets = this.fleetStorage.getFleetsInGame(this._id);

    var ships = this._fleets.reduce(function(value, fleet){
        return value.concat(fleet.ships);
    }, []);

    this.shipService.setShips(ships);
    //this.fleets = this.fleetStorage.getFleetsInGame(this._id);

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
        currentGameTurn: this.gameState.currentGameTurn,
        players: this.players
    };
};