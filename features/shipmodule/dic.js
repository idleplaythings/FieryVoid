dic.register('model.ModuleImageStorage', function(dic) {
    return new model.ModuleImageStorage();
}, { shared: true });

dic.register('model.ModuleFactory', function(dic) {
    return new model.ModuleFactory();
}, { shared: true });

dic.register('model.ModuleLayoutRepository', function(dic) {
    return new model.ModuleLayoutRepository(
      dic.get('model.ModuleFactory')
    );
}, { shared: true });

