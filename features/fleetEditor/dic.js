dic.register('FleetController', function(dic) {
    return new controller.FleetController();
});

dic.register('model.FleetStorage', function(dic) {
    return new model.FleetStorage(
		dic.get('model.ShipStorage'),
		dic.get('model.TimelineFactory')
    );
});
