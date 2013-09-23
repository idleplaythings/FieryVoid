model.MovementRoute = function MovementRoute(timeline, name)
{
    this._name = name;
    this._timeline = timeline;
    this._gameState = timeline._gameState;
    this._cached = null;

};

model.MovementRoute.prototype.persist = function()
{
    this._pushToTimeline();
    this._timeline.persist();
};

model.MovementRoute.prototype._pushToTimeline = function()
{
   this.getRoute().forEach(function(wp){
        if (wp.extrapolation)
            return;

        this._timeline.update(wp.time, this._name, wp.serialize());
    }, this);
};

model.MovementRoute.prototype.getBefore = function(time)
{
    var route = this.getRoute();
    for (var i = time; i>=time-10; i--)
    {
        if (route[i])
            return route[i];
    }

    return null;
};

model.MovementRoute.prototype.getAfter = function(time)
{
    var route = this.getRoute();
    for (var i = time; i<=time+10; i--)
    {
        if (route[i])
            return route[i];
    }

    return null;
};

model.MovementRoute.prototype.getLast = function()
{
    var route = this.getRoute();
    if ( ! route)
        return null;

    return route[route.length-1];
};

model.MovementRoute.prototype.getFirst = function()
{
    var route = this.getRoute();
    if ( ! route)
        return null;

    return route[0];
};

model.MovementRoute.prototype.getAt = function(time)
{
    var route = this.getRoute();
    return (route[time]) ? route[time] : null;
};

model.MovementRoute.prototype.add = function(waypoints)
{
    waypoints = [].concat(waypoints);

    this._buildCache(this.getRoute().concat(waypoints));
    waypoints.forEach(function(wp){
        if (wp.extrapolation)
            return;

        this._timeline.add(wp.time, this._name, wp.serialize());
    }, this);
};

model.MovementRoute.prototype.removeExtrapolation = function()
{
    this._buildCache(this.getRoute().filter(function(wp){
        return ! wp.extrapolation;
    }));
};

model.MovementRoute.prototype.getNextUnresolved = function()
{
    for (var i in this.getRoute())
    {
        var wp = this.getRoute()[i];
        if ( ! wp.routeResolved)
            return wp;
    }
};

model.MovementRoute.prototype.getRoute = function()
{
    if ( ! this._cached)
    {
        this._buildCache(this._getFromTimeline());
    }
    return this._cached;
};

model.MovementRoute.prototype.getLength = function()
{
    return this.getRoute().length;
};

model.MovementRoute.prototype.extrapolateCourseForNext = function(time)
{
    var start = this.getLast();

    if (start.jumpOut)
        return;

    var extrapolation = [];

    for (var i = 1; i <= time; i++)
    {
        extrapolation.push(new model.MovementWaypoint(
            {
                position: new Vector2(
                    start.position.x + (start.velocity.x * i),
                    start.position.y + (start.velocity.y * i)
                ),
                velocity: start.velocity,
                facing: MathLib.addToAzimuth(start.facing, start.rotationVelocity * i),
                rotationVelocity: start.rotationVelocity,
                extrapolation: true,
                time: start.time + i
            }
        ));
    }

    this.add(extrapolation);
};

model.MovementRoute.prototype.setUnresolvedAfter = function(time)
{
    this.getRoute().forEach(function(wp){
        if (wp.time > time)
            wp.routeResolved = false;
    });
};

model.MovementRoute.prototype.delete = function(time)
{
    this._buildCache(this.getRoute().filter(function(wp){
        if (wp.time >= time)
        {
            this._timeline.remove(wp.time, this._name);
            return false;
        }

        return true;
    }, this));
};

model.MovementRoute.prototype._getFromTimeline = function()
{
    return this._timeline
        .filter(
        function(entry){
            return entry.name == this._name;
        }, this
    )
        .map(
        function(entry)
        {
            return new model.MovementWaypoint(entry.entry)
        }, this
    );
};

model.MovementRoute.prototype._buildCache = function(route)
{
    this._cached = [];
    for (var i in route)
    {
        var waypoint = route[i];
        this._cached[waypoint.time] = waypoint;
    }
};

model.MovementRoute.prototype.isJumping = function(gameTime)
{
    var gameTime = Math.floor(gameTime / 1000);

    var p = this.getAt(gameTime);
    if (p && p.jumpOut)
        return true;

    var p2 = this.getBefore(gameTime);
    if (!p && p2.jumpOut)
        return true;

    return false;
};