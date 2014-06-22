dic.register(
    'model.TurnProcessor',
    function(dic) {
        return new model.TurnProcessor(
            dic.get('model.ShipService'),
            dic.get('model.movement.ShipMovementHandler')
        );  
    }, {
        shared: true
    }
);