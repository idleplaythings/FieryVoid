model.movement.ShipMovementAnimationService = function ShipMovementAnimationService(shipService, shipAnimationDetailFactory)
{
	this._shipService = shipService;
	this._shipAnimationDetailFactory = shipAnimationDetailFactory;

	this._shipAnimations = [];

	this._paths = this.resolverPathsForShips;
};

model.movement.ShipMovementAnimationService.prototype.resolverPathsForShips = function()
{
	this._shipAnimations = this._shipService.getShips().map(function(ship){
		return this._shipAnimationDetailFactory.create('model.movement.ShipAnimationDetails').resolve(ship);
	}, this);
};

model.movement.ShipMovementAnimationService.prototype.renderPathForAll = function()
{
	if (this._shipAnimations.length === 0)
		this.resolverPathsForShips();

	this._shipAnimations.forEach(function(animation){
		animation.renderPath();
	});
};
