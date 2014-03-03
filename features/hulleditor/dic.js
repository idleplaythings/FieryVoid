dic.register('model.HullEditor', function(dic) {
    return new model.HullEditor(
		dic.get('model.GameHtmlContainer'),
		dic.get('model.UiEventManager'),
        dic.get('model.EventDispatcher'),
        dic.get('model.IconFactory'),
        dic.get('model.GameScene'),
        dic.get('model.ReactiveHullLayout'),
        dic.get('model.GameAnimationLoop'),
        dic.get('model.InputModeFactory'),
        dic.get('model.SelectedHullLayout')
    )
});

dic.register('model.ReactiveHullLayout', function(dic) {
    return new model.ReactiveComponent(
        dic.get('model.EventDispatcher'),
        HullLayouts,
        "hulleditor_selected_hullLayout",
        'hullLayoutChanged'
    )
});

dic.register('model.SelectedHullLayout', function(dic) {
    return new ObjectContainer();
}, { shared: true} );

dic.register('model.HullEditorService', function(dic) {
    return new model.HullEditorService(
    )
}, { shared: true} );