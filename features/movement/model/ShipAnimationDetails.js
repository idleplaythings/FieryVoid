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

  this._cacheStep = 0.1;
  this._cacheResolution = 100 / this._cacheStep;
  this._movementCaches = [];
	this._paths = [];
	this._routes = [];

	this._turnOfRoute = null;
}

model.movement.ShipAnimationDetails.prototype.getShip = function()
{
	return this._ship;
};

model.movement.ShipAnimationDetails.prototype.getRouteSegmentOnPosition = function(scenePosition){
	return this._pathRenderer.getStepIndexOnPosition(scenePosition);
};

model.movement.ShipAnimationDetails.prototype.getRouteTurnOnPosition = function(scenePosition){
	var index = this._pathRenderer.getStepIndexOnPosition(scenePosition);
	if (index !== null)
		return this._turnOfRoute;
};

model.movement.ShipAnimationDetails.prototype.highlightRouteSegment = function(index){
	this._pathRenderer.highlightRouteSegment(index);
};

model.movement.ShipAnimationDetails.prototype.unhighlightRouteSegment = function(index){
	this._pathRenderer.unhighlightRouteSegment(index);
};

model.movement.ShipAnimationDetails.prototype.resolve = function(ship)
{
	this._ship = ship;
	var routes = ship.getMovement().getRoutes();
	this._routes = routes.slice(0);
	this._paths = routes.map(function(route){
		return this._pathResolver.resolvePathForRoute(route);
	}, this);

	for (var i in this._paths){
		this._movementCaches[i] = this._shipAnimator.cachePath(this._paths[i], this._routes[i], this._cacheResolution);
	}

	return this;
};

model.movement.ShipAnimationDetails.prototype.load = function(turn)
{
	var route = this._ship.getMovement().getRouteByTurn(turn);

	this._paths[turn] = this._pathResolver.resolvePathForRoute(route);
	this._routes[turn] = route;
	this._movementCaches[turn] = this._shipAnimator.cachePath(this._paths[turn], this._routes[turn], this._cacheResolution);

	return this;
};

model.movement.ShipAnimationDetails.prototype.animate = function(turn, time)
{
	var path = this._paths[turn];
	var route = this._routes[turn];

	if ( ! path || ! route)
		return;

	var parameters = this.getShipPositionAndFacing(turn, time);
	this._ship.setPosition(parameters.position);
  this._ship.setAzimuth(parameters.rotation);

  this._movementVisualizer.animate(turn, this);
};

model.movement.ShipAnimationDetails.prototype.showRoute = function(turn)
{
	if ( ! turn)
		turn = 0;

	this._turnOfRoute = turn;

	this._pathRenderer.renderPath(this._paths[turn]);
};

model.movement.ShipAnimationDetails.prototype.hideRoute = function(turn)
{
	this._pathRenderer.hidePath();
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
	var time = Math.floor(time / this._cacheStep);

	var cache = this._movementCaches[turn];
	if ( ! cache || ! cache[time]){
		throw new Error("Ship position not cached: " + time);
	}

	return cache[time];
	/*

	var path = this._paths[turn];
	var route = this._routes[turn];

	if ( ! path || ! route)
		return null;

	return this._shipAnimator.getShipPositionAndFacing(path, route, time);
	*/
};