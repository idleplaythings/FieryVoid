dic.register(
    'model.InputModeSelect',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.SelectShipOnClick'),
                dic.get('model.inputAction.SelectedShipMarker'),
                dic.get('model.inputAction.DisplayRoutes'),
                dic.get('model.inputAction.HighlightActiveRoute'),
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

dic.register('model.inputAction.SelectShipOnClick', function(dic) {
    return new model.inputAction.SelectShipOnClick(
        dic.get('model.ShipService'),
        dic.get('model.SelectedShip')
    );
});

dic.register('model.inputAction.SelectedShipMarker', function(dic) {
    return new model.inputAction.SelectedShipMarker(
        dic.get('model.EventDispatcher'),
        dic.get('model.SelectedShip')
    );
});

dic.register('model.inputAction.DisplayRoutes', function(dic) {
    return new model.inputAction.DisplayRoutes(
        dic.get('model.movement.ShipMovementAnimationService')
    );
});

dic.register('model.inputAction.HighlightActiveRoute', function(dic) {
    return new model.inputAction.HighlightActiveRoute(
        dic.get('model.EventDispatcher'),
        dic.get('model.SelectedShip'),
        dic.get('model.movement.ShipMovementAnimationService')
    );
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


dic.register('model.SelectedShip', function(dic) {
    return new model.SelectedShip(
        dic.get('model.EventDispatcher')
    );
}, {
    shared: true
});
