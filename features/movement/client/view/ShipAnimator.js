model.movement.ShipAnimator = function ShipAnimator()
{
};

model.movement.ShipAnimator.prototype.cachePath = function(path, route, resolution)
{
    var cache = new Array(resolution);
    var step = 100 / resolution;

    for (var i = 0; i < resolution; i++){
        var position = step*i;
        cache[i] = this.getShipPositionAndFacing(path, route, position);
    }

    return cache;
};

model.movement.ShipAnimator.prototype.getShipPositionAndFacing = function(path, route, position)
{
    var stepLength = 100 / path.length;

    var stepIndex = Math.floor(position / stepLength);
    var step = path[stepIndex];
    var positionInStep = (position - stepIndex * stepLength) / stepLength;

    var parameters = {};

    parameters.position = step.getShape().getPointAt(positionInStep);
    parameters.rotation = this._getCurrentFacing(route, stepIndex, positionInStep, stepLength);
    //parameters.rotation = - model.VectorUtils.getVectorAngle(step.getShape().getTangentAt(positionInStep));
    //parameters.rotation = parameters.rotation * 180 / Math.PI;

    return parameters;
};

model.movement.ShipAnimator.prototype._getCurrentFacing = function(route, stepIndex, positionInStep, stepLength){
    var routeStep = route.getRoute()[stepIndex];
    var lastRouteStep = this._getLastRouteStep(route, stepIndex);

    var startFacing = lastRouteStep.getFacing() * 60;
    var endFacing = routeStep.getFacing() * 60;

    var distances = MathLib.distanceBetweenAngles(startFacing, endFacing);
    var absDistance = MathLib.shortestDistanceBetweenAngles(startFacing, endFacing);

    var step = (distances.cw < distances.ccw) ? -1 : 1;

    return startFacing + (absDistance * positionInStep * step);
};

model.movement.ShipAnimator.prototype._getLastRouteStep = function(route, stepIndex){
    var steps = route.getRoute();

    if (steps[stepIndex - 1])
        return steps[stepIndex -1];

    return route.getStartPosition();
};