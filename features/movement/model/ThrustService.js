model.movement.ThrustService = function ThrustService(){};

model.movement.ThrustService.prototype.getTotalThrustProduced = function(ship, turn){
  return ship.getThrustProducers().reduce(function(value, module){
    return value + module.getThrustProducer().getThrustProduced(turn);
  }, 0);
}