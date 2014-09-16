dic.register(
    'model.InputModeSelect',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.ActivateTileOnMouseMove'),
                dic.get('model.inputAction.SelectMovementStepOnClick'),
                dic.get('model.inputAction.ShowMovementMenuOnRouteClick'),
                dic.get('model.inputAction.SelectShipOnClick'),
                dic.get('model.inputAction.SelectedShipMarker'),
                dic.get('model.inputAction.DisplayRoutes'),
                dic.get('model.inputAction.HighlightActiveRoute'),
                dic.get('model.inputAction.ShowShipStatusView'),
                dic.get('model.inputAction.LightBlueArrowCursor'),
                dic.get('model.inputAction.ShowModuleDetailView'),
                dic.get('model.inputAction.HideHullAtZoom'),
                dic.get('model.inputAction.ShowMomevemenTooltipOnRouteMouseOver'),
                dic.get('model.inputAction.TurnButtons'),
                dic.get('model.inputAction.ShowActionBarForSelectedShip'),
                dic.get('model.inputAction.ShowWeaponArcsOnWeaponMouseOver'),
                dic.get('model.inputAction.SelectWeaponMode')
            ],
            1
        );
    }, {
        tags: [ 'inputMode' ]
    }
);

dic.register(
    'model.InputModeReplay',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.Replay')
            ],
            1
        );
    }, {
        tags: [ 'inputMode' ]
    }
);

dic.register(
    'model.InputModeWeapon',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [

                dic.get('model.inputAction.ShowActionBarForSelectedShip'),
                dic.get('model.inputAction.SelectedShipMarker'),
                dic.get('model.inputAction.TargetCursor'),
                dic.get('model.inputAction.SelectAndDeselectWeapons'),
                dic.get('model.inputAction.HighlightSelectedWeapons'),
                dic.get('model.inputAction.ShowWeaponArcsOnWeaponMouseOver'),
                dic.get('model.inputAction.RemoveWeaponMode'),
                dic.get('model.inputAction.ShowWeaponTargetingOnMouseOver'),
                dic.get('model.inputAction.HideHullAtZoom'),
                dic.get('model.inputAction.ShowGridOnZoom'),
                dic.get('model.inputAction.TargetShipOnClick')
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

dic.register('model.inputAction.TurnButtons', function(dic) {
    return new model.inputAction.TurnButtons(
        dic.get('model.GameActionManager')
    );
});

dic.register('model.inputAction.Replay', function(dic) {
    return new model.inputAction.Replay(
        dic.get('model.GameState')
    );
});

dic.register('model.inputAction.ActivateTileOnMouseMove', function(dic) {
    return new model.inputAction.ActivateTileOnMouseMove(
        dic.get('model.GridService'),
        dic.get('model.ActiveTile')
    );
});

dic.register('model.inputAction.SelectShipOnClick', function(dic) {
    return new model.inputAction.SelectShipOnClick(
        dic.get('model.ShipService'),
        dic.get('model.SelectedShip')
    );
});

dic.register('model.inputAction.SelectMovementStepOnClick', function(dic) {
    return new model.inputAction.SelectMovementStepOnClick(
        dic.get('model.ShipService'),
        dic.get('model.SelectedShip'),
        dic.get('model.movement.ShipMovementAnimationService'),
        dic.get('model.EventDispatcher')
    );
});

dic.register('model.inputAction.ShowMomevemenTooltipOnRouteMouseOver', function(dic) {
    return new model.inputAction.ShowMomevemenTooltipOnRouteMouseOver(
        dic.get('model.ShipService'),
        dic.get('model.SelectedShip'),
        dic.get('model.movement.ShipMovementAnimationService'),
        dic.get('model.EventDispatcher'),
        dic.get('model.CoordinateConverterViewPort'),
        dic.get('model.MovementTooltip'),
        dic.get('model.GridService')
    );
});

dic.register('model.inputAction.ShowMovementMenuOnRouteClick', function(dic) {
    return new model.inputAction.ShowMovementMenuOnRouteClick(
        dic.get('model.ShipService'),
        dic.get('model.SelectedShip'),
        dic.get('model.movement.ShipMovementAnimationService'),
        dic.get('model.EventDispatcher'),
        dic.get('model.movement.MovementRadialMenu'),
        dic.get('model.GridService')
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
        dic.get('model.movement.ShipMovementAnimationService'),
        dic.get('model.GameState'),
        dic.get('model.EventDispatcher')
    );
});

dic.register('model.inputAction.HighlightActiveRoute', function(dic) {
    return new model.inputAction.HighlightActiveRoute(
        dic.get('model.EventDispatcher'),
        dic.get('model.SelectedShip'),
        dic.get('model.movement.ShipMovementAnimationService'),
        dic.get('model.GameState')
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

dic.register('model.inputAction.ShowGridOnZoom', function(dic) {
    return new model.inputAction.ShowGridOnZoom(
        dic.get('model.ShipService')
    );
});

dic.register('model.SelectedShip', function(dic) {
    return new model.SelectedShip(
        dic.get('model.EventDispatcher')
    );
}, {
    shared: true
});

dic.register('model.ActiveTile', function(dic) {
    return new model.ActiveTile(
        dic.get('model.EventDispatcher')
    );
}, {shared: true});

// HULL EDITOR

dic.register(
    'model.InputModeHullEditorHeight1',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.HullEditorClickHeight1')
            ],
            1
        );  
    }, {
        tags: [ 'inputMode' ]
    }
);

dic.register(
    'model.InputModeHullEditorHeight2',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.HullEditorClickHeight2')
            ],
            1
        );  
    }, {
        tags: [ 'inputMode' ]
    }
);

dic.register('model.inputAction.HullEditorClickHeight1', function(dic) {
    return new model.inputAction.HullEditorClick(
        dic.get('model.SelectedHullLayout'),
        1,
        dic.get('model.HullEditorService')
    );
});

dic.register('model.inputAction.HullEditorClickHeight2', function(dic) {
    return new model.inputAction.HullEditorClick(
        dic.get('model.SelectedHullLayout'),
        2,
        dic.get('model.HullEditorService')
    );
});

