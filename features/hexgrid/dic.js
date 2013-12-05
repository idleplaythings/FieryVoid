dic.register('model.HexGrid', function(dic) {
    var hexGrid = new model.HexGrid(
        10,
        10,
        dic.get('model.HexGridRenderer'),
        dic.get('model.EventDispatcher')
    );

    hexGrid.init();

    return hexGrid;
});

dic.register('model.HexGridRenderer', function(dic) {
    return new model.HexGridRenderer(
        dic.get('model.HexLayoutTextureProvider')
    );
});

dic.register('model.HexLayoutTextureProvider', function(dic) {
    return new model.HexLayoutTextureProvider(
        new model.HexLayoutRenderer()
    );
});
