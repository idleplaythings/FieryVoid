dic.register('model.movement.ShipMovementStatus', function(dic) {
    return new model.movement.ShipMovementStatus();
}, {
        tags: [ 'shipStatus' ]
});

dic.register('model.movement.ShipMovementHandler', function(dic) {
    return new model.movement.ShipMovementHandler(
    	dic.get('model.GameState'),
    	dic.get('model.GridService')
	);
}, {
    shared: true
});

dic.register('model.movement.MovingService', function(dic) {
    return new model.movement.MovingService(
      dic.get('model.EventDispatcher')
  );
}, {
    shared: true
});

dic.register('model.movement.PathResolver', function(dic) {
    return new model.movement.PathResolver(dic.get('model.GridService'));
}, {
    shared: true
});

dic.register('model.movement.ShipAnimator', function(dic) {
    return new model.movement.ShipAnimator();
}, {
    shared: true
});

dic.register('model.movement.PathRenderer', function(dic) {
    return new model.movement.PathRenderer(
        dic.get('model.EventDispatcher'),
        dic.get('model.GameScene'),
        dic.get('model.GameAnimationLoop')
    );
});

dic.register('model.movement.MovementVisualizer', function(dic) {
    return new model.movement.MovementVisualizer(
        dic.get('model.EventDispatcher'),
        dic.get('model.GameScene'),
        dic.get('model.Zooming')
    );
});

