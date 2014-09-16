model.weapon.WeaponService = function(weaponFireFactory){
  this._weaponFireFactory = weaponFireFactory;
}

model.weapon.WeaponService.prototype.isValidTarget = function(shooter, target, weapon, targetTile, turn){
  try{
    this._weaponFireFactory.getWeaponFire(shooter, target, weapon, targetTile, turn);
  }catch(error){
    console.log("Not a valid target", error.message);
    return false;
  }

  return true;
};

model.weapon.WeaponService.prototype.addFireOrder = function(shooter, target, weapon, targetTile, turn){
  var weaponFire = this._weaponFireFactory.getWeaponFire(shooter, target, weapon, targetTile, turn);
  var fireOrder = weaponFire.getFireOrder();
  var weaponStatus = shooter.getWeaponStatus();
  console.log(weaponStatus);
  weaponStatus.addFireOrder(fireOrder);
};