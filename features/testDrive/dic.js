dic.register(
    'model.GameTestdrive',
    function(dic) {
        return new model.GameTestdrive(dic.get('model.EventDispatcher'));
    }, {
        tags: [ 'game.type' ]
    }
);
