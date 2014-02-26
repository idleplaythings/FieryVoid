model.ShipService = function ShipService(dispatcher, shipStorage, fleetStorage, iconFactory, positionService)
{
	this._dispatcher = dispatcher;
    this._shipStorage = shipStorage;
    this._fleetStorage = fleetStorage;
    this._iconFactory = iconFactory;
    this._positonService = positionService;

	this.selectedShip = null;
    this.currentTurn = 0;

    this._fleets = [];

    this._dispatcher.attach('scene.init', this.onSceneInit.bind(this));
}

model.ShipService.prototype.loadFleets = function(gameId)
{
     this._fleets = this._fleetStorage.getFleetsInGame(gameId);
};

model.ShipService.prototype.selectShip = function(ship)
{
	if (this.selectedShip)
		this.selectedShip.deselect();

    this.selectedShip = ship;
    this.selectedShip.select();

    this.dispatcher.dispatch({name: 'ShipSelectedEvent', payload:ship});
};

model.ShipService.prototype.onSceneInit = function(event)
{
	this.getShips().forEach(function(ship){
        ship.setIcon(this._iconFactory.create('model.ShipIcon'));
    }, this);
};

model.ShipService.prototype.getShips = function()
{
    return this._fleets.reduce(function(value, fleet){
		return value.concat(fleet.ships);
	}, []);
};

model.ShipService.prototype.getShipById = function(id)
{
    return this.getShips().filter(function(ship) {
        return ship._id == id;
    })[0];
};

model.ShipService.prototype.getClosestShip = function(scenePosition)
{
    var ships = this.getShips().slice(0).filter(function(ship){return ! ship.isHidden()});

    var posService = this._positonService;

    ships.sort(function(a, b){
       return MathLib.distance(scenePosition, posService.getScenePosition(a)) - MathLib.distance(scenePosition, posService.getScenePosition(a));
    });

    if (ships.length == 0)
        return null;

    var ship = ships[0];
    if (MathLib.distance(scenePosition, posService.getScenePosition(ship)) > 2000)
        return null;

    return ship;
};

model.ShipService.prototype.getShipOnScenePosition = function(scenePosition)
{
    var shipAndTile = this.getShipAndTileOnScenePosition(scenePosition, turn);

    if (shipAndTile == null)
        return null;

    return shipAndTile.ship;
};

model.ShipService.prototype.getShipAndTileOnScenePosition = function(scenePosition)
{
    var ship = this.getClosestShip(scenePosition);

    if (! ship)
        return null;

    var positionService = new model.ShipPositionService(ship, turn);
    var tile =  this._positonService.getShipTileOnScenePosition(ship, scenePosition)

    if (! this._positonService.shipOccupiesScenePosition(ship, scenePosition))
        return;

    return {ship: ship, tile: tile}
};