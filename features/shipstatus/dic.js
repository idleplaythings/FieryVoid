
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

dic.register('model.ShipStatusView', function(dic) {
    return new model.ShipStatusView(
    	dic.get('model.GameHtmlContainer'),
    	dic.get('model.CoordinateConverterViewPort'),
    	dic.get('model.EventDispatcher')
	)
});
