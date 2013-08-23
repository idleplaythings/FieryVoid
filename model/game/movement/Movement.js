model.Movement = function Movement(shipDesign)
{
    this.shipDesign = shipDesign;
    this.route = [];
    this.waypoints = [];
    this.route3d = null;
    this.resolver = new model.MovementResolver();
};

model.Movement.prototype.serialize = function ()
{
    return this.route;
};

model.Movement.prototype.unserialize = function(route, shipDesign)
{
    this.shipDesign = shipDesign;
    this.route = route.map(function(w){return new model.MovementWaypoint(w)});
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

model.Movement.prototype.subscribeToScene = function(scene, eventDispatcher, uiResolver)
{
    uiResolver.registerListener(this.onDrag.bind(this), 1, 'drag');
    //this.extrapolateCourseForNext(10);
    this.getRoute3d().subscribeToScene(scene, eventDispatcher).displayRoute(this.route);
};

model.Movement.prototype.onDrag = function(payload)
{
    if (payload.release)
    {
        return;
    }

    if (payload.capture)
    {
        var wp = this.getRoute3d().getWaypointInPosition(
            payload.start.game, this.route);

        if (wp)
        {
            var self = this;
            payload.capture(function(payload)
            {
                self.drag.call(self, self.waypoints[wp.time], payload);
            });
        }
    }
};

model.Movement.prototype.drag = function(wp, payload)
{
    if (payload.release)
    {
        return;
    }

    wp.position.x += payload.delta.game.x;
    wp.position.y -= payload.delta.game.y;
    wp.routeResolved = false;
    this.deleteRouteFrom(wp.time-9);
    this.unresolveRouteAfter(wp.time);
    this.recalculateRoute();

};

model.Movement.prototype.deleteRouteFrom = function(time)
{
    var amount = this.route.length - time;
    //console.log("deleting route from time " + time + " amount: " + amount);
    this.route.splice(time, amount);
    //console.log(this.route);
};

model.Movement.prototype.unresolveRouteAfter = function(time)
{
    for (var i in this.waypoints)
    {
        var wp = this.waypoints[i];
        if (wp.time > time)
            wp.routeResolved = false;
    }
};


model.Movement.prototype.setWaypoint = function(pos)
{

    //var i = this.route.length + 10;
    var i = Math.ceil((this.route.length+1) / 10) * 10;

    console.log("setting waypoint for time " + i);

    this.waypoints[i] = new model.MovementWaypoint({position:pos, facing:0, time:i});
    this.recalculateRoute();
};

model.Movement.prototype.recalculateRoute = function()
{
    this.route = this.resolver.resolveRoute(
        this.shipDesign, this.route, this.waypoints);
    this.getRoute3d().displayRoute(this.route);
};

model.Movement.prototype.getCurrentPosition = function(gameTime)
{
    var gameTime = gameTime / 1000;
    if (gameTime % 1 === 0)
    {
        if ( ! this.route[gameTime])
            return null;

        return this.route[gameTime].position;
    }
    else
    {
        var p1 = this.route[Math.floor(gameTime)].position;
        var p2 = this.route[Math.ceil(gameTime)].position;

        var perc = gameTime % 1;
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

model.Movement.prototype.getFacing = function(gameTime)
{
    gameTime = gameTime / 1000;
    if (gameTime % 1 === 0)
    {
        if ( ! this.route[gameTime])
            return this.route[this.route.length -1].facing;

        return this.route[gameTime].facing;
    }
    else
    {
        var p1 = this.route[Math.floor(gameTime)];
        var perc = gameTime % 1;
        return MathLib.addToAzimuth(p1.facing, p1.rotationVelocity * perc);
    }
};


