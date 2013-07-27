model.MovementWaypoint = function MovementWaypoint(ship, start, end)
{
    this.ship = ship;
    this.gameScene = null;
    this.start = start;
    this.end = end;

    this.intermediateWaypoints = [];
    this.waypoint = null;

    this.addedToScene = false;

    this.z = -10;

    this.buildRoute();
};

model.MovementWaypoint.prototype =  Object.create(model.Sprite.prototype);

model.MovementWaypoint.prototype.subscribeToScene = function(scene)
{
    if (this.addedToScene === true)
        return;

    console.log("waypoint to scene");
    this.addedToScene = true;
    scene.scene.add(this.waypoint);
    this.intermediateWaypoints.forEach(function(w){scene.scene.add(w)});
};

model.MovementWaypoint.prototype.unSubscribeToScene = function(scene)
{
    if (this.addedToScene === false)
        return;

    this.addedToScene = false;
    scene.remove(this.waypoint);
    this.intermediateWaypoints.forEach(function(w){scene.remove(w)});
};

model.MovementWaypoint.prototype.getInterval = function()
{
    return 200;
};

model.MovementWaypoint.prototype.buildRoute = function()
{
    console.log("waypoint building route");
    var distance = MathLib.distance(this.start, this.end);
    var interval = this.getInterval();
    var nI = Math.floor(distance / interval);

    for (var i = 1; i<nI; i++)
    {
        var pos = MathLib.getPointBetween(this.start, this.end, (interval*i)/distance);

        var size = 100;
        var r = size/2;

        var iw = this.getCircle(size, r, r*0.6);
        iw.scale.set(size, size, 1);
        iw.position = new THREE.Vector3(pos.x, pos.y, -10);
        this.intermediateWaypoints.push(iw);
    }

    var size = 200;
    var r = size/2;

    this.waypoint = this.getCircle(size, r, r*0.6);
    this.waypoint.scale.set(size, size, 1);
    this.waypoint.position = new THREE.Vector3(this.end.x, this.end.y, -10);
};