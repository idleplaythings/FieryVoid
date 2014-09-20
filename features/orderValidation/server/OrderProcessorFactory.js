order.OrderProcessorFactory = function(movementOrderProcessor, fireOrderProcessor){
  this._movementOrderProcessor = movementOrderProcessor;
  this._fireOrderProcessor = fireOrderProcessor;
};

order.OrderProcessorFactory.prototype.getProcessor = function(timelineEntry){
  switch (timelineEntry.name){
    case 'movementRoute':
      return this._movementOrderProcessor;
    case 'fireOrder':
      return this._fireOrderProcessor;
  }

  throw new Error("Processor for timelineEntry '" + timelineEntry.name + "' not found");
}