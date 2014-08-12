model.inputAction.ShowGridOnZoom = function ShowGridOnZoom(shipService){
  this._shipService = shipService;
};

model.inputAction.ShowGridOnZoom.prototype.onDeactivation = function()
{
    this._shipService.getShips().forEach(function(ship){ship.getIcon().hideGrid()});
};

model.inputAction.ShowGridOnZoom.prototype.onZoom = function(event)
{
    if (event.oldZoom < 1 && event.zoom < 1)
        return;

    if ( event.zoom == 1)
    {
      this._shipService.getShips().forEach(function(ship){ship.getIcon().showGrid()});
    }
    else
    {
      this._shipService.getShips().forEach(function(ship){ship.getIcon().hideGrid()});
    }
};