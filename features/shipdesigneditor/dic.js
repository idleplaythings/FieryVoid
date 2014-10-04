
dic.register('model.ShipDesignEditor', function(dic) {
    return new model.ShipDesignEditor(
        dic.get('model.EventDispatcher'),
        dic.get('model.GameScene'),
        dic.get('model.GameHtmlContainer'),
        dic.get('model.ShipApperanceMenu'),
        dic.get('model.ShipDesignStorage'),
        dic.get('model.UiEventManager'),
        dic.get('model.ReactiveModuleList'),
        dic.get('model.GameAnimationLoop'),
        dic.get('model.IconFactory'),
        dic.get('model.InputModeFactory'),
        dic.get('model.EditorShip'),
        dic.get('model.SelectedModuleLayoutForPlacing')
    )
});

dic.register('model.ShipApperanceMenu', function(dic) {
    return new model.ShipApperanceMenu(
        dic.get('model.ShipDesignEditorService')
    )
});

dic.register('model.ShipDesignEditorService', function(dic) {
    return new model.ShipDesignEditorService()
}, { shared: true});

dic.register('model.EditorShip', function(dic) {
    return new model.EditorShip()
}, { shared: true});

dic.register('model.SelectedModuleLayoutForPlacing', function(dic) {
  return new ObjectContainer();
}, { shared: true} );

dic.register('model.SelectedArmorForPlacing', function(dic) {
  return new ObjectContainer();
}, { shared: true} );


dic.register(
    'model.InputModeShipEditorDefault',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.AllowShipHullVisibilityTogleInEditor'),
                dic.get('model.inputAction.ShowShipStatusViewEditor'),
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
                dic.get('model.inputAction.EnforceShipHullHiddenInEditor'),
                dic.get('model.inputAction.ShowSelectedModuleIconInEditor'),
                dic.get('model.inputAction.ShowGridOnShip'),
                dic.get('model.inputAction.PlaceModuleOnClick')
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
                dic.get('model.inputAction.AllowShipHullVisibilityTogleInEditor'),
                dic.get('model.inputAction.RemoveModuleOnClick'),
                dic.get('model.inputAction.RedXCursor')
            ],
            1
        );  
    }, {
        tags: [ 'inputMode' ]
    }
);

dic.register(
    'model.InputModeShipPlaceArmor',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.EnforceShipHullHiddenInEditor'),
                dic.get('model.inputAction.ShowArmorMenu'),
                dic.get('model.inputAction.ShowGridOnShip'),
                //dic.get('model.inputAction.ShowArmorMenu'),
                //dic.get('model.inputAction.ShowGridOnShip'),
                dic.get('model.inputAction.PlaceArmorOnClick')
            ],
            1
        );  
    }, {
        tags: [ 'inputMode' ]
    }
);
dic.register('model.inputAction.ShowArmorMenu', function(dic) {
    return new model.inputAction.ShowArmorMenu();
});

dic.register('model.inputAction.ShowShipStatusViewEditor', function(dic) {
    return new model.inputAction.ShowShipStatusViewEditor(
        dic.get('model.EditorShip'),
        dic.get('model.Zooming'),
        dic.get('model.Scrolling'),
        dic.get('model.ShipStatusView')
    );
});

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
});

dic.register('model.inputAction.ShowGridOnShip', function(dic) {
    return new model.inputAction.ShowGridOnShip(
        dic.get('model.EditorShip')
    );
});

dic.register('model.inputAction.PlaceArmorOnClick', function(dic) {
    return new model.inputAction.PlaceArmorOnClick(
        dic.get('model.SelectedArmorForPlacing'),
        dic.get('model.EditorShip'),
        dic.get('model.ShipDesignEditorService')
    );
});

dic.register('model.inputAction.PlaceModuleOnClick', function(dic) {
    return new model.inputAction.PlaceModuleOnClick(
        dic.get('model.SelectedModuleLayoutForPlacing'),
        dic.get('model.EditorShip'),
        dic.get('model.ShipDesignEditorService')
    );
});

dic.register('model.inputAction.RemoveModuleOnClick', function(dic) {
    return new model.inputAction.RemoveModuleOnClick(
        dic.get('model.EditorShip'),
        dic.get('model.ShipDesignEditorService')
    );
});


