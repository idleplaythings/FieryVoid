model.Game = Extend.register(Game);

function Game(gridService, shipService, gameTerrain, args) {

    if ( ! args)
        args = {};

    this.type = 'Game';
    this.gridService = gridService;
    this.shipService = shipService;
    this.gameTerrain = gameTerrain;

    this.setState(args);

    this.name = "a game";
    this.created =  new Date().getTime();
    this.terrainSeed = Math.random();
}

Game.prototype.getRandomFleetForPlayer = function(playerId, fleetStorage, shipStorage) {

	var fleet = fleetStorage.createAndInsertEmptyFleetForMe();

	var shipCount = 1;

	while(shipCount--)
	{
			var shipDesignId = getRandomShipDesignIdForPlayer(playerId);

		if ( ! shipDesignId) {
			return false;
		}

		var ship = shipStorage.createFromDesignId(shipDesignId, playerId);

		ship.status.managers.movement.setStartPosition(
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
    this.gameState = new model.GameState(args.currentGameTurn || 0);
    this.created = args.created || null;
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

Game.prototype.load = function(doc)
{
    this.setState(doc);
    this.shipService.loadFleets(this._id);
    //this.fleets = this.fleetStorage.getFleetsInGame(this._id);

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
        currentGameTurn: this.gameState.currentGameTurn,
        players: this.players
    };
};
/*
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

    // range
    // var range = this.gridService.getRange(coordinates, 2);
    // this.gridService.select(range);

    // distance
    // var steps = this.gridService.traverse(coordinates, 20, this._validateTerrain.bind(this));

    // var result = [];
    // steps.forEach(function(coordinatesAtDistance, distance) {
    //     var opacity = 0.5 - (distance / 20 * 0.5) + 0.5;
    //     result = result.concat(coordinatesAtDistance.map(function(coordinates) {
    //         coordinates.opacity = opacity;
    //         return coordinates;
    //     }));
    // });

    this.gridService.select(coordinates);
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
    var coordinates = this.gridService.resolveGridCoordinates(event.game);
    // var origin = this.gridService.resolveGridCoordinates({ x: 3, y: 0 });
    var origin = new model.hexagon.coordinate.Offset(3, 3);
    var path = this.gridService.rayTrace(origin, coordinates);
    this.gridService.highlight(path);
};

Game.prototype._highlightMouseOverHex = function(event)
{
    this.gridService.highlightHexAt(event.game);
};
*/
