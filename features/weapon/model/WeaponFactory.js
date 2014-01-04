model.WeaponFactory = function WeaponFactory()
{
	
};

model.WeaponFactory.prototype.getWeapon = function(args)
{
	var weaponArgs = {};
	weaponArgs.rangeStrategy = new model[args.rangeStrategy](args);
	weaponArgs.targetStrategy = new model[args.targetStrategy](args);
	
	var valid = Object.keys(weaponArgs).every(function(key){
		return weaponArgs[key].isValid();
	});
	
	if ( ! valid)
		throw Error('Invalid weapon: ' + args);
		
	return new model.Weapon(weaponArgs); 
};
