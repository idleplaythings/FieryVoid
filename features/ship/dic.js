dic.register('model.ShipStorage', function(dic) {
    return new model.ShipStorage(
        dic.get('model.TimelineFactory'),
        dic.get('model.ShipDesignStorage')
    );
}, { shared: true });

dic.register('model.ShipDesignStorage', function(dic) {
    return new model.ShipDesignStorage(
        dic.get('model.TimelineFactory'),
        dic.get('model.ModuleLayoutRepository'),
        dic.get('model.WeaponArcService')
    );
}, { shared: true });

dic.register('model.HullLayoutRepository', function(dic) {
    return new model.HullLayoutRepository();
}, { shared: true });

