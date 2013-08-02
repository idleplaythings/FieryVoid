model.MovementWaypoint = function MovementWaypoint(args)
{
    this.position = args.position;
    this.velocity = args.velocity || {x:0, y:0};
    this.facing = args.facing || 0;
    this.extrapolation = args.extrapolation || false;
};