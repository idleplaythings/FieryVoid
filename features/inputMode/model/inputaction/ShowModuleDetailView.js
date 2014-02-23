model.inputAction.ShowModuleDetailView = function ShowModuleDetailView(shipService, zooming, shipModuleView, positionService, coordinateConverter)
{
	this._shipService = shipService;
	this._shipModuleView = shipModuleView;
    this._positionService = positionService;
    this._coordinateConverter = coordinateConverter;
    this._zooming = zooming;
};


model.inputAction.ShowModuleDetailView.prototype.onMouseMove = function(event)
{
    if (this._zooming.getCurrentZoom() < 1)
    {
        this._shipModuleView.remove();
        return;
    }

    var shipAndTile = this._shipService.getShipAndTileOnScenePosition(event.game);
    var ship = shipAndTile.ship;
    var tile = shipAndTile.tile;

    if (! ship || ! tile)
    {
        this._shipModuleView.remove();
        return;
    }


    var positionService = this._positionService.getComponentPositionService(ship);
    var module = ship.getModuleOnPosition(tile);

    if (! module)
    {
        this._shipModuleView.remove();
        return;
    }

    var modulePos = this._coordinateConverter.fromGameToViewPort(
        positionService.getModuleCenterPositionInScene(module));

    this._shipModuleView.display(module, modulePos);
};
