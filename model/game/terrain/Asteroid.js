model.Asteroid = function Asteroid(args)
{
    this._id = args._id || null;
    this.position = args.position || null;
    this.rotation = args.rotation || 0;
    this.angleVelocity = args.angleVelocity || null;
    this.radius = args.radius || null;
    this.mass = args.mass || null;
    this.scale = args.scale || null;
};

model.Asteroid.prototype.animate = function()
{
    this.rotate();
}

model.Asteroid.prototype.rotate = function()
{
    this.rotation += this.angleVelocity;
}

