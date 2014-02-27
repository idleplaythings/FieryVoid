model.ShipService = function ShipService(dispatcher, iconFactory, positionService)
{
	this._dispatcher = dispatcher;
    this._iconFactory = iconFactory;
    this._positonService = positionService;

	this.selectedShip = null;
    this.currentTurn = 0;

    this._ships = [];

    this._dispatcher.attach('scene.init', this.onSceneInit.bind(this));
}

model.ShipService.prototype.setShips = function(ships)
{
     this._ships = ships;
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
    return this._ships;
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
       return MathLib.distance(scenePosition, posService.getScenePosition(a)) - MathLib.distance(scenePosition, posService.getScenePosition(b));
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
    var shipAndTile = this.getShipAndTileOnScenePosition(scenePosition);

    if (shipAndTile == null)
        return null;

    return shipAndTile.ship;
};

model.ShipService.prototype.getShipAndTileOnScenePosition = function(scenePosition)
{
    var ship = this.getClosestShip(scenePosition);

    if (! ship)
        return {ship: null, tile: null};

    var tile =  this._positonService.getShipTileOnScenePosition(ship, scenePosition)

    if (! this._positonService.shipOccupiesScenePosition(ship, scenePosition))
        return {ship: null, tile: null};

    return {ship: ship, tile: tile}
};