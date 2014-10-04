model.ew.Scanner = function Scanner(shipEwStatus, ew){
  this._ewProduced = ew;
  this._shipEwStatus = shipEwStatus;
};

model.ew.Scanner.prototype.getProducedEw = function(turn){
  return this._ewProduced;
};