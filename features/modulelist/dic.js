dic.register('model.ReactiveModuleList', function(dic) {
    return new model.ReactiveModuleList(dic.get('model.EventDispatcher'))
});