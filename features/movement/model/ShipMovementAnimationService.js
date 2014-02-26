model.movement.ShipMovementAnimationService = function ShipMovementAnimationService(shipAnimationDetailFactory)
{
	this._shipAnimationDetailFactory = shipAnimationDetailFactory;

	this._shipAnimations = [];

	this._paths = this.resolverPathsForShips;
};

model.movement.ShipMovementAnimationService.prototype.init = function(ships)
{
	this._shipAnimations = ships.map(function(ship){
		return this._shipAnimationDetailFactory.create('model.movement.ShipAnimationDetails').resolve(ship);
	}, this);
};

model.movement.ShipMovementAnimationService.prototype.renderPathForAll = function()
{
	if (this._shipAnimations.length === 0)
		return;

	this._shipAnimations.forEach(function(animation){
		animation.renderPath();
	});
};

model.movement.ShipMovementAnimationService.prototype.getShipScenePosition = function(ship, turn, time)
{
	var shipAnimation = this._getShipAnimation(ship);
	return shipAnimation.getShipPositionAndFacing(turn, time).position;
};

model.movement.ShipMovementAnimationService.prototype.getShipSceneFacing = function(ship, turn, time)
{
	var shipAnimation = this._getShipAnimation(ship);
	return shipAnimation.getShipPositionAndFacing(turn, time).facing;
};

model.movement.ShipMovementAnimationService.prototype._getShipAnimation = function(ship)
{
	if (this._shipAnimations.length === 0)
		throw new Error("There are no ships to animate! Have you intialized ShipMovementAnimationService?");

	var shipAnimation = this._shipAnimations.filter(function(animation){
		return animation.getShip() == ship;
	}).pop();

	if ( ! shipAnimation)
		throw new Error("Ship animation not found");

	return shipAnimation;
};
