dic.register('model.GameActionManager', function(dic) {
    return new model.GameActionManager(
        dic.get('model.InputModeFactory'),
        dic.get('model.UiEventManager')
    );
});
