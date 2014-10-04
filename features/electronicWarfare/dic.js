dic.register('model.ew.EWService', function(dic) {
  return new model.ew.EWService(
    dic.get('model.ew.ShipEWUsageFactory')
  );
}, {shared:true});

dic.register('model.ew.ShipEWUsageFactory', function(dic) {
  return new model.ew.ShipEWUsageFactory(
    dic.get('model.ShipService')
  );
}, {shared:true});