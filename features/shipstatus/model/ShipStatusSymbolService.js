model.ShipStatusSymbolService = function(powerService){
  this._powerService = powerService;
};

model.ShipStatusSymbolService.prototype.getStatusSymbols = function(module){

  return []
    .concat(getPowerSymbols(module))
    .concat(getThrustSymbols(module))
    .concat(getScannerSymbols(module));
};

var getPowerSymbols = function(module)
{

  var status = module.getPowerStatus();

  if (status !== null)
      return new model.ShipStatusSymbolPower(status);

  return [];
};

var getThrustSymbols = function(module){
  if (module.isThrustProducer){
    return new model.ShipStatusSymbolThrust(module.getThrustProducer().getThrustProduced());
  }

  return [];
};

var getScannerSymbols = function(module){
  if (module.isScanner){
    return new model.ShipStatusSymbolScanner(module.getScanner().getProducedEw());
  }

  return [];
};