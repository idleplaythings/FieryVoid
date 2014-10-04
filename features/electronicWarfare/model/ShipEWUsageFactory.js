model.ew.ShipEWUsageFactory = function shipEWUsageFactory(shipService){
  this._shipService = shipService;
}

model.ew.ShipEWUsageFactory.prototype.getEWUsage = function(ship, turn){
  var deserialized = ship.getEwStatus().getEWByTurn(turn);
  var deserializedUsage = deserialized ? deserialized.usage : [];

  var usage = deserializedUsage.map(function(ewOrder){
    ewOrder = new model.ew.EWOrder(ewOrder);
    ewOrder.resolveTargetShip(this._shipService);
    return ewOrder;
  }.bind(this));

  return new model.ew.ShipEWUsage(ship, turn, usage);
};
