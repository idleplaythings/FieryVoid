dic.register('model.UIComponentViewService', function(dic) {
    return new model.UIComponentViewService(
        dic.get('model.EventDispatcher'),
        dic.get('model.ShipStatusView')
    )
});