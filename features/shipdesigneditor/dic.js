dic.register('model.ShipDesignEditor', function(dic) {
    return new model.ShipDesignEditor(
        dic.get('model.EventDispatcher'),
        dic.get('model.GameScene'),
        dic.get('model.GameHtmlContainer'),
        dic.get('model.CoordinateConverterViewPort'),
        dic.get('model.ShipStatusView'),
        dic.get('model.ModuleDetailView'),
        dic.get('model.ShipApperanceMenu'),
        dic.get('model.ShipDesignStorage'),
        dic.get('model.UiEventManager'),
        dic.get('model.ReactiveModuleList'),
        dic.get('model.ArcIndicatorService'),
        dic.get('model.GameAnimationLoop'),
        dic.get('model.IconFactory'),
        dic.get('model.InputModeFactory'),
        dic.get('model.EditorShip')
    )
});

dic.register('model.ShipApperanceMenu', function(dic) {
    return new model.ShipApperanceMenu()
});

dic.register('model.EditorShip', function(dic) {
    return new model.EditorShip()
}, { shared: true});


