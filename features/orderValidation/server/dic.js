dic.register('order.OrderProcessor', function(dic) {
  return new order.OrderProcessor(
    dic.get('model.GameStorage'),
    dic.get('model.GameState'),
    dic.get('order.OrderProcessorFactory'),
    dic.get('model.TimelineStorage')
  );
}, {shared:true});

dic.register('order.OrderProcessorFactory', function(dic) {
  return new order.OrderProcessorFactory(
    dic.get('order.MovementOrderProcessor')
  );
}, {shared:true});

dic.register('order.MovementOrderProcessor', function(dic) {
  return new order.MovementOrderProcessor();
}, {shared:true});

