dic.register('model.WeaponFactory', function(dic) {
    return new model.WeaponFactory();
}, { shared: true });

dic.register('model.ArcIndicatorService', function(dic) {
    return new model.ArcIndicatorService(
    	dic.get('model.GameScene')
	);
});

dic.register('model.WeaponArcService', function(dic) {
    return new model.WeaponArcService();
}, { shared: true });

dic.register('model.WeaponIndicatorService', function(dic) {
    return new model.WeaponIndicatorService(
    	dic.get('model.GameScene'),
    	dic.get('model.PositionService')
	);
});

dic.register('model.weapon.WeaponService', function(dic) {
    return new model.weapon.WeaponService(
      dic.get('model.weapon.WeaponFireFactory')
  );
});

dic.register('model.weapon.WeaponFireFactory', function(dic) {
    return new model.weapon.WeaponFireFactory(
      dic.get('model.HitLocationService'),
      dic.get('model.ShipService')
  );
});

