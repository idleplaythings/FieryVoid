model.movement.ShipAnimator = function ShipAnimator()
{

};

model.movement.ShipAnimator.prototype.positionShipAlongPath = function(ship, path, position)
{
    var stepLength = 100 / path.length;

    var stepIndex = Math.floor(position / stepLength);
    // console.log(position)
    var step = path[stepIndex];

    var positionInStep = (position - stepIndex * stepLength) / stepLength;

    var parameters = {};

    parameters.position = step.getShape().getPointAt(positionInStep);
    parameters.rotation = - model.VectorUtils.getVectorAngle(step.getShape().getTangentAt(positionInStep));

    ship.setPosition(parameters.position);
    ship.setAzimuth(parameters.rotation * 180 / Math.PI);
}