dic.register('model.GridService', function(dic) {
    return new model.GridService(
        dic.get('model.HexGrid'),
        dic.get('model.HexGridRenderer'),
        dic.get('model.HexHighlighter.highlight'),
        dic.get('model.HexHighlighter.select'),
        dic.get('model.EventDispatcher'),
        dic.get('model.HexGridCoordinateResolver')
    );
});

dic.register('model.HexGrid', function(dic) {
    return new model.HexGrid();
});

dic.register('model.HexGridRenderer', function(dic) {
    return new model.HexGridRenderer(
        dic.get('model.HexLayoutTextureProvider')
    );
});

dic.register('model.HexHighlighter.select', function(dic) {
    return new model.HexHighlighter(
        dic.get('model.HexRenderer.select')
    );
});

dic.register('model.HexHighlighter.highlight', function(dic) {
    return new model.HexHighlighter(
        dic.get('model.HexRenderer.highlight')
    );
});

dic.register('model.HexGridCoordinateResolver', function(dic) {
    return model.HexGridCoordinateResolver;
});

dic.register('model.HexLayoutTextureProvider', function(dic) {
    return new model.HexLayoutTextureProvider(
        dic.get('model.HexLayoutRenderer')
    );
});

dic.register('model.HexLayoutRenderer', function(dic) {
    return new model.HexLayoutRenderer(
        dic.get('model.HexRenderer.grid')
    );
});

dic.register('model.HexRenderer.grid', function(dic) {
    return new model.HexRenderer({ lineWidth: 8 });
});

dic.register('model.HexRenderer.select', function(dic) {
    return new model.HexRenderer({ strokeStyle: '#f00', fillStyle: '#933', lineWidth: 10 });
});

dic.register('model.HexRenderer.highlight', function(dic) {
    return new model.HexRenderer({ strokeStyle: '#0f0', lineWidth: 10 });
});