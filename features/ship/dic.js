dic.register('model.ShipStorage', function(dic) {
    return new model.ShipStorage(
        dic.get('model.TimelineFactory'),
        dic.get('model.ShipDesignStorage'),
        dic.get('model.ShipStatusFactory')
    );
}, { shared: true });

dic.register('model.ShipDesignStorage', function(dic) {
    return new model.ShipDesignStorage(
        dic.get('model.TimelineFactory')
    );
}, { shared: true });

