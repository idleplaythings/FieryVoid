model.WeaponFactory = function WeaponFactory()
{
	
};

model.WeaponFactory.prototype.getWeapon = function(args, module)
{
	var weaponArgs = {};
	weaponArgs.rangeStrategy = new model[args.rangeStrategy](args);
	weaponArgs.targetStrategy = new model[args.targetStrategy](args);
	weaponArgs.arcStrategy  = new model.WeaponArcStrategy(args);
	weaponArgs.scatterStrategy = new model.WeaponScatterStrategy(args);
	
	var valid = Object.keys(weaponArgs).every(function(key){
		return weaponArgs[key].isValid();
	});
	
	if ( ! valid)
		throw Error('Invalid weapon: ' + args);
		
	return new model.Weapon(weaponArgs, module); 
};
