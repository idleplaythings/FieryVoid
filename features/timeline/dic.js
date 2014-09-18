
dic.register('model.TimelineStorage', function(dic) {
    return new model.TimelineStorage();
}, { shared: true });

dic.register('model.TimelineFactory', function(dic) {
    return new model.TimelineFactory(dic.get('model.TimelineStorage'));
}, { shared: true });

dic.register('TimelineController', function(dic) {
    return new controller.TimelineController(
      dic.get('model.GameStorage'),
      dic.get('model.TimelineFactory')
    );
});

