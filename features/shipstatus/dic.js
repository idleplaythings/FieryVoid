
dic.register('model.ShipStatusFactory', function(dic) {
    return Factory.createFactoryFromTags('shipStatus');
});

dic.register('model.ShipStatus', function(dic) {
    return new model.ShipStatus(
        dic.get('model.ShipStatusFactory')
    );
}, {
        tags: [ 'shipStatus' ]
});