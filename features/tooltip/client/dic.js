
dic.register('model.ModuleDetailView', function(dic) {
    return new model.ModuleDetailView(
    	dic.get('model.GameHtmlContainer'),
    	dic.get('model.EventDispatcher')
	)
}, {
    shared: true
});


dic.register('model.MovementTooltip', function(dic) {
    return new model.MovementTooltip(
      dic.get('model.GameHtmlContainer'),
      dic.get('model.EventDispatcher')
  )
}, {
    shared: true
});