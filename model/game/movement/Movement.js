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