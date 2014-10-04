model.ew.EWService = function(shipEWFactory){
  this._shipEWFactory = shipEWFactory;
}

model.ew.EWService.prototype.getDew = function(ship, turn) {
  return this._shipEWFactory.getEWUsage(ship, turn).getDew();
};

model.ew.EWService.prototype.increaseOEW = function(ship, targetShip, turn){
  
};

model.ew.EWService.prototype.canIncreaseOEW = function(ship, targetShip, turn){
  return true;
};

model.ew.EWService.prototype.decreaseOEW = function(ship, targetShip, turn){
  
};

model.ew.EWService.prototype.canDecreaseOEW = function(ship, targetShip, turn){
  return true;
};