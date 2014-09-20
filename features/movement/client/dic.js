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
        dic.get('model.movement.MovingService'),
        dic.get('model.GridService')
    );
}, {
    tags: ['ShipAnimationDetails']
});

dic.register('model.movement.ShipMovementAnimationService', function(dic) {
    return new model.movement.ShipMovementAnimationService(
        dic.get('model.ShipAnimationDetailsFactory')
  );
}, {
    shared: true
});


dic.register('model.ShipAnimationDetailsFactory', function(dic) {
    return Factory.createFactoryFromTags('ShipAnimationDetails');
});