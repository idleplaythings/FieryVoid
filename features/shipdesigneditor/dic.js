
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
        dic.get('model.EditorShip'),
        dic.get('model.SelectedModuleLayoutForPlacing'),
        dic.get('model.inputAction.ShowSelectedModuleIconInEditor')
    )
});

dic.register('model.ShipApperanceMenu', function(dic) {
    return new model.ShipApperanceMenu()
});

dic.register('model.EditorShip', function(dic) {
    return new model.EditorShip()
}, { shared: true});

dic.register('model.SelectedModuleLayoutForPlacing', function(dic) {
  return new ObjectContainer();
}, { shared: true} );


dic.register(
    'model.InputModeShipEditorDefault',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.AllowShipHullVisibilityTogleInEditor'),
                dic.get('model.inputAction.ShowShipStatusView'),
                dic.get('model.inputAction.LightBlueArrowCursor'),
                dic.get('model.inputAction.ShowModuleDetailViewEditor')
            ],
            1
        );  
    }, {
        tags: [ 'inputMode' ]
    }
);

dic.register(
    'model.InputModeShipEditorPlaceModule',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.ShowSelectedModuleIconInEditor')
            ],
            1
        );  
    }, {
        tags: [ 'inputMode' ]
    }
);

dic.register(
    'model.InputModeShipEditorRemoveModule',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.ShowShipStatusView'),
                dic.get('model.inputAction.LightBlueArrowCursor'),
                dic.get('model.inputAction.ShowModuleDetailViewEditor')
            ],
            1
        );  
    }, {
        tags: [ 'inputMode' ]
    }
);

dic.register('model.inputAction.ShowModuleDetailViewEditor', function(dic) {
    return new model.inputAction.ShowModuleDetailViewEditor(
        dic.get('model.EditorShip'),
        dic.get('model.Zooming'),
        dic.get('model.ModuleDetailView'),
        dic.get('model.CoordinateConverterViewPort')
    );
});

dic.register('model.inputAction.AllowShipHullVisibilityTogleInEditor', function(dic) {
    return new model.inputAction.EditorShipHullVisibility(
        dic.get('model.EventDispatcher'),
        dic.get('model.EditorShip'),
        false,
        false
    );
});

dic.register('model.inputAction.EnforceShipHullHiddenInEditor', function(dic) {
    return new model.inputAction.EditorShipHullVisibility(
        dic.get('model.EventDispatcher'),
        dic.get('model.EditorShip'),
        true,
        false
    );
});

dic.register('model.inputAction.EnforceShipHullVisibleInEditor', function(dic) {
    return new model.inputAction.EditorShipHullVisibility(
        dic.get('model.EventDispatcher'),
        dic.get('model.EditorShip'),
        false,
        true
    );
});

dic.register('model.inputAction.ShowSelectedModuleIconInEditor', function(dic) {
    return new model.inputAction.ShowSelectedModuleIconInEditor(
        dic.get('model.EventDispatcher'),
        dic.get('model.ModuleIconPlacing'),
        dic.get('model.SelectedModuleLayoutForPlacing'),
        dic.get('model.EditorShip')
    );
}, {shared: true});


