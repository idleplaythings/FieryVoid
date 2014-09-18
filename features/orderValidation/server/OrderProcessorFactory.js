order.OrderProcessorFactory = function(movementOrderProcessor){
  this._movementOrderProcessor = movementOrderProcessor;
};

order.OrderProcessorFactory.prototype.getProcessor = function(timelineEntry){
  switch (timelineEntry.name){
    case 'movementRoute':
      return this._movementOrderProcessor;
  }

  throw new Error("Processor for timelineEntry '" + timelineEntry.name + "' not found");
}