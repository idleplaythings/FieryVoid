dic.register('model.HitLocationService', function(dic) {
    return new model.HitLocationService(
        dic.get('model.PositionService')
    );
});
