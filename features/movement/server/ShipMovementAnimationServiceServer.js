model.movement.ShipMovementAnimationServiceServer = function ShipMovementAnimationServiceServer(shipAnimationDetailFactory)
{
  this._shipAnimationDetailFactory = shipAnimationDetailFactory;
  this._shipAnimations = [];
};

model.movement.ShipMovementAnimationServiceServer.prototype.init = function(ships)
{
  this._shipAnimations = ships.map(function(ship){
    return this._shipAnimationDetailFactory.create('model.movement.ShipAnimationDetails').resolve(ship);
  }, this);
};

model.movement.ShipMovementAnimationServiceServer.prototype.getShipScenePosition = function(ship, turn, time)
{
  if ( ! time)
    time = 0;

  var shipAnimation = this._getShipAnimation(ship);
  return shipAnimation.getShipPositionAndFacing(turn, time).position;
};

model.movement.ShipMovementAnimationServiceServer.prototype.getShipSceneFacing = function(ship, turn, time)
{
  if ( ! time)
    time = 0;

  var shipAnimation = this._getShipAnimation(ship);
  return shipAnimation.getShipPositionAndFacing(turn, time).rotation;
};

model.movement.ShipMovementAnimationServiceServer.prototype._getShipAnimation = function(ship)
{
  if (this._shipAnimations.length === 0)
    throw new Error("There are no ships to animate! Have you intialized ShipMovementAnimationServiceServer?");

  var shipAnimation = this._shipAnimations.filter(function(animation){
    return animation.getShip() == ship;
  }).pop();

  if ( ! shipAnimation)
    throw new Error("Ship animation not found");

  return shipAnimation;
};
