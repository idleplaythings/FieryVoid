dic.register('animation.ProjectilePathResolver', function(dic) {
    return new animation.ProjectilePathResolver(
        dic.get("model.PositionService")
    );
}, {shared: true});

dic.register('animation.WeaponFireAnimationService', function(dic) {
    return new animation.WeaponFireAnimationService(
        dic.get("animation.ShipWeaponFireAnimatorFactory")
    );
}, {shared: true});

dic.register('animation.ShipWeaponFireAnimatorFactory', function(dic) {
    return Factory.createFactoryFromTags('ShipWeaponFireAnimator');
}, {shared: true});

dic.register('animation.ShipWeaponFireAnimator', function(dic) {
    return new animation.ShipWeaponFireAnimator(
        dic.get("model.GameAnimationLoop"),
        dic.get("model.weapon.WeaponFireFactory"),
        dic.get("animation.WeaponFireAnimationFactory")
    );
}, {tags: ['ShipWeaponFireAnimator']});

dic.register('animation.WeaponFireAnimationFactory', function(dic) {
    return new animation.WeaponFireAnimationFactory(
        dic.get('animation.ProjectilePathResolver'),
        dic.get('model.EffectManager')
    );
}, {shared: true});


dic.register('model.ArcIndicatorService', function(dic) {
    return new model.ArcIndicatorService(
        dic.get("model.GameScene")
    );
});

dic.register('model.inputAction.RemoveFireOrderAtWeaponSelect', function(dic) {
    return new model.inputAction.RemoveFireOrderAtWeaponSelect(
        dic.get("model.EventDispatcher"),
        dic.get("model.weapon.WeaponService"),
        dic.get("model.GameState")
    );
});

dic.register('model.inputAction.DisplayFireOrdersOnActionButtons', function(dic) {
    return new model.inputAction.DisplayFireOrdersOnActionButtons(
        dic.get("model.EventDispatcher"),
        dic.get("model.ActionBar"),
        dic.get("model.SelectedShip"),
        dic.get("model.GameState")
    );
});

dic.register('model.inputAction.ShowCurrentFireOrders', function(dic) {
    return new model.inputAction.ShowCurrentFireOrders(
        dic.get("model.WeaponIndicatorService"),
        dic.get("model.SelectedShip"),
        dic.get("model.GameState"),
        dic.get("model.ShipService"),
        dic.get("model.weapon.WeaponFireFactory"),
        dic.get("model.EventDispatcher")
    );
});

dic.register('model.inputAction.ShowWeaponTargetingOnMouseOver', function(dic) {
    return new model.inputAction.ShowWeaponTargetingOnMouseOver(
        dic.get("model.WeaponIndicatorService"),
        dic.get("model.SelectedShip"),
        dic.get("model.GameState"),
        dic.get("model.weapon.WeaponService"),
        dic.get("model.ShipService")
    );
});

dic.register('model.inputAction.TargetShipOnClick', function(dic) {
    return new model.inputAction.TargetShipOnClick(
        dic.get("model.SelectedShip"),
        dic.get("model.weapon.WeaponService"),
        dic.get("model.ShipService"),
        dic.get("model.GameState"),
        dic.get("model.EventDispatcher"),
        dic.get("model.GameActionManager")
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

dic.register('model.inputAction.SelectWeapon', function(dic) {
    return new model.inputAction.SelectWeapon(
        dic.get("model.EventDispatcher"),
        dic.get("model.GameActionManager")
    );
});

dic.register('model.inputAction.SelectAndDeselectWeapons', function(dic) {
    return new model.inputAction.SelectAndDeselectWeapons(
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
