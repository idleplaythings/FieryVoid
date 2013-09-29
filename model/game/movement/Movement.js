model.Movement = function Movement(timeline, waypointUi)
{
    this.waypointUi = waypointUi;
    this.ship = null;
    this.route3d = null;
    this.resolver = new model.MovementResolver();

    this.route = new model.MovementRoute(
        timeline, 'route', this.onTurnChanged.bind(this));
    this.waypoints = new model.MovementRoute(timeline, 'waypoint');
    this._timeline = timeline;
};

model.Movement.prototype.onTurnChanged = function()
{
    this.route.extrapolateCourseForNext(10);
    this.getRoute3d().displayRoute(this.route);
};

model.Movement.prototype.setShip = function(ship)
{
    this.ship = ship;
};

model.Movement.prototype.addStartPosition = function(waypoint)
{
    this.route.add(waypoint);
    this.route.persist();
};

model.Movement.prototype.setTimeline = function(timeline)
{
    this._timeline = timeline;
};

model.Movement.prototype.serialize = function ()
{
    return this._timeline.getId();
};

model.Movement.prototype.subscribeToScene = function(scene, eventDispatcher, uiResolver)
{
    uiResolver.registerListener('drag', this.onDrag.bind(this), 1);
    uiResolver.registerListener('click', this.onClick.bind(this), 1);
    this.route.extrapolateCourseForNext(10);
    this.getRoute3d().subscribeToScene(scene, eventDispatcher).displayRoute(this.route);
};

model.Movement.prototype.onClick = function(eventPayload)
{
    if (eventPayload.stopped)
        return;

    var wp = this.getRoute3d().getWaypointInPosition(
        eventPayload.game, this.route.getRoute());

    if (wp)
    {
        if (! this.route.canBeManipulated(wp))
            return;

        eventPayload.stop();
        this.waypointUi.show(this, wp);
    }
};

model.Movement.prototype.onDrag = function(eventPayload)
{
    if (eventPayload.stopped)
        return;

    if (eventPayload.release)
    {
        return;
    }

    if (eventPayload.capture)
    {
        var wp = this.getRoute3d().getWaypointInPosition(
            eventPayload.start.game, this.route.getRoute());

        if (wp)
        {
            if (! this.route.canBeManipulated(wp))
                return;

            var self = this;
            eventPayload.capture(function(payload)
            {
                if (eventPayload.ctrlKey) {
                    self.ctrlDrag.call(self, self.waypoints.getAt(wp.time), payload);
                } else {
                    self.drag.call(self, self.waypoints.getAt(wp.time), payload);
                }
            });

            if (eventPayload.ctrlKey) {
                self.getRoute3d().setRotating(wp.time);
            } else {
                self.getRoute3d().setDragging(wp.time);
            }
        }
    }
};

model.Movement.prototype.drag = function(wp, payload)
{
    if (payload.stopped)
        return;

    if (payload.release)
    {
        this.getRoute3d().setNormal(wp.time);
        this.persist();
        return;
    }

    //wp.position.x += payload.delta.game.x;
    //wp.position.y -= payload.delta.game.y;

    wp.position.x = payload.current.game.x;
    wp.position.y = payload.current.game.y;

    wp.routeResolved = false;
    this.deleteRouteFrom(wp.time-9);
    this.unresolveRouteAfter(wp.time);
    this.recalculateRoute();
};

model.Movement.prototype.ctrlDrag = function(wp, payload)
{
    if (payload.stopped)
        return;

    if (payload.release)
    {
        this.getRoute3d().setNormal(wp.time);
        this.persist();
        return;
    }

    var vector = new Vector2(
        payload.current.view.x - payload.start.view.x,
        payload.start.view.y - payload.current.view.y //viewport y goes opposite direction compared to game
    );
    var angle = vector.angle();

    wp.facingTarget = angle;
    wp.routeResolved = false;
    this.deleteRouteFrom(wp.time-9);
    this.unresolveRouteAfter(wp.time);
    this.recalculateRoute();
};

