model.Asteroid = function Asteroid(args)
{
    this._id = args._id || null;
    this.position = args.position || null;
    this.radius = args.radius || null;
    this.mass = args.mass || null;
    this.scale = args.scale || null;
    this.icon = null;
};
