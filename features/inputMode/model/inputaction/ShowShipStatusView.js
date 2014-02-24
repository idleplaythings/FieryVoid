model.InputMode.ShowShipStatusView = function InputModeShowShipStatusView(shipService, zooming, scrolling, shipStatusView)
{
	this._shipService = shipService;
	this._zooming = zooming;
	this._scrolling = scrolling;
	this._shipStatusView = shipStatusView;
}

model.InputMode.ShowShipStatusView.prototype.onScroll = function(event)
{
	var position = event.position;

    if (this._zooming.getCurrentZoom() < 1)
        return;

    var ship = this._shipService.getClosestShip();

    if (! ship)
    {
        this._shipService.getShips().forEach(function(ship){ship.getIcon().showHull()});
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