dic.register('model.GameTerrain', function(dic) {
    return new model.GameTerrain(
    	dic.get('model.GameScene'),
        dic.get('model.GameHtmlContainer'),
        dic.get('model.GridService')
    );
}, {
    shared: true
});
