model.Movement = function Movement()
{
    this.route = [];
    this.currentGameTime = 0;
    this.route3d = null;
};

model.Movement.prototype.serialize = function ()
{
    return this.route;
};

model.Movement.prototype.unserialize = function(route)
{
    this.route = route;
    return this;
};

model.Movement.prototype.addStartPosition = function(waypoint)
{
    this.route.unshift(waypoint);
};

model.Movement.prototype.extrapolateCourseForNext = function(time)
{
    var start = this.route[this.route.length-1];

    for (var i = 1; i <= time; i++)
    {
        this.route.push(new model.MovementWaypoint(
            {
                position: {
                    x: start.position.x + (start.velocity.x * i),
                    y: start.position.y + (start.velocity.y * i)},
                velocity: start.velocity,
                facing: start.facing,
                extrapolation: true
            }
        ));
    }
};

model.Movement.prototype.subscribeToScene = function(scene)
{
    this.extrapolateCourseForNext(10);
    this.getRoute3d().subscribeToScene(scene).displayRoute(this.route);
};

model.Movement.prototype.setWaypoint = function(pos)
{
    this.route.push({type:intermediate, position:null});
    this.route.push({type:turn, position: pos});
    this.recalculateRoute();
    this.getRoute3d().setWaypoint(pos);
};

model.Movement.prototype.recalculateRoute = function()
{
    var startIndex = this.currentGameTime();
};

model.Movement.prototype.getCurrentPosition = function(gametime)
{
    if (gametime % 1 === 0)
    {
        if ( ! this.route[gametime])
            return null;

        return this.route[gametime].position;
    }
    else
    {
        var p1 = this.route[Math.floor(gametime)];
        var p2 = this.route[Math.ceil(gametime)];

        var perc = gametime % 1;

        return MathLib.getPointBetween(p1, p2, perc);
    }
};

model.Movement.prototype.getRoute3d = function()
{
    if ( ! this.route3d)
    {
        this.route3d = new model.MovementDisplayRoute();
    }

    return this.route3d;
};

model.Movement.prototype.getFacing = function(time)
{
    if (gametime % 1 === 0)
    {
        if ( ! this.route[gametime])
            return this.route[this.route.length -1].facing;

        return this.route[gametime].facing;
    }
    else
    {
        var p1 = this.route[Math.floor(gametime)];
        var p2 = this.route[Math.ceil(gametime)];

        var perc = gametime % 1;

        console.log("TODO: facing between waypoints");
        return p1.facing;
    }
};

model.Movement.prototype.getModuleThrustVector = function(module, facing)
{
    var vector = module.getThrustForceVector();
    var length = vector.length();

    facing = new Vector2(
        Math.cos(facing),
        Math.sin(facing)
    );

    return vector.clone().normalize().add(facing).normalize().multiplyScalar(length);
};

model.Movement.prototype.getModulePositionRelativeToMassCenter = function(module, massCenter)
{
    var pos = module.getCenterPosition();
    pos.x = pos.x - massCenter.x;
    pos.y = pos.y - massCenter.y;

    return pos;
};

model.Movement.prototype.getThrustMoment = function(module, massCenter)
{
    var thrustVector = module.getThrustForceVector();
    var pos = this.getModulePositionRelativeToMassCenter(module, massCenter);
    var moment = (pos.x * -thrustVector.y) - (pos.y * -thrustVector.x);

    return moment;
};

model.Movement.prototype.getRotationAcceleration = function(
    module, massCenter, momentOfInertia)
{
    var thrustMoment = this.getThrustMoment(module, massCenter);
    return thrustMoment / momentOfInertia;
};

model.Movement.prototype.getAcceleration = function(module, mass, facing)
{
    return forceVector.divideScalar(this.getModuleThrustVector(module, facing));
};

model.Movement.prototype.resolveNextLocation = function(shipDesign, time)
{
    var currentWaypoint = this.route[time];
    var targetWaypoint = this.getNextTarget(time);
    var timeToTarget = targetWaypoint.time - currentWaypoint.time;

    var massCenter = shipDesign.calculateCenterOfMass();
    var momentOfInertia = shipDesign.calculateMomentOfIntertia();
    var mass = shipDesign.getMass();
    var facing = currentWaypoint.facing;

    var availableThrusters = this.getAvailableThrusters(
        shipDesign, time, massCenter, mass, momentOfInertia, facing);
};

model.Movement.prototype.getNextTarget = function(time)
{
    return null;
};

model.Movement.prototype.getAvailableThrusters = function(
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


model.Movement.prototype.getToNextWaypoint =
    function(thrusters, start, end)
{

};


model.ThrusterForMovement = function ThrusterForMovement(acc, rotation, max, module)
{
    this.acceleration = acc;
    this.rotationAcceleration = rotation;
    this.max = max;
    this.module = module;
};