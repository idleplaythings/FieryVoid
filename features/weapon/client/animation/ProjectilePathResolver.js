animation.ProjectilePathResolver = function ProjectilePathResolver(positionService){
  this._positionService = positionService;
}

animation.ProjectilePathResolver.prototype.resolveProjectilePath = function(time, weaponFire){

  var weaponPosition = getWeaponPosition.call(this, weaponFire, time);
  var targetPosition = getTargetPosition.call(this, weaponFire, time);
  var projectileSpeed = getProjectileSpeed.call(this, weaponFire);

  console.log(weaponPosition, targetPosition);
  var distance = MathLib.distance(weaponPosition, targetPosition);
  var angle = MathLib.getAzimuthFromTarget(weaponPosition, targetPosition);

  if (distance > projectileSpeed * time){
    console.log("projectile is too slow to travel", distance, "in", time, "at speed", projectileSpeed);
    return false;
  }

  var firingTime = time - (distance / projectileSpeed);

  weaponPosition = getWeaponPosition.call(this, weaponFire, firingTime);
  distance = MathLib.distance(weaponPosition, targetPosition);
  projectileSpeed = distance / (time - firingTime);

  return {
    angle: angle,
    firingTime: firingTime,
    hitTime: time,
    weaponPosition: weaponPosition,
    targetPosition: targetPosition,
    projectileSpeed: projectileSpeed
  };
}

var getWeaponPosition = function(weaponFire, time){
  return this._positionService
    .getComponentPositionService(weaponFire.getShooter(), weaponFire.getTurn(), time * 100)
    .getModuleCenterPositionInScene(weaponFire.getWeapon())
};

var getTargetPosition = function(weaponFire, time){
  return this._positionService
    .getComponentPositionService(weaponFire.getTarget(), weaponFire.getTurn(), time * 100)
    .getTilePositionInScene(weaponFire.getTargetTile())
};

var getProjectileSpeed = function(weaponFire){
  //TODO: ask this from weapon;
  return 20000;
}