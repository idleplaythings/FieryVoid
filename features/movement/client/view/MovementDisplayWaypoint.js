model.MovementDisplayWaypoint = function MovementWaypoint()
{
    model.Particle.call(
        this,
        {
            alive: 0,
            position: new THREE.Vector3(0, 0, 0),
            size: 64,
            opacity: 1
        }
    );

    this.time = 0;
    this.turnWaypointSize = 128;
    this.intermediateWaypointSize = 64;

    this.dragging = false;
    this.rotating = false;
    this.extrapolation = false;
    this.oldColor = null;
};

model.MovementDisplayWaypoint.prototype =  Object.create(model.Particle.prototype);

model.MovementDisplayWaypoint.prototype.setFromWaypoint = function(waypoint)
{
    var size = waypoint.time % 10 == 0 ? this.turnWaypointSize : this.intermediateWaypointSize;

    this.setSize(size)
        .setPosition(waypoint.position)
        .setAngle(waypoint.facing)
        .activate();

    this.time = waypoint.time;
    this.extrapolation = waypoint.extrapolation;
};


model.MovementDisplayWaypoint.prototype.animate = function(dt)
{
    if ( ! this.alive)
        return;

    if (this.dragging)
    {
        this.color = new THREE.Color().setRGB(0,0,1);
    }
    else if (this.rotating)
    {
        this.color = new THREE.Color().setRGB(1,0,0);
    }
    else if (this.extrapolation)
    {
        this.opacity = 0.3;
        this.color = new THREE.Color().setRGB(1,1,1);
    }
    else
    {
        this.opacity = 1;
        this.color = new THREE.Color().setRGB(50/255,122/255,24/255);
    }
};
