model.movement.ThrustProducer = function ThrustProducer(thrustProduced){
  this._thrustProduced = thrustProduced;
}

model.movement.ThrustProducer.prototype.getThrustProduced = function(){
  return this._thrustProduced;
};