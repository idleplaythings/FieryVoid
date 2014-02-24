dic.register('model.ShipStatusView', function(dic) {
    return new model.ShipStatusView(
    	dic.get('model.GameHtmlContainer'),
    	dic.get('model.CoordinateConverterViewPort'),
    	dic.get('model.EventDispatcher')
	)
});
