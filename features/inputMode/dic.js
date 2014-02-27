dic.register(
    'model.InputModeSelect',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.ShowShipStatusView'),
                dic.get('model.inputAction.LightBlueArrowCursor'),
                dic.get('model.inputAction.ShowModuleDetailView'),
                dic.get('model.inputAction.HideHullAtZoom')
            ],
            1
        );  
    }, {
        tags: [ 'inputMode' ]
    }
);

dic.register('model.InputModeFactory', function(dic) {
    return Factory.createFactoryFromTags('inputMode');
});

dic.register('model.inputAction.ShowShipStatusView', function(dic) {
    return new model.inputAction.ShowShipStatusView(
        dic.get('model.ShipService'),
        dic.get('model.Zooming'),
        dic.get('model.Scrolling'),
        dic.get('model.ShipStatusView'),
        dic.get('model.PositionService')
    );
});

dic.register('model.inputAction.LightBlueArrowCursor', function(dic) {
    return new model.inputAction.LightBlueArrowCursor(
        dic.get('model.GameHtmlContainer')
    );
});

dic.register('model.inputAction.ShowModuleDetailView', function(dic) {
    return new model.inputAction.ShowModuleDetailView(
        dic.get('model.ShipService'),
        dic.get('model.Zooming'),
        dic.get('model.ModuleDetailView'),
        dic.get('model.PositionService'),
        dic.get('model.CoordinateConverterViewPort')
    );
});

dic.register('model.inputAction.HideHullAtZoom', function(dic) {
    return new model.inputAction.HideHullAtZoom(
        dic.get('model.ShipService'),
        dic.get('model.Zooming')
    );
});