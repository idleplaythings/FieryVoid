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
    	dic.get('model.GameScene')
	);
});

