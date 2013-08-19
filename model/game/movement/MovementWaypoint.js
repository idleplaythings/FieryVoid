model.MovementWaypoint = function MovementWaypoint(args)
{
    this.position = new Vector2(args.position.x, args.position.y);
    this.facing = args.facing || 0;

    this.time = args.time || 0;

    this.rotationVelocity = args.rotationVelocity || 0;

    this.velocity = new Vector2(0,0);
    if (args.velocity)
        this.velocity = new Vector2(args.velocity.x, args.velocity.y);

    this.extrapolation = args.extrapolation || false;

    this.thrusterUsage = null;
    this.routeResolved = false;
};