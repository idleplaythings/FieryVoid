
dic.register('model.ShipStatusSymbolService', function(dic) {
    return new model.ShipStatusSymbolService(
        dic.get('model.power.PowerService')
    )
}, {
    shared: true
});

dic.register('model.ShipStatusView', function(dic) {
    return new model.ShipStatusView(
    	dic.get('model.GameHtmlContainer'),
    	dic.get('model.CoordinateConverterViewPort'),
    	dic.get('model.EventDispatcher'),
        dic.get('model.ShipStatusSymbolService')
	)
}, {
    shared: true
});
