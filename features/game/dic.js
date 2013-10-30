dic.register(
    'model.Game',
    function(dic) {
        return new model.Game(
            dic.get('model.EventDispatcher'),
            dic.get('model.ShipStorage'),
            dic.get('model.TimelineFactory')
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
