dic.register('model.PositionService', function(dic) {
    return new model.PositionService(
        dic.get('model.GridPositionComparison'),
        dic.get('model.GridService'),
        dic.get('model.GameState')
    );
}, {
    shared: true
});
