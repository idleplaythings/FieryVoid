dic.register(
    'model.InputModeSelect',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            dic.get('model.GridService'),
            dic.get('model.ShipService'),
            dic.get('model.TimelineFactory'),
            dic.get('model.GameScene'),
            dic.get('model.GameHtmlContainer'),
            dic.get('model.UiEventManager')
        );  
    }, {
        tags: [ 'inputMode' ]
    }
);

dic.register('model.InputModeFactory', function(dic) {
    var factory = new Factory();

    var inputModes = dic.getTagged('inputMode');

    inputModes.forEach(function(modelName) {
        factory.add(modelName, function() {
            return dic.get(modelName);
        });
    });

    return factory;
});