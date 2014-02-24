model.ShipService = function ShipService(dispatcher, shipStorage, fleetStorage)
{
	this._dispatcher = dispatcher;
    this._shipStorage = shipStorage;
    this._fleetStorage = fleetStorage;

	this.selectedShip = null;
	this.zoom = 1;
	this.scroll = {x:0, y:0};
    this.currentTurn = 0;

	this._dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
    this._dispatcher.attach("ScrollEvent", this.onScroll.bind(this));

    this._fleets = [];
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

model.ShipService.prototype.subscribeToScene = function(
    scene, effectManager, dispatcher, eventResolver, gridService)
{
	this.getShips().forEach(
        function(ship){
            ship.subscribeToScene(scene, effectManager, dispatcher, eventResolver, gridService, this);
        }, this);

	//this.selectShip(this.getClosestShip());
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

model.ShipService.prototype.getClosestShip = function(center)
{
	if ( ! center)
		center = this.scroll;

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

model.ShipService.prototype.getShipOnScenePosition = function(scenePosition, turn)
{
    var shipAndTile = this.getShipAndTileOnScenePosition(scenePosition, turn);

    if (shipAndTile == null)
        return null;

    return shipAndTile.ship;
};

model.ShipService.prototype.getShipAndTileOnScenePosition = function(scenePosition, turn)
{
    var ship = this.getClosestShip(scenePosition);

    if (! ship)
        return null;

    var positionService = new model.ShipPositionService(ship, turn);
    var tile = positionService.getTileOnPosition(scenePosition)

    if (! positionService.occupiesPosition(scenePosition))
        return;

    return {ship: ship, tile: tile}
};