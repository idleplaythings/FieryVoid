
dic.register('model.TimelineStorage', function(dic) {
    return new model.TimelineStorage();
}, { shared: true });

dic.register('model.TimelineFactory', function(dic) {
    return new model.TimelineFactory(dic.get('model.TimelineStorage'));
}, { shared: true });
