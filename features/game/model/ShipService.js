model.ShipService = function ShipService(
	fleets,
	shipStatusView,
	dispatcher,
	coordinateConverter)
{
	this.fleets = fleets;
	this.dispatcher = dispatcher;
	this.shipStatusView = shipStatusView;
	this.coordinateConverter = coordinateConverter

	this.selectedShip = null;
	this.zoom = 1;
	this.scroll = {x:0, y:0};
    this.currentTurn = 0;

	this.dispatcher.attach("ZoomEvent", this.onZoom.bind(this));
    this.dispatcher.attach("ScrollEvent", this.onScroll.bind(this));

    window.ships = this.getShips();
}

model.ShipService.prototype.selectShip = function(ship)
{
	if (this.selectedShip)
		this.selectedShip.deselect();

    this.selectedShip = ship;
    this.selectedShip.select();

    this.dispatcher.dispatch({name: 'ShipSelectedEvent', payload:ship});
};

model.ShipService.prototype.subscribeToScene = function(scene, effectManager, dispatcher, eventResolver, gridService)
{
	this.getShips().forEach(
        function(ship){
            ship.subscribeToScene(scene, effectManager, dispatcher, eventResolver, gridService, this);
        }, this);

	//this.selectShip(this.getClosestShip());
};

model.ShipService.prototype.getShips = function()
{
    return this.fleets.reduce(function(value, fleet){
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

model.ShipService.prototype.onScroll = function(event)
{
	this.scroll = event.position;

    if (this.zoom < 1)
        return;

    var ship = this.getClosestShip();
    if (! ship)
    {
        this.getShips().forEach(function(ship){ship.getIcon().showHull()});
        return;
    }

    if ( this.shipStatusView.targetId == ship._id)
        return;

    var positionService = new model.ShipPositionService(ship, this.currentTurn);
    this.getShips().forEach(function(ship){ship.getIcon().showHull()});
    ship.getIcon().hideHull();
    this.shipStatusView.targetId = ship._id;
    this.shipStatusView.display(positionService, ship.status).show();
};

model.ShipService.prototype.onZoom = function(event)
{
	this.zoom = event.zoom;

    if (event.oldZoom < 1 && event.zoom < 1)
        return;

    if ( event.zoom == 1)
    {
        var ship = this.getClosestShip();
        if (! ship)
            return;

        ship.getIcon().hideHull();
        var positionService = new model.ShipPositionService(ship, this.currentTurn);

        this.shipStatusView.targetId = ship._id;
        this.shipStatusView.display(positionService, ship.status).show();
    }
    else
    {
        this.getShips().forEach(function(ship){ship.getIcon().showHull()});
        this.shipStatusView.unsetPositionService();
        this.shipStatusView.targetId = null;
        this.shipStatusView.hide();
    }
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