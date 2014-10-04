model.EnergyConsumer = function EnergyConsumer(energy){
  this._energyConsumed = energy;
};

model.EnergyConsumer.prototype.getConsumedEnergy = function(){
  return this._energyConsumed;
}