dic.register('model.movement.ShipMovementAnimationService', function(dic) {
    return new model.movement.ShipMovementAnimationService(
    	dic.get('model.ShipService'),
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

dic.register('model.movement.ShipAnimationDetails', function(dic) {
    return new model.movement.ShipAnimationDetails(
        dic.get('model.movement.PathResolver'),
        dic.get('model.movement.PathRenderer'),
        dic.get('model.movement.ShipAnimator'),
        dic.get('model.GameAnimationLoop')
    );
}, {
    tags: ['ShipAnimationDetails']
});

dic.register('model.ShipAnimationDetailsFactory', function(dic) {
    return Factory.createFactoryFromTags('ShipAnimationDetails');
});