
dic.register(
    'model.ShipIcon',
    function(dic) {
        return new model.ShipIcon(
            dic.get('model.GameScene'),
            dic.get('model.EventDispatcher')
        );
    }, {
        tags: [ 'icon' ]
    }
);

dic.register(
    'model.ShipIconEditor',
    function(dic) {
        return new model.ShipIconEditor(
            dic.get('model.GameScene'),
            dic.get('model.EventDispatcher')
        );
    }, {
        tags: [ 'icon' ]
    }
);

dic.register(
    'model.ShipIconHullEditor',
    function(dic) {
        return new model.ShipIconHullEditor(
            dic.get('model.GameScene'),
            dic.get('model.EventDispatcher')
        );
    }, {
        tags: [ 'icon' ]
    }
);

dic.register(
    'model.ModuleIconEditor',
    function(dic) {
        return new model.ModuleIconEditor(
            dic.get('model.GameScene'),
            dic.get('model.EventDispatcher')
        );
    }, {
        tags: [ 'icon' ]
    }
);

dic.register('model.IconFactory', function(dic) {
    return Factory.createFactoryFromTags('icon');
});
