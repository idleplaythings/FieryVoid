model.movement.ShipAnimationDetailsServer = function ShipAnimationDetailsServer(
  gridService
)
{
  this._ship = null;

  this._gridService = gridService;
}

model.movement.ShipAnimationDetailsServer.prototype.getShip = function()
{
  return this._ship;
};

model.movement.ShipAnimationDetailsServer.prototype.resolve = function(ship)
{
  this._ship = ship;
  return this;
};

model.movement.ShipAnimationDetailsServer.prototype.getShipPositionAndFacing = function(turn, time)
{
  var route = this._ship.getMovement().getRouteByTurn(turn);
  var startPosition = route.getStartPosition();
  var scenePosition = this._gridService.resolveGameCoordinates(startPosition.getPosition().toOddR());
  var sceneFacing = startPosition.getFacing() * 60;

  return {position: scenePosition, rotation: sceneFacing};
};