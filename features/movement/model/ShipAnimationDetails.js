model.movement.ShipAnimationDetails = function ShipAnimationDetails(pathResolver, pathRenderer, shipAnimator)
{
	this._ship = null;

	this._pathResolver = pathResolver;
	this._shipAnimator = shipAnimator;
	this._pathRenderer = pathRenderer;

	ẗhis._paths = [];
	/*
	this._path = this._pathResolver.resolvePathForRoute(this.gridService, this._route);

    // console.log(this._path)

    this._pathRenderer = new model.movement.PathRenderer(this.dispatcher);
    this._pathRenderer.renderPath(this.gameScene, this._path);



    this._animationPosition = 0;
    this._shipAnimator = new model.movement.ShipAnimator();
    */
}

model.movement.ShipAnimationDetails.prototype.resolve = function(ship)
{
	this._ship = ship;
	var routes = ship.getMovement().getRoutes();
	this._paths = routes.map(function(route){
		return this._pathResolver.resolvePathForRoute(route);
	});

	return this;
};

model.movement.ShipAnimationDetails.prototype.renderPath = function(turn)
{
	if ( ! turn)
		turn = 0;

	this._pathRenderer.renderPath(this._paths[turn]);
};