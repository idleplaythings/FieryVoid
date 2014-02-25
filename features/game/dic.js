dic.register(
    'model.client.Game',
    function(dic) {
        return new model.GameClient(
            dic.get('model.EventDispatcher'),
            dic.get('model.GridService'),
            dic.get('model.ShipService'),
            dic.get('model.TimelineFactory'),
            dic.get('model.GameScene'),
            dic.get('model.GameHtmlContainer'),
            dic.get('model.UiEventManager'),
            dic.get('model.GameActionManager'),
            dic.get('model.GameTerrain'),
            dic.get('model.GameState')
        );  
    }, {
        tags: [ 'game.type' ]
    }
);

dic.register(
    'model.server.Game',
    function(dic) {
        return new model.Game(
            dic.get('model.GridService'),
            dic.get('model.ShipService'),
            dic.get('model.GameTerrain'),
            dic.get('model.GameState'),
            dic.get('model.movement.ShipMovementHandler')
        );  
    }, {
        tags: [ 'game.type' ]
    }
);

dic.register('model.GameStorage', function(dic) {
    return new model.GameStorage(dic.get('model.GameFactory'));
});

dic.register('model.GameFactory', function(dic) {
    var gameFactory = new Factory();

    var gameModels = dic.getTagged('game.type');

    gameModels.forEach(function(modelName) {
        gameFactory.add(modelName, function() {
            return dic.get(modelName);
        });
    });

    return gameFactory;
});

dic.register('GameController', function(dic) {
    return new controller.GameController(dic.get('model.GameStorage'));
});

dic.register('model.GameState', function(dic) {
    return new model.GameState(
        dic.get('model.EventDispatcher')
    )
}, {
    shared: true
});

dic.register('model.ShipService', function(dic) {
    return new model.ShipService(
        dic.get('model.EventDispatcher'),
        dic.get('model.ShipStorage'),
        dic.get('model.FleetStorage'),
        dic.get('model.IconFactory')
    )
}, {
    shared: true
});

dic.register('model.GameHtmlContainer', function(dic) {
    return new model.GameHtmlContainer(dic.get('model.EventDispatcher'))
}, {
    shared: true
});

dic.register('model.GameScene', function(dic) {
    return new model.GameScene(
        dic.get('model.EventDispatcher'),
        dic.get('model.GameHtmlContainer')
    )
}, {
    shared: true
});


dic.register('model.Scrolling', function(dic) {
    return new model.Scrolling(dic.get('model.EventDispatcher'))
}, {
    shared: true
});

dic.register('model.Zooming', function(dic) {
    return new model.Zooming(dic.get('model.EventDispatcher'))
}, {
    shared: true
});

dic.register('model.UiEventManager', function(dic) {
    return new model.UiEventManager(
        dic.get('model.GameHtmlContainer'),
        dic.get('model.CoordinateConverterViewPort'),
        dic.get('model.EventDispatcher'),
        dic.get('model.Scrolling'),
        dic.get('model.Zooming')
    )
}, {
    shared: true
});

//gameContainer, coordinateConverter, externalDispatcher, scrolling, zooming
/* Does not exist on server
 * 
 * 
dic.register('model.GameScene', function(dic) {
    return new model.GameScene(dic.get('model.EventDispatcher'));
});
*/
