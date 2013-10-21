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

    this.thrusterUsage = args.thrusterUsage || null;
    this.routeResolved = args.routeResolved || false;
    this.facingTarget = args.facingTarget || null;

    this.jumpOut = args.jumpOut || false;
    this.jumpIn = args.jumpIn || false;
};

model.MovementWaypoint.prototype.serialize = function()
{
    return {
        position: {x: this.position.x, y: this.position.y},
        facing: this.facing,
        time: this.time,
        rotationVelocity: this.rotationVelocity,
        velocity: this.velocity,
        routeResolved: this.routeResolved,
        facingTarget: this.facingTarget,
        jumpOut: this.jumpOut,
        jumpIn: this.jumpIn
    }
}