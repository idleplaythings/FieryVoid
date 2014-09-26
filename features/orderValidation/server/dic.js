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
    dic.get('order.MovementOrderProcessor'),
    dic.get('order.FireOrderProcessor')
  );
}, {shared:true});

dic.register('order.MovementOrderProcessor', function(dic) {
  return new order.MovementOrderProcessor();
}, {shared:true});

dic.register('order.FireOrderProcessor', function(dic) {
  return new order.FireOrderProcessor(
    dic.get('model.weapon.WeaponFireFactory'),
    dic.get('model.ShipService'),
    dic.get('model.GameState')
  );
}, {shared:true});

dic.register(
    'order.TurnProcessor',
    function(dic) {
        return new order.TurnProcessor(
            dic.get('model.ShipService'),
            dic.get('model.movement.ShipMovementHandler')
        );  
    }, {
        shared: true
    }
);


