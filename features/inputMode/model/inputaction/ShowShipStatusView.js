model.inputAction.ShowShipStatusView = function InputActionShowShipStatusView(shipService, zooming, scrolling, shipStatusView, positionService)
{
	this._shipService = shipService;
	this._zooming = zooming;
	this._scrolling = scrolling;
	this._shipStatusView = shipStatusView;
    this._positionService = positionService;
}

model.inputAction.ShowShipStatusView.prototype.onScroll = function(event)
{
    if (this._zooming.getCurrentZoom() < 1)
        return;

    var ship = this._shipService.getClosestShip(this._scrolling.getCurrentPosition());

    if (! ship)
    {
        //this._shipService.getShips().forEach(function(ship){ship.getIcon().showHull()});
        return;
    }

    if ( this._shipStatusView.targetId == ship._id)
        return;

    var positionService = this._positionService.getComponentPositionService(ship);
    //this._shipService.getShips().forEach(function(ship){ship.getIcon().showHull()});
    //ship.getIcon().hideHull();
    this._shipStatusView.targetId = ship._id;
    this._shipStatusView.display(positionService, ship).show();
};

model.inputAction.ShowShipStatusView.prototype.onZoom = function(event)
{
    if (event.oldZoom < 1 && event.zoom < 1)
        return;

    if ( event.zoom == 1)
    {
        var ship = this._shipService.getClosestShip(
            this._scrolling.getCurrentPosition()
        );
        
        if (! ship)
            return;

        //ship.getIcon().hideHull();
        var positionService = this._positionService.getComponentPositionService(ship);

        this._shipStatusView.targetId = ship._id;
        this._shipStatusView.display(positionService, ship).show();
    }
    else
    {
        //this._shipService.getShips().forEach(function(ship){ship.getIcon().showHull()});
        this._shipStatusView.unsetPositionService();
        this._shipStatusView.targetId = null;
        this._shipStatusView.hide();
    }
};