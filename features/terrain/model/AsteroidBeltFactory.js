model.AsteroidBeltFactory = function AsteroidBeltFactory(args, gridService)
{
    this.beltCentre = args.beltCentre || { x: 0, y: 0 };
    this.beltRadius = args.beltRadius || 300;
    this.beltWidth = args.beltWidth || 100;
    this.asteroidCount = args.asteroidCount || 100;
    this.minAsteroidRadius = args.minAsteroidRadius || 200;
    this.maxAsteroidRadius = args.maxAsteroidRadius || 200;

    this._gridService = gridService;
}

model.AsteroidBeltFactory.prototype.create = function()
{
    var asteroids = [];

    while (asteroids.length < this.asteroidCount) {
        try {
            asteroids.push(this.createRandomAsteroid());
        } catch (e) {
            continue;
        }
    }

    return new model.AsteroidBelt(asteroids).create();
}

model.AsteroidBeltFactory.prototype.createRandomAsteroid = function()
{
    return new model.Asteroid({
        position: this.getRandomPosition(),
        radius: this.getRandomRadius(),
        rotationCoefficient: this.getRandomRotationCoefficient(),
        rotationOffset: this.getRandomAngle()
    });
}

model.AsteroidBeltFactory.prototype.getRandomPosition = function()
{
    var angle = this.getRandomAngle();;
    var rand = (Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1);
        rand = rand * 0.1 + 0.5;
    var distance = this.beltRadius + rand * this.beltWidth;

    return this._gridService.resolveGameCoordinates({
        q: Math.floor(this.beltCentre.x + distance * Math.cos(angle)),
        r: Math.floor(this.beltCentre.y + distance * Math.sin(angle))
    })
}

model.AsteroidBeltFactory.prototype.getRandomRadius = function()
{
    return this.minAsteroidRadius + Math.random() * (this.maxAsteroidRadius - this.minAsteroidRadius);
}

model.AsteroidBeltFactory.prototype.getRandomAngle = function()
{
    return Math.random() * Math.PI * 2;
}

model.AsteroidBeltFactory.prototype.getRandomRotationCoefficient = function()
{
    return Math.random() * 2 - 1;
}

