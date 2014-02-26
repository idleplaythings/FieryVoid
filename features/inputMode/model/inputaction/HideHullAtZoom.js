model.inputAction.HideHullAtZoom  = function HideHullAtZoom(shipService, zooming)
{
	this._shipService = shipService;
	this._zooming = zooming;
};


model.inputAction.HideHullAtZoom.prototype.onZoom = function(event)
{
    if (event.oldZoom < 1 && event.zoom < 1)
        return;

    if ( event.zoom == 1)
    {
      	 this._shipService.getShips().forEach(function(ship){ship.getIcon().hideHull()});
    }
    else
    {
        this._shipService.getShips().forEach(function(ship){ship.getIcon().showHull()});
    }
};