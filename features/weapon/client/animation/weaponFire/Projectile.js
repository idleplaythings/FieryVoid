animation.weaponFire.Projectile = function(projectilePathResolver, effectManager){
  this._projectilePathResolver = projectilePathResolver;
  this._effectManager = effectManager;
  this._weaponFire = null;

  this._effect = null;

  this._step = 0.05;
};

animation.weaponFire.Projectile.prototype.init = function(weaponFire){

  if (this._weaponFire)
    throw new Error("animation.weaponFire.Projectile is not supposed to be reused");

  this._weaponFire = weaponFire;
  //for(var i = 0; i< 10; i++){
  createEffect.call(this);
  //}
  
};

var createEffect = function(){
  var result = randomizeAnimation.call(this);

  var angle = result.angle;
  var firingTime = result.firingTime;
  var hitTime = result.hitTime;
  var targetPosition = result.targetPosition;
  var weaponPosition = result.weaponPosition;
  var projectileSpeed = result.projectileSpeed;

  targetPosition.x += Math.random()*100-50;
  targetPosition.y += Math.random()*100-50;

  this._effect = new effect.particle.Bolt({
    startTime: firingTime,
    endTime: hitTime - 0.01,
    start: weaponPosition,
    end: targetPosition,
    velocity: projectileSpeed,
    turn: this._weaponFire.getTurn()
  });

  this._effectManager.register(this._effect);

  explosion = new effect.particle.Explosion(
    targetPosition, 
    hitTime,
    this._weaponFire.getTurn(),
    {
      size: Math.random()*64+50,
      type: 'glow',
      speed: 1
    }
  );

  this._effectManager.register(explosion);
};

var randomizeAnimation = function(){
  var hitTime = Math.random()*0.6;
  if (hitTime < 0.3){
    hitTime += 0.3;
  }

  while (hitTime < 1){

    var result = this._projectilePathResolver.resolveProjectilePath(hitTime, this._weaponFire);

    if (result !== false){
      return result;
    }
    hitTime += this._step; 
  }

  throw new Error("Unable to resolve projectile path");
}