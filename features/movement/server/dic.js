dic.register('model.movement.ShipAnimationDetails', function(dic) {
    return new model.movement.ShipAnimationDetailsServer(
        dic.get('model.GridService')
    );
}, {
    tags: ['ShipAnimationDetails']
});

dic.register('model.movement.ShipMovementAnimationService', function(dic) {
    return new model.movement.ShipMovementAnimationServiceServer(
        dic.get('model.ShipAnimationDetailsFactory')
  );
}, {
    shared: true
});

dic.register('model.ShipAnimationDetailsFactory', function(dic) {
    return Factory.createFactoryFromTags('ShipAnimationDetails');
});