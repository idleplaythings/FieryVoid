model.weapon.WeaponFireFactory = function(hitLocationService, shipService){
  this._hitLocationService = hitLocationService;
  this._shipService = shipService;
};

model.weapon.WeaponFireFactory.prototype.getWeaponFireFromFireOrder = function(fireOrder){
  console.log(fireOrder);
  var shooter = this._shipService.getShipById(fireOrder.getShooterId());
  var target = this._shipService.getShipById(fireOrder.getTargetId());
  var weapon = shooter.getModuleById(fireOrder.getWeaponId());

  return new model.weapon.WeaponFire(
    shooter, target, weapon, fireOrder.getTargetTile(), fireOrder.getTurn(), this._hitLocationService);
};

model.weapon.WeaponFireFactory.prototype.getWeaponFire = function(shooter, target, weapon, targetTile, turn){
  return new model.weapon.WeaponFire(
    shooter, target, weapon, targetTile, turn, this._hitLocationService);
};