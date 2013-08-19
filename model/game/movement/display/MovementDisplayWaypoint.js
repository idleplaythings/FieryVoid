model.MovementDisplayWaypoint = function MovementWaypoint(size)
{
    model.Particle.call(
        this,
        {
            alive: 0,
            position: new THREE.Vector3(0, 0, 0),
            size: size,
            opacity: 0.5
        }
    );
};

model.MovementDisplayWaypoint.prototype =  Object.create(model.Particle.prototype);

model.MovementDisplayWaypoint.prototype.setFromWaypoint = function(waypoint)
{
    this.setPosition(waypoint.position).setAngle(waypoint.facing).activate();
};
