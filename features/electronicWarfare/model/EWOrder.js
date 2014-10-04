model.ew.EWOrder = function(args){
  this.targetId = args.targetId;
  this.targetShip = args.targetShip;
  this.type = args.type;
  this.amount = args.amount;
};

model.ew.EWOrder.prototype.clone = function(){
  return model.ew.EWOrder(this);
};

model.ew.EWOrder.prototype.increaseAmount = function(){
  var newAmount = this.amount + 1;
  return new model.ew.EWOrder({
    targetId: this.targetId,
    targetShip: this.targetShip,
    type: this.type,
    amount: newAmount 
  });
};

model.ew.EWOrder.prototype.decreaseAmount = function(){
  var newAmount = this.amount > 0 ? this.amount - 1 : 0;
  return new model.ew.EWOrder({
    targetId: this.targetId,
    targetShip: this.targetShip,
    type: this.type,
    amount: newAmount 
  });
};

model.ew.EWOrder.prototype.resolveTargetShip = function(shipService){
  this.targetShip = shipService.getShipById(this.targetId);
};

model.ew.EWOrder.prototype.serialize = function(){
  return {
    targetId: this.targetId,
    type: this.type,
    amount: this.amount
  };
};

model.ew.EWOrder.deserialize = function(args){
  return new model.ew.EWOrder(args);
};