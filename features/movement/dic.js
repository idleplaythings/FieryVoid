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
});