model.inputAction.ShipSideMarker = function ShipSideMarker(shipService)
{
  this._shipService = shipService;
}

model.inputAction.ShipSideMarker.prototype.onActivation = function(event)
{
  this._shipService.getShips().forEach(function(ship){
    var type = ship.isOwnedBy(Meteor.userId()) ? "friendly" : "enemy";
    ship.getIcon().showSide(type);
  });
};

model.inputAction.ShipSideMarker.prototype.onDeactivation = function(event)
{
  this._shipService.getShips().forEach(function(ship){
    ship.getIcon().hideSide();
  });
};