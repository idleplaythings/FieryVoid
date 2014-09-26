dic.register('model.weapon.module.ParticleCannon', function(dic) {
    return new model.weapon.module.Base(
      'Particle cannon'
    );
}, {tags: ['weaponModule']});

dic.register('model.weapon.module.Factory', function(dic) {
    return new model.weapon.module.Factory(
      dic.getTagged('weaponModule'),
      dic.get('model.weapon.module.InstanceFactory')
    );
});

dic.register('model.weapon.module.InstanceFactory', function(dic) {
    return new Factory.createFactoryFromTags('weaponModule');
});