model.AsteroidBeltFactory = function AsteroidBeltFactory(args)
{
    this.beltCentre = args.beltCentre || { x: 0, y: 0 };
    this.beltRadius = args.beltRadius || 300;
    this.beltWidth = args.beltWidth || 100;
    this.asteroidCount = args.asteroidCount || 100;
    this.minAsteroidRadius = args.minAsteroidRadius || 200;
    this.maxAsteroidRadius = args.maxAsteroidRadius || 200;
}

model.AsteroidBeltFactory.prototype._reset = function()
{
    this._asteroids = [];
}

model.AsteroidBeltFactory.prototype.generateAsteroids = function()
{
    this._reset();

    while (this._asteroids.length < this.asteroidCount) {
        try {
            this._addAsteroid(this._getRandomAsteroid());
        } catch (e) {
            continue;
        }
    }

    return this._asteroids;
}

model.AsteroidBeltFactory.prototype._getRandomAsteroid = function()
{
    return new model.Asteroid({
        position: this._getRandomPosition(),
        radius: this._getRandomAsteroidRadius()
    });
}

model.AsteroidBeltFactory.prototype._getRandomPosition = function()
{
    var angle = Math.random() * Math.PI * 2;
    var rand = (Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1);
        rand = rand * 0.1 + 0.5;
    var distance = this.beltRadius + rand * this.beltWidth;

    return {
        x: this.beltCentre.x + distance * Math.cos(angle),
        y: this.beltCentre.y + distance * Math.sin(angle)
    };
}

model.AsteroidBeltFactory.prototype._getRandomAsteroidRadius = function()
{
    return this.minAsteroidRadius + Math.random() * (this.maxAsteroidRadius - this.minAsteroidRadius);
}

model.AsteroidBeltFactory.prototype._addAsteroid = function(newAsteroid)
{
    this._asteroids.push(newAsteroid);
}

