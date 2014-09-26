animation.WeaponFireAnimationService = function(shipWeaponFireAnimatorFactory){
  this._shipAnimators = [];
  this._shipWeaponFireAnimatorFactory = shipWeaponFireAnimatorFactory;
};

animation.WeaponFireAnimationService.prototype.init = function(ships){
  this._shipAnimators = ships.map(function(ship){
    return this._shipWeaponFireAnimatorFactory.create('animation.ShipWeaponFireAnimator').resolve(ship);
  }, this);
};

animation.WeaponFireAnimationService.prototype.onTurnChange = function(turn)
{
  turn = turn-1; //Load resolved weapon fire for last turn for replay
  this._shipAnimators.forEach(function(animator){
    animation.load(turn);
  });
};