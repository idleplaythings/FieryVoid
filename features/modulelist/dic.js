dic.register('model.ReactiveModuleList', function(dic) {
    return new model.ReactiveModuleList(
      dic.get('model.EventDispatcher'),
      {published: true},
      dic.get('model.ModuleLayoutRepository')
    );
});

dic.register('moduleEditor.ReactiveModuleList', function(dic) {
    return new model.ReactiveModuleList(
      dic.get('model.EventDispatcher'),
      {},
      dic.get('model.ModuleLayoutRepository')
    );
});