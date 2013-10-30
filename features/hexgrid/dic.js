dic.register('model.HexGrid', function(dic) {
    var hexGrid = new model.HexGrid(
        dic.get('model.HexGridRenderer'),
        dic.get('model.EventDispatcher')
    );

    hexGrid.init();

    return hexGrid;
});

dic.register('model.HexLayoutTextureProvider', function(dic) {
    var canvas = $('<canvas></canvas>');

    return new model.HexLayoutTextureProvider(
        new model.HexLayoutRenderer(canvas)
    );
});

dic.register('model.HexGridRenderer', function(dic) {
    return new model.HexGridRenderer(
        dic.get('model.HexLayoutTextureProvider')
    );
});

