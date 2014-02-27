model.inputAction.ShowModuleDetailViewEditor = function ShowModuleDetailViewEditor(editorShip, zooming, shipModuleView, coordinateConverter)
{
	this._editorShip = editorShip;
	this._shipModuleView = shipModuleView;
    this._coordinateConverter = coordinateConverter;
    this._zooming = zooming;
};

model.inputAction.ShowModuleDetailViewEditor.prototype.onMouseMove = function(event)
{
	/*
    if (this._zooming.getCurrentZoom() < 1)
    {
        this._shipModuleView.remove();
        return;
    }
	*/
	
    var shipAndTile = this._editorShip.getShipAndTileOnScenePosition(event.game);
    
    var ship = shipAndTile.ship;
    var tile = shipAndTile.tile;

    if (! ship || ! tile)
    {
        this._shipModuleView.remove();
        return;
    }

    var positionService = new model.ShipDesignPositionService(ship.shipDesign);
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
