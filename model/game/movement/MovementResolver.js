model.MovementResolver = function MovementResolver()
{
};

model.MovementResolver.prototype.getModuleThrustVector = function(module)
{
    return module.thruster.getThrustForceVector();
};

model.MovementResolver.prototype.convertVectorToShipCentered = function(a, facing)
{
    facing *= -1;
    a = a.clone();
    facing = MathLib.degreeToRadian(facing);
    var vector = new THREE.Vector3(a.x, a.y, 0);
    var axis = new THREE.Vector3(0, 0, 1);
    var matrix = new THREE.Matrix4().makeRotationAxis(axis, -1 * facing);
    var rotatedVector = vector.applyMatrix4(matrix);

    return new Vector2(rotatedVector.x, rotatedVector.y);
};

model.MovementResolver.prototype.convertVectorToSpace = function(a, facing)
{
    a = a.clone();
    facing = MathLib.degreeToRadian(facing);
    var vector = new THREE.Vector3(a.x, a.y, 0);
    var axis = new THREE.Vector3(0, 0, 1);
    var matrix = new THREE.Matrix4().makeRotationAxis(axis, -1 * facing);
    var rotatedVector = vector.applyMatrix4(matrix);

    return new Vector2(rotatedVector.x, rotatedVector.y);
};

model.MovementResolver.prototype.getEnginePower = function(shipDesign)
{
    return 10;
};

model.MovementResolver.prototype.getModulePositionRelativeToMassCenter = function(module, massCenter)
{
    var pos = module.getCenterPosition();
    pos.x = pos.x - massCenter.x;
    pos.y = pos.y - massCenter.y;

    return pos;
};

model.MovementResolver.prototype.getThrustMoment = function(module, massCenter)
{
    var thrustVector = module.thruster.getThrustForceVector();
    var pos = this.getModulePositionRelativeToMassCenter(module, massCenter);
    var moment = (pos.x * -thrustVector.y) - (pos.y * -thrustVector.x);

    return moment;
};

model.MovementResolver.prototype.getRotationAcceleration = function(
    module, massCenter, momentOfInertia)
{
    var thrustMoment = this.getThrustMoment(module, massCenter);
    return thrustMoment / momentOfInertia;
};

model.MovementResolver.prototype.getAcceleration = function(module, mass, facing)
{
    return this.getModuleThrustVector(module, facing).divideScalar(mass);
};

model.MovementResolver.prototype.resolveRoute = function(shipDesign, route, waypoints)
{
    while(true)
    {
        var currentWaypoint = this.getCurrentWaypoint(route);
        var targetWaypoint = this.getNextTarget(waypoints);

        if (! targetWaypoint)
            return;

        if (currentWaypoint.jumpOut && targetWaypoint.jumpIn)
        {
            this.resolveFtlJump(shipDesign, route, currentWaypoint, targetWaypoint);
        }
        else
        {
            this.resolveNormalMove(
                shipDesign, route, currentWaypoint, targetWaypoint);
        }

    }
};

model.MovementResolver.prototype.resolveFtlJump = function(
    shipDesign, route, currentWaypoint, targetWaypoint)
{
    console.log("Resolving jump");
    targetWaypoint.routeResolved = true;
    route.add(targetWaypoint);
};

model.MovementResolver.prototype.resolveNormalMove = function(
    shipDesign, route, currentWaypoint, targetWaypoint)
{
    var timeToTarget = targetWaypoint.time - currentWaypoint.time;

    var massCenter = shipDesign.calculateCenterOfMass();
    var momentOfInertia = shipDesign.calculateMomentOfIntertia();
    var mass = shipDesign.getMass();
    var enginePower = this.getEnginePower(shipDesign);
    var facing = currentWaypoint.facing;

    var availableThrusters = this.getAvailableThrusters(
        shipDesign, currentWaypoint.time, massCenter, mass, momentOfInertia, facing);

    var newRoute = this.getToNextWaypoint(
        availableThrusters, currentWaypoint, targetWaypoint, timeToTarget, enginePower);

    targetWaypoint.routeResolved = true;
    route.add(newRoute);
};

model.MovementResolver.prototype.getCurrentWaypoint = function(route)
{
    return route.getLastOrCurrent();
};

model.MovementResolver.prototype.getNextTarget = function(waypoints)
{
    return waypoints.getNextUnresolved();
};

model.MovementResolver.prototype.getAvailableThrusters = function(
    shipDesign, time, massCenter, mass, momentOfInertia, facing)
{
    var thrusters = [];
    for (var i in shipDesign.modules)
    {
        var module = shipDesign.modules[i];

        if ( ! module.thruster)
            continue;

        var thruster = new model.ThrusterForMovement(
            this.getAcceleration(module, mass, facing),
            this.getRotationAcceleration(module, massCenter, momentOfInertia),
            module.thruster.getMaxChannel(),
            module
        );

        thrusters.push(thruster);
    }

    return new model.ThrusterGroup(thrusters);
};


model.MovementResolver.prototype.getToNextWaypoint = function(
    thrusters, start, end, timeToTarget, enginePower)
{
    var route = [];
    var current = start;
    var startTime = start.time;
    var totalTime = timeToTarget;

    while(timeToTarget--)
    {
        var currentPosition = current.position.clone();
        var currentVelocity = current.velocity.clone();
        var currentFacing = current.facing;
        var currentRotationVelocity = current.rotationVelocity;

        var time = timeToTarget+1;

        var targetMovement = end.position.clone().sub(currentPosition.clone()).divideScalar(time);
        var targetVector = targetMovement.clone().sub(currentVelocity);

        var facingTarget = targetMovement.angle();

        if (end.facingTarget !== null)
        {
            facingTarget = end.facingTarget;
        }

        var targetRotation = this.getRotationStep(
            currentFacing, currentRotationVelocity, facingTarget, time, thrusters);

        var thrusterResolver = this.resolveThrusterUse(
            thrusters, targetVector, currentFacing, targetRotation, enginePower);

        var resultVelocity =
            this.convertVectorToSpace(thrusterResolver.currentVector, current.facing)
                .add(currentVelocity);

        var resultRotation = currentRotationVelocity + thrusterResolver.getResultRotation();

        //current.velocity = resultVelocity;
        //current.rotationVelocity = resultRotation;

        current = new model.MovementWaypoint({
            position: currentPosition.clone().add(resultVelocity).round(),
            facing: MathLib.addToAzimuth(currentFacing, resultRotation),
            velocity: resultVelocity.round(),
            rotationVelocity: resultRotation,
            time: startTime + totalTime - timeToTarget
        });

        thrusters.commitThrusterUsage(startTime + totalTime - timeToTarget);
        thrusters.refreshThrusterUsage();

        route.push(current);
    }
    return route;
};

model.MovementResolver.prototype.resolveThrusterUse = function(
    thrusters, targetVector, facing, targetRotation, enginePower)
{
    var thrusterResolver = new model.ThrusterResolver(
        thrusters,
        this.convertVectorToShipCentered(targetVector, facing),
        targetRotation,
        enginePower);

    thrusterResolver.resolveThrusterUse();

    return thrusterResolver;
};

model.MovementResolver.prototype.getRotationStep =
    function(current, currentVelocity, target, timeToTarget, thrusters)
{
    var d = MathLib.distanceBetweenAngles(current, target);
    d = thrusters.resolveFasterRotationDirection(d);
    d = d/timeToTarget;
    var c = d - currentVelocity;
    //console.log("current: "+current+" velocity: "+currentVelocity+" target: "  +target+ " result: " + d + " diffrence: " + c);

    return c;
}
