model.ew.ShipElectronicWarfareStatus = function(timeline){
  this._timeline = timeline;
}

model.ew.ShipElectronicWarfareStatus.prototype.getEW = function(){
  return this._timeline.filter(function(entry){
    return entry.name == 'EW';
  }).map( function(entry) { 
    return entry.payload;
  });
};

model.ew.ShipElectronicWarfareStatus.prototype.getEWByTurn = function(turn){
  return this.getEW().filter(function(order){
    return order.turn == turn;
  }).pop();
};