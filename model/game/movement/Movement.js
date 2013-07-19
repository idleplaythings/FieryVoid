model.Movement = function Movement(ship)
{
    this.ship = ship;
    this.route = [];
    this.gameScene = null;
};

model.Movement.prototype.setWaypoint = function(pos)
{
    console.log("set waypoint");
    var start = this.route.length > 0 ? this.route[this.route.length-1].end : this.ship.position;
    this.route.push(new model.MovementWaypoint(this.ship, start, pos));
    this.buildRoute();
};

model.Movement.prototype.subscribeToScene = function(scene)
{
    this.gameScene = scene;
    this.buildRoute();
};

model.Movement.prototype.buildRoute = function()
{
    console.log("Movement br");
    console.log(this.gameScene);
    if ( ! this.gameScene)
        return;

    console.log("Movement br scene set");

    this.route.forEach(function(wp){wp.subscribeToScene(this.gameScene)}, this);
};


