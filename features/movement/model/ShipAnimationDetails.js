model.movement.ShipAnimationDetails = function ShipAnimationDetails(
	pathResolver,
	pathRenderer,
	movementVisualizer,
	shipAnimator,
	animationLoop
)
{
	this._ship = null;

	this._pathResolver = pathResolver;
	this._shipAnimator = shipAnimator;
	this._pathRenderer = pathRenderer;
	this._movementVisualizer = movementVisualizer;

	this._animationLoop = animationLoop;
    this._animationLoop.register(this);

	this._paths = [];
}

model.movement.ShipAnimationDetails.prototype.getShip = function()
{
	return this._ship;
};


model.movement.ShipAnimationDetails.prototype.resolve = function(ship)
{
	this._ship = ship;
	var routes = ship.getMovement().getRoutes();
	this._paths = routes.map(function(route){
		return this._pathResolver.resolvePathForRoute(route);
	}, this);

	return this;
};

model.movement.ShipAnimationDetails.prototype.animate = function(turn, time)
{
	var path = this._paths[turn];

	if ( ! path)
		return;

	this._shipAnimator.positionShipAlongPath(this._ship, path, time);
};

model.movement.ShipAnimationDetails.prototype.showRoute = function(turn)
{
	if ( ! turn)
		turn = 0;

	this._pathRenderer.renderPath(this._paths[turn]);
};

model.movement.ShipAnimationDetails.prototype.highlight = function(turn)
{
	if ( ! turn)
		turn = 0;

	this._pathRenderer.highlight();
	this._movementVisualizer.renderPath(this._paths[turn]);
}

model.movement.ShipAnimationDetails.prototype.clearHighlight = function()
{
	this._pathRenderer.clearHighlight();
	this._movementVisualizer.clear();
}

model.movement.ShipAnimationDetails.prototype.getShipPositionAndFacing = function(turn, time)
{
	var path = this._paths[turn];

	if ( ! path)
		return null;

	return this._shipAnimator.getShipPositionAndFacing(this._ship, path, time);
};