dic.register('model.ActionBar', function(dic) {
    return new model.ActionBar(
        dic.get('model.EventDispatcher'),
        dic.get('model.GameHtmlContainer'),
        dic.get('model.ew.EWService')
    );
}, {shared:true});

dic.register('model.inputAction.ShowActionBarForSelectedShip', function(dic) {
    return new model.inputAction.ShowActionBarForSelectedShip(
        dic.get('model.EventDispatcher'),
        dic.get('model.SelectedShip'),
        dic.get('model.GameState'),
        dic.get('model.ActionBar')
    );
});

dic.register('model.inputAction.SelectMovementActionBar', function(dic) {
    return new model.inputAction.SelectActionBar(
        '#actionBarMovement'
    );
});

dic.register('model.inputAction.SelectWeaponActionBar', function(dic) {
    return new model.inputAction.SelectActionBar(
        '#actionBarWeapons'
    );
});

dic.register('model.inputAction.SelectEWActionBar', function(dic) {
    return new model.inputAction.SelectActionBar(
        '#actionBarEW'
    );
});