model.Asteroid = function Asteroid(args)
{
    this._id = args._id || null;
    this.coordinates = args.coordinates || null;
    this.position = args.position || null;
    this.rotationCoefficient = args.rotationCoefficient || 0;
    this.rotationOffset = args.rotationOffset || 0;
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

