dic.register('model.ArcIndicatorService', function(dic) {
    return new model.ArcIndicatorService(
        dic.get("model.GameScene")
    );
});

dic.register('model.inputAction.ShowWeaponArcsOnWeaponMouseOver', function(dic) {
    return new model.inputAction.ShowWeaponArcsOnWeaponMouseOver(
        dic.get("model.EventDispatcher"),
        dic.get("model.ArcIndicatorService"),
        dic.get("model.GameState"),
        dic.get("model.movement.ShipMovementAnimationService")
    );
});

dic.register('model.inputAction.SelectWeaponMode', function(dic) {
    return new model.inputAction.SelectWeaponMode(
        dic.get("model.EventDispatcher"),
        dic.get("model.GameActionManager")
    );
});

dic.register('model.inputAction.HighlightSelectedWeapons', function(dic) {
    return new model.inputAction.HighlightSelectedWeapons(
        dic.get("model.EventDispatcher"),
        dic.get("model.ActionBar")
    );
});
