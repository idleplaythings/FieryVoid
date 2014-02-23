
dic.register('model.ModuleDetailView', function(dic) {
    return new model.ModuleDetailView(
    	dic.get('model.GameHtmlContainer'),
    	dic.get('model.EventDispatcher')
	)
}, {
    shared: true
});