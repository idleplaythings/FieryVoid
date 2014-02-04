model.MovementRoute = function MovementRoute(timeline, name, onReloadCallback)
{
    this._name = name;
    this._timeline = timeline;

	timeline.observeReload(this.onReload.bind(this));

    this._gameState = timeline._gameState;
    this._cached = null;

    this._onReloadCallback = onReloadCallback || null;
};

model.MovementRoute.prototype.onReload = function()
{
    this._cached = null;

    if (this._onReloadCallback)
        this._onReloadCallback();
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
    for (var i = time; i>=0; i--)
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

model.MovementRoute.prototype.getLastOrCurrent = function()
{
    var last = this.getLast();
    var gameTime = this._gameState.currentGametime / 1000;

    if (last.time < gameTime)
    {
        var time = gameTime - last.time;
        last = new model.MovementWaypoint(
            {
                position: new Vector2(
                    last.position.x + (last.velocity.x * time),
                    last.position.y + (last.velocity.y * time)
                ),
                velocity: last.velocity,
                facing: MathLib.addToAzimuth(
                    last.facing, last.rotationVelocity * time),
                rotationVelocity: last.rotationVelocity,
                extrapolation: true,
                time: last.time + time
            }
        )
    }

    return last;
};

model.MovementRoute.prototype.getLastTime = function()
{
    var last = this.getLast();
    var gameTime = this._gameState.currentGametime / 1000;

    if (! last || last.time < gameTime)
        return gameTime;

    return last.time;
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
    var gameTime = this._gameState.currentGametime / 1000;

    for (var i in this.getRoute())
    {
        var wp = this.getRoute()[i];
        if ( ! wp.routeResolved && wp.time > gameTime)
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
    if (!p && p2 && p2.jumpOut)
        return true;

    return false;
};

model.MovementRoute.prototype.acceptToPast = function(waypoint)
{
    if (Meteor.isClient)
        return;

    this._timeline.removeFromFuture(waypoint.time, this._name);
    this._timeline.addToPast(waypoint.time, this._name, waypoint.serialize());
};

model.MovementRoute.prototype.canBeManipulated = function(waypoint)
{
    return waypoint.time > (this._gameState.currentGametime / 1000);
};

model.MovementRoute.prototype.isInPast = function(waypoint)
{
    return waypoint.time <= (this._gameState.currentGametime / 1000);
};

model.MovementRoute.prototype.getExtrapolatedPosition = function(gameTime)
{
    var p = this.getBefore(Math.floor(gameTime));
    var deltaTime = gameTime - p.time;
    return p.position.clone().add(p.velocity.clone().multiplyScalar(deltaTime));
};

model.MovementRoute.prototype.getExtrapolatedFacing = function(gameTime)
{
    var p = this.getBefore(Math.floor(gameTime));
    var deltaTime = gameTime - p.time;
    return MathLib.addToAzimuth(p.facing, p.rotationVelocity * deltaTime);
};
