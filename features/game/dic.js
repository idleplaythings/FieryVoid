dic.register(
    'model.Game',
    function(dic) {
        return new model.Game(dic.get('model.EventDispatcher'));
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
