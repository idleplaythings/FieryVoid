dic.register('model.GridPositionComparison', function(dic) {
    return new model.GridPositionComparison();
}, {
    shared: true
});

dic.register('model.PositionService', function(dic) {
    return new model.PositionService(
        dic.get('model.GridPositionComparison'),
        dic.get('model.GridService'),
        dic.get('model.GameState'),
        dic.get('model.movement.ShipMovementAnimationService')
    );
}, {
    shared: true
});
