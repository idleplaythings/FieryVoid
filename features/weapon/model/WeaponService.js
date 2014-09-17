model.weapon.WeaponService = function(weaponFireFactory, dispatcher){
  this._weaponFireFactory = weaponFireFactory;
  this._dispatcher = dispatcher;
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
  weapon.addFireOrder(fireOrder);
  this._dispatcher.dispatch({name: 'fireOrdersChanged', weapon: weapon, fireOrder: fireOrder});
};

model.weapon.WeaponService.prototype.removeFireOrder = function(weapon, turn){
  if ( ! weapon.hasFireOrder(turn)){
    return;
  }
  
  weapon.removeFireOrder(turn);
  this._dispatcher.dispatch({name: 'fireOrdersChanged', weapon: weapon, fireOrder: null});
};