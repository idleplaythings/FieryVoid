dic.register(
    'model.InputModeSelect',
    function(dic) {
        return new model.InputMode(
            dic.get('model.EventDispatcher'),
            [
                dic.get('model.inputAction.ShowShipStatusView'),
                dic.get('model.inputAction.LightBlueArrowCursor')
            ],
            1
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

dic.register('model.inputAction.ShowShipStatusView', function(dic) {
    return new model.inputAction.ShowShipStatusView(
        dic.get('model.ShipService'),
        dic.get('model.Zooming'),
        dic.get('model.Scrolling'),
        dic.get('model.ShipStatusView')
    );
});

dic.register('model.inputAction.LightBlueArrowCursor', function(dic) {
    return new model.inputAction.LightBlueArrowCursor(
        dic.get('model.GameHtmlContainer')
    );
});
