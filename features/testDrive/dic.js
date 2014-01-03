dic.register(
    'model.GameTestdrive',
    function(dic) {
        return new model.GameTestdrive(
            dic.get('model.EventDispatcher'),
            dic.get('model.GridService'),
            dic.get('model.ShipStorage'),
            dic.get('model.FleetStorage'),
            dic.get('model.TimelineFactory')
        );
    }, {
        tags: [ 'game.type' ]
    }
);
