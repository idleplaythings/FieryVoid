
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

dic.register('model.IconFactory', function(dic) {
    return Factory.createFactoryFromTags('icon');
});