model.Movement.prototype.deleteWaypoint = function(time)
{
    this.route.delete(time);
    this.waypoints.delete(time);

    this.ship.shipDesign.modules.forEach(function(m){
        if (m.thruster)
        {
            m.thruster.deleteThrusterUsage(time);
        }
    });

    this.route.extrapolateCourseForNext(10);
    this.getRoute3d().displayRoute(this.route);
    this.persist();
};

model.Movement.prototype.deleteRouteFrom = function(time)
{
    this.route.delete(time);
};

model.Movement.prototype.unresolveRouteAfter = function(time)
{
    this.waypoints.setUnresolvedAfter(time);
};

model.Movement.prototype.setWaypoint = function(pos)
{
    this.route.removeExtrapolation();
    var lastTime = this.getTimeForNextWaypoint();
    var last = this.route.getLast();
    var i = Math.ceil((lastTime+1) / 10) * 10;
    console.log("setting waypoint for time " + i);

    this.waypoints.add(new model.MovementWaypoint(
        {position:pos, facing:0, time:i, jumpIn: last.jumpOut}));
    this.recalculateRoute();
    this.persist();
};

model.Movement.prototype.getTimeForNextWaypoint = function()
{
    var route = this.route.getLastTime();
    var waypoint = this.waypoints.getLastTime();

    console.log(route, waypoint);
    return (route > waypoint) ? route : waypoint;
};

model.Movement.prototype.persist = function()
{
    this.route.persist();
    this.waypoints.persist();
    this.ship.shipDesign.modules.forEach(function(m){
        if (m.thruster)
        {
            m.timeline.persist();
        }
    });
};

model.Movement.prototype.recalculateRoute = function()
{
    if (! this.ship)
        throw Error("Movement ship is not set");

    this.resolver.resolveRoute(
        this.ship.shipDesign, this.route, this.waypoints);

    this.route.extrapolateCourseForNext(10);
    this.getRoute3d().displayRoute(this.route);
};

model.Movement.prototype.getCurrentPosition = function(gameTime)
{
    var gameTime = gameTime / 1000;
    if (gameTime % 1 === 0)
    {
        if ( ! this.route.getAt(gameTime))
            return this.route.getExtrapolatedPosition(gameTime);

        return this.route.getAt(gameTime).position;
    }
    else
    {
        var p1 = this.route.getAt(Math.floor(gameTime));
        var p2 = this.route.getAt(Math.ceil(gameTime));

        if (p1 && p2)
        {
            p1 = p1.position;
            p2 = p2.position;

            var perc = gameTime % 1;

            //return p1.velocity.clone().multiplyScalar(time).add(p1.velocity.clone().sub(p2.velocity).multiplyScalar(0.5)).multiplyScalar(Math.pow(perc, 2));

            return MathLib.getPointBetween(p1, p2, perc);
        }
        else
        {
            return this.route.getExtrapolatedPosition(gameTime);
        }
    }
};

model.Movement.prototype.getFacing = function(gameTime)
{
    gameTime = gameTime / 1000;
    if (gameTime % 1 === 0)
    {
        if ( ! this.route.getAt(gameTime))
            return this.route.getExtrapolatedFacing(gameTime);

        return this.route.getAt(gameTime).facing;
    }
    else
    {
        var p1 = this.route.getAt(Math.floor(gameTime));
        var p2 = this.route.getAt(Math.ceil(gameTime));
        var perc = gameTime % 1;

        if (p1 && p2)
        {
            return MathLib.addToAzimuth(p1.facing, p2.rotationVelocity * perc);
        }
        else
        {
            return this.route.getExtrapolatedFacing(gameTime);
        }
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

model.Movement.prototype.canJump = function(waypoint)
{
    return true;
};

model.Movement.prototype.jump = function(waypoint)
{
    waypoint.jumpOut = true;
    this.deleteWaypoint(waypoint.time + 1);
};

model.Movement.prototype.animate = function(gameTime)
{
    if (this.route.isJumping(gameTime))
    {
        this.ship.setPosition(null);
    }
    else
    {
        this.ship.setPosition(this.getCurrentPosition(gameTime));
        this.ship.setAzimuth(this.getFacing(gameTime));
    }
};