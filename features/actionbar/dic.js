dic.register('model.ActionBar', function(dic) {
    return new model.ActionBar(
        dic.get('model.EventDispatcher'),
        dic.get('model.GameHtmlContainer')
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