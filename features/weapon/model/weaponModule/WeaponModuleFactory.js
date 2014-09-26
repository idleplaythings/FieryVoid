model.weapon.module.Factory = function WeaponModuleFactory(weaponClassNames, instanceFactory)
{
  this._weaponClassNames = weaponClassNames;
  this._instanceFactory = instanceFactory;
};

model.weapon.module.Factory.prototype.getWeapon = function(args, module)
{
  var weaponClass = args.weaponClass;
  var weapon = this._instanceFactory.create(weaponClass);
  weapon.init(module);
  return weapon;
};

model.weapon.module.Factory.prototype.getPossibleWeapons = function(){
  return this._weaponClassNames;
};