model.MovementResolver = function MovementResolver()
{
};

model.MovementResolver.prototype.getModuleThrustVector = function(module, facing)
{
    return module.thruster.getThrustForceVector();
    /*
    var vector = module.thruster.getThrustForceVector();
    var length = vector.length();

    facing = new Vector2(
        Math.cos(facing),
        Math.sin(facing)
    );

    return vector.clone().normalize().add(facing).normalize().multiplyScalar(length);
    */
};

model.MovementResolver.prototype.convertVectorToShipCentered = function(a, shipPos, facing)
{
    facing *= -1;
    a = a.clone().sub(shipPos);
    facing = MathLib.degreeToRadian(facing);
    var vector = new THREE.Vector3(a.x, a.y, 0);
    var axis = new THREE.Vector3(0, 0, 1);
    var matrix = new THREE.Matrix4().makeRotationAxis(axis, -1 * facing);
    var rotatedVector = vector.applyMatrix4(matrix);

    return new Vector2(rotatedVector.x, rotatedVector.y);

    /*
    var a = a.clone().sub(shipPos);
    var facing = MathLib.degreeToRadian(facing);
    var length = a.length();

    facing = new Vector2(
        Math.cos(facing),
        Math.sin(facing)
    );

    return a.normalize().add(facing).normalize().multiplyScalar(length);
    */
};

model.MovementResolver.prototype.convertVectorToSpace = function(a, shipPos, facing)
{
    a = a.clone(); //.add(shipPos);
    facing = MathLib.degreeToRadian(facing);
    var vector = new THREE.Vector3(a.x, a.y, 0);
    var axis = new THREE.Vector3(0, 0, 1);
    var matrix = new THREE.Matrix4().makeRotationAxis(axis, -1 * facing);
    var rotatedVector = vector.applyMatrix4(matrix);

    return new Vector2(rotatedVector.x, rotatedVector.y).add(shipPos);
    /*
    var length = a.length();

    facing = new Vector2(
        Math.acos(facing),
        Math.asin(facing)
    );

    return a.clone().normalize().add(facing).normalize().multiplyScalar(length).add(shipPos);
    */
};

model.MovementResolver.prototype.getEnginePower = function(module, massCenter)
{
    var pos = module.getCenterPosition();
    pos.x = pos.x - massCenter.x;
    pos.y = pos.y - massCenter.y;

    return pos;
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

model.MovementResolver.prototype.resolveRoute = function(shipDesign, time, route, waypoints)
{
    var currentWaypoint = route[time];
    var targetWaypoint = this.getNextTarget(time, waypoints);

    if (! targetWaypoint)
        return route;

    var timeToTarget = targetWaypoint.time - currentWaypoint.time;

    var massCenter = shipDesign.calculateCenterOfMass();
    var momentOfInertia = shipDesign.calculateMomentOfIntertia();
    var mass = shipDesign.getMass();
    var enginePower = this.getEnginePower(shipDesign);
    var facing = currentWaypoint.facing;

    var availableThrusters = this.getAvailableThrusters(
        shipDesign, time, massCenter, mass, momentOfInertia, facing);

    route.concat(this.getToNextWaypoint(
        availableThrusters, currentWaypoint, targetWaypoint, timeToTarget));

    return route;
};

model.MovementResolver.prototype.getNextTarget = function(time, waypoints)
{
    var wp = null;
    for(var i = time; i<waypoints.length; i++)
    {
        if (waypoints[i])
            wp = waypoints[i];
    }

    return wp;
};

model.MovementResolver.prototype.getAvailableThrusters = function(
    shipDesign, time, massCenter, mass, momentOfInertia, facing)
{
    var thrusters = [];
    shipDesign.modules.forEach(function(module){
        if ( ! module.thruster)
            return;

        var thruster = new model.ThrusterForMovement(
            this.getAcceleration(module, mass, facing),
            this.getRotationAcceleration(module, massCenter, momentOfInertia),
            module.thruster.getMaxChannel()
        );

        thrusters.push(thruster);
    }, this);

    return thrusters;
};


model.MovementResolver.prototype.getToNextWaypoint = function(
    thrusters, start, end, timeToTarget)
{
    var route = [];
    var current = start;

    while(timeToTarget--)
    {
        var currentVector = current.position;
        var currentVelocity = current.velocity;
        var currentRotation = current.facing();
        var currentRotationVelocity = current.rotationVelocity;

        var time = timeToTarget+1;
        var targetVector = end.position.clone().sub(currentVector.clone()).divideScalar(time).sub(currentVelocity);
        console.log(targetVector);
        console.log(time);

        var targetRotation = this.getRotationStep(
            currentRotation + currentRotationVelocity, end.facing, time);

        current.velocity = targetVector;
        current.rotationVelocity = targetRotation;

        var resultVelocity = targetVector;
        var resultRotation = targetRotation;

        current = new module.MovementWaypoint({
            position: currentVector.clone().add(resultVelocity.clone().add(currentVelocity)),
            facing: currentRotation + resultRotation,
            velocity: resultVelocity,
            rotationVelocity: resultRotation
        });

        route.push(current);
    }

    console.log(route);
    return route;
};

model.MovementResolver.prototype.getRotationStep =
    function(current, target, timeToTarget)
{
    return MathLib.distanceBetweenAngles(current, target)/timeToTarget;
}
