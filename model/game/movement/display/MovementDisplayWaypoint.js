model.MovementDisplayWaypoint = function MovementWaypoint(size)
{
    model.Particle.call(
        this,
        {
            alive: 0,
            position: new THREE.Vector3(0, 0, 0),
            size: size,
            opacity: 1
        }
    );

    this.dragging = false;
    this.rotating = false;
    this.extrapolation = false;
    this.oldColor = null;
};

model.MovementDisplayWaypoint.prototype =  Object.create(model.Particle.prototype);

model.MovementDisplayWaypoint.prototype.setFromWaypoint = function(waypoint)
{
    this.setPosition(waypoint.position).setAngle(waypoint.facing).activate();
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
