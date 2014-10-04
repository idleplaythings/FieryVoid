dic.register('model.armor.VeryLight', function(dic) {
  return new model.Armor(
    'Very ligth',
    2,
    'model.armor.VeryLight'
  );
}, {tags: ['armor']});

dic.register('model.armor.Light', function(dic) {
  return new model.Armor(
    'Ligth',
    4,
    'model.armor.Light'
  );
}, {tags: ['armor']});

dic.register('model.armor.LightMedium', function(dic) {
  return new model.Armor(
    'Light medium',
    5,
    'model.armor.LightMedium'
  );
}, {tags: ['armor']});

dic.register('model.armor.Medium', function(dic) {
  return new model.Armor(
    'medium',
    6,
    'model.armor.Medium'
  );
}, {tags: ['armor']});

dic.register('model.armor.Factory', function(dic){
  return Factory.createFactoryFromTags('armor');
})