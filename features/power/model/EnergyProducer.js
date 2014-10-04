model.EnergyProducer = function EnergyProducer(energyProvided){
  this._energyProvided = energyProvided;
};

model.EnergyProducer.prototype.getProducedEnergy = function(){
  return this._energyProvided;
}