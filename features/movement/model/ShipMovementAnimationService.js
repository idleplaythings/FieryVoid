model.movement.ShipMovementAnimationService = function ShipMovementAnimationService(shipAnimationDetailFactory)
{
	this._shipAnimationDetailFactory = shipAnimationDetailFactory;

	this._shipAnimations = [];
};

model.movement.ShipMovementAnimationService.prototype.init = function(ships)
{
	this._shipAnimations = ships.map(function(ship){
		return this._shipAnimationDetailFactory.create('model.movement.ShipAnimationDetails').resolve(ship);
	}, this);
};

model.movement.ShipMovementAnimationService.prototype.load = function(turn)
{
	this._shipAnimations.forEach(function(animation){
		animation.load(turn);
	});
};

model.movement.ShipMovementAnimationService.prototype.findRouteSegmentOnPosition = function(ship, sceneposition){
	return this._getShipAnimation(ship).getRouteSegmentOnPosition(sceneposition);
};

model.movement.ShipMovementAnimationService.prototype.getRouteTurnOnPosition = function(ship, sceneposition){
	return this._getShipAnimation(ship).getRouteTurnOnPosition(sceneposition);
};

model.movement.ShipMovementAnimationService.prototype.highlightRouteSegment = function(ship, index){
	return this._getShipAnimation(ship).highlightRouteSegment(index);
};

model.movement.ShipMovementAnimationService.prototype.unhighlightRouteSegment = function(ship, index){
	return this._getShipAnimation(ship).unhighlightRouteSegment(index);
};

model.movement.ShipMovementAnimationService.prototype.showAllRoutes = function(turn)
{
	this._shipAnimations.forEach(function(animation){
		animation.showRoute(turn);
	});
};

model.movement.ShipMovementAnimationService.prototype.showRouteFor = function(ship, turn){
	var animation = this._getShipAnimation(ship);
	animation.resolve(ship);
	animation.showRoute(turn);
};

model.movement.ShipMovementAnimationService.prototype.hideAllRoutes = function(turn)
{
	this._shipAnimations.forEach(function(animation){
		animation.hideRoute(turn);
	});
};

model.movement.ShipMovementAnimationService.prototype.highlightRouteFor = function(ship, turn)
{
	var animation = this._getShipAnimation(ship);
	animation.highlight(turn);
};

model.movement.ShipMovementAnimationService.prototype.clearRouteHighlights = function()
{
	this._shipAnimations.forEach(function(animation){
		animation.clearHighlight();
	});
};

model.movement.ShipMovementAnimationService.prototype.getShipAnimations = function()
{
	return this._shipAnimations;
};

model.movement.ShipMovementAnimationService.prototype.getShipScenePosition = function(ship, turn, time)
{
	if ( ! time)
		time = 0;

	var shipAnimation = this._getShipAnimation(ship);
	return shipAnimation.getShipPositionAndFacing(turn, time).position;
};

model.movement.ShipMovementAnimationService.prototype.getShipSceneFacing = function(ship, turn, time)
{
	if ( ! time)
		time = 0;

	var shipAnimation = this._getShipAnimation(ship);
	return shipAnimation.getShipPositionAndFacing(turn, time).rotation;
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
