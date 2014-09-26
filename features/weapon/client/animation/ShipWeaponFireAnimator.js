animation.ShipWeaponFireAnimator = function(
  animationLoop,
  weaponFireFactory,
  weaponFireAnimationFactory
){
  this._ship = null;
  this._animationLoop = animationLoop;

  //if (this._animationLoop)
  //  this._animationLoop.register(this);

  this._weaponFireFactory = weaponFireFactory;
  this._weaponFireAnimationFactory = weaponFireAnimationFactory;

  this._animations = [];
}

animation.ShipWeaponFireAnimator.prototype.resolve = function(ship){
  this._ship = ship;
  var fireOrders = ship.getWeaponStatus().getFireOrders();
  resolveFireOrders.call(this, fireOrders);
};

animation.ShipWeaponFireAnimator.prototype.load = function(turn){
  var fireOrders = ship.getWeaponStatus().getFireOrdersForTurn(turn);
  resolveFireOrders.call(this, fireOrders);
};

var resolveFireOrders = function(fireOrders){
  fireOrders.map(function(fireOrder){
    return this._weaponFireFactory.getWeaponFireFromFireOrder(fireOrder);
  }.bind(this)).forEach(function(weaponFire){
    resolveWeaponFire.call(this, weaponFire);
  }, this);
};

var resolveWeaponFire = function(weaponFire){
  var animation = this._weaponFireAnimationFactory.getWeaponFireAnimation(weaponFire);
  //TODO: safeguard that same animation is not resolved twice
  this._animations.push(animation);
}