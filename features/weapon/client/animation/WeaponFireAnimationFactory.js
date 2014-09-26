animation.WeaponFireAnimationFactory = function(projectilePathResolver, effectManager){
  this._projectilePathResolver = projectilePathResolver;
  this._effectManager = effectManager;
}

animation.WeaponFireAnimationFactory.prototype.getWeaponFireAnimation = function(weaponFire){
  //TODO: instantiate correct class depending on weapon
  var weaponAnimation = new animation.weaponFire.Projectile(
    this._projectilePathResolver, this._effectManager);
  weaponAnimation.init(weaponFire);
  return weaponAnimation;
}