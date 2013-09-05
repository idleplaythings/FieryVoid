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

model.Movement.prototype.deserialize = function(route, shipDesign)
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
};

model.Movement.prototype.subscribeToScene = function(scene, eventDispatcher, uiResolver)
{
    uiResolver.registerListener('drag', this.onDrag.bind(this), 1);
    uiResolver.registerListener('click', this.onClick.bind(this), 1);
    this.extrapolateCourseForNext(10);
    this.getRoute3d().subscribeToScene(scene, eventDispatcher).displayRoute(this.route);
};

model.Movement.prototype.onClick = function(eventPayload)
{
    var wp = this.getRoute3d().getWaypointInPosition(
        eventPayload.game, this.route);

    if (wp)
    {
        eventPayload.stop();

    }
};

model.Movement.prototype.onDrag = function(eventPayload)
{
    if (eventPayload.release)
    {
        return;
    }

    if (eventPayload.capture)
    {
        var wp = this.getRoute3d().getWaypointInPosition(
            eventPayload.start.game, this.route);

        if (wp)
        {
            var self = this;
            eventPayload.capture(function(payload)
            {
                if (eventPayload.ctrlKey) {
                    self.ctrlDrag.call(self, self.waypoints[wp.time], payload);
                } else {
                    self.drag.call(self, self.waypoints[wp.time], payload);
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
    if (payload.release)
    {
        this.getRoute3d().setNormal(wp.time);
        return;
    }

    wp.position.x += payload.delta.game.x;
    wp.position.y -= payload.delta.game.y;
    wp.routeResolved = false;
    this.deleteRouteFrom(wp.time-9);
    this.unresolveRouteAfter(wp.time);
    this.recalculateRoute();

};

model.Movement.prototype.ctrlDrag = function(wp, payload)
{
    if (payload.release)
    {
        this.getRoute3d().setNormal(wp.time);
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

model.Movement.prototype.deleteRouteFrom = function(time)
{
    var amount = this.route.length - time;
    //console.log("deleting route from time " + time + " amount: " + amount);
    this.route.splice(time, amount);
    //console.log(this.route);
};

model.Movement.prototype.removeExtrapolation = function()
{
    this.route = this.route.filter(function(wp){return wp.extrapolation !== true});
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

    this.removeExtrapolation();
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

    this.extrapolateCourseForNext(10);
    this.getRoute3d().displayRoute(this.route);
};

model.Movement.prototype.getCurrentPosition = function(gameTime)
{
    var gameTime = gameTime / 1000;
    if (gameTime % 1 === 0)
    {
        if ( ! this.route[gameTime])
            return this.getExtrapolatedPosition(gameTime);

        return this.route[gameTime].position;
    }
    else
    {
        var p1 = this.route[Math.floor(gameTime)];
        var p2 = this.route[Math.ceil(gameTime)];

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
            return this.getExtrapolatedPosition(gameTime);
        }
    }
};

model.Movement.prototype.getExtrapolatedPosition = function(gameTime)
{
    var p = this.route[this.route.length-1];
    var deltaTime = gameTime - p.time;
    return p.position.clone().add(p.velocity.clone().multiplyScalar(deltaTime));
};

model.Movement.prototype.getFacing = function(gameTime)
{
    gameTime = gameTime / 1000;
    if (gameTime % 1 === 0)
    {
        if ( ! this.route[gameTime])
            return this.getExtrapolatedFacing(gameTime);

        return this.route[gameTime].facing;
    }
    else
    {
        var p1 = this.route[Math.floor(gameTime)];
        var p2 = this.route[Math.ceil(gameTime)];
        var perc = gameTime % 1;

        if (p1 && p2)
        {
            return MathLib.addToAzimuth(p1.facing, p2.rotationVelocity * perc);
        }
        else
        {
            return this.getExtrapolatedFacing(gameTime);
        }
    }
};

model.Movement.prototype.getExtrapolatedFacing = function(gameTime)
{
    var p = this.route[this.route.length-1];
    var deltaTime = gameTime - p.time;
    return MathLib.addToAzimuth(p.facing, p.rotationVelocity * deltaTime);
};

model.Movement.prototype.getRoute3d = function()
{
    if ( ! this.route3d)
    {
        this.route3d = new model.MovementDisplayRoute();
    }

    return this.route3d;
};

model.Movement.prototype.persistRoute = function()
{
    if ( ! this.route3d)
    {
        this.route3d = new model.MovementDisplayRoute();
    }

    return this.route3d;
};

model.Movement.prototype.getWaypointsAfter = function(time)
{
    return this.waypoints.filter(
        function(waypoint) {
            return waypoint.time >= time;
        });
};

