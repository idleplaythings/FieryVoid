model.inputAction.ActivateTileOnMouseMove = function ActivateTileOnMouseMove(gridService, activeTile)
{
    this._gridService = gridService;
    this._activeTile = activeTile;
    this._lastCoordinates = null;
}

model.inputAction.ActivateTileOnMouseMove.prototype.onMouseMove = function(event)
{
    var coordinates = this._gridService.resolveGridCoordinates(event.game);

    if (this._lastCoordinates !== null) {
        if (this._lastCoordinates.equals(coordinates)) {
            return;
        }
    }

    this._lastCoordinates = coordinates;

    this._activeTile.activateTile(this._lastCoordinates);
}
