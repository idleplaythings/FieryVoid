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
      dic.get('model.movement.ShipMovementHandler')
  );
}, {
    shared: true
});

dic.register('model.movement.ShipMovementAnimationService', function(dic) {
    return new model.movement.ShipMovementAnimationService(
        dic.get('model.ShipAnimationDetailsFactory')
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
        dic.get('model.GameAnimationLoop'),
        dic.get('model.Zooming')
    );
});

dic.register('model.movement.ShipAnimationDetails', function(dic) {
    return new model.movement.ShipAnimationDetails(
        dic.get('model.movement.PathResolver'),
        dic.get('model.movement.PathRenderer'),
        dic.get('model.movement.MovementVisualizer'),
        dic.get('model.movement.ShipAnimator'),
        dic.get('model.GameAnimationLoop')
    );
}, {
    tags: ['ShipAnimationDetails']
});

dic.register('model.movement.MovementRadialMenu', function(dic) {
    return new model.movement.MovementRadialMenu(
        dic.get('model.GameHtmlContainer'),
        'movementRouteRadialMenu',
        new model.DrawingToCanvas(MathLib),
        dic.get('model.CoordinateConverterViewPort'),
        dic.get('model.EventDispatcher'),
        dic.get('model.movement.MovingService')
    );
}, {
    tags: ['ShipAnimationDetails']
});


dic.register('model.ShipAnimationDetailsFactory', function(dic) {
    return Factory.createFactoryFromTags('ShipAnimationDetails');
});

