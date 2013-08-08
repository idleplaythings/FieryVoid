model.MovementWaypoint = function MovementWaypoint(args)
{
    this.position = args.position;
    this.facing = args.facing || 0;

    this.time = args.time || 0;

    this.rotationVelocity = args.rotationVelocity || 0;
    this.velocity = args.velocity || {x:0, y:0};

    this.extrapolation = args.extrapolation || false;

    this.thrusterUsage = null;
};