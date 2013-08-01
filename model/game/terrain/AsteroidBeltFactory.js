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
    this._segments = 8;
    this._currentSegment = 1;
    this._segmentAngle = Math.PI * 2 / this._segments;
    this._asteroids = [];
}

model.AsteroidBeltFactory.prototype.generateAsteroids = function()
{
    this._reset();

    var segment, asteroid;

    while (segment = this._getNextSegment()) {
        var asteroidsCreatedForSegment = 0;

        while (asteroidsCreatedForSegment <= segment.asteroidCount) {
            try {
                this._addAsteroid(this._getRandomAsteroidForSegment(segment));
            } catch (e) {
                continue;
            }

            asteroidsCreatedForSegment++;
        }
    }

    return this._asteroids;
}

model.AsteroidBeltFactory.prototype._getNextSegment = function()
{
    if (this._currentSegment > this._segments) {
        return false;
    }

    return {
        startAngle: this._currentSegment++ * this._segmentAngle,
        asteroidCount: this.asteroidCount / this._segments
    };
}

model.AsteroidBeltFactory.prototype._getRandomAsteroidForSegment = function(segment)
{
    return new model.Asteroid({
        position: this._getRandomPositionForSegment(segment),
        radius: this._getRandomAsteroidRadius()
    });
}

model.AsteroidBeltFactory.prototype._getRandomPositionForSegment = function(segment)
{
    var angle = segment.startAngle + Math.random() * this._segmentAngle;
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
//    this._asteroids.forEach(function(existingAsteroid) {
//        var diffX = Math.abs(newAsteroid.position.x - existingAsteroid.position.x);
//        var diffY = Math.abs(newAsteroid.position.y - existingAsteroid.position.y);
//        var distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
//
//        if (distance < newAsteroid.radius + existingAsteroid.radius) {
//            throw "Asteroid belt collision detected";
//        }
//    });

    this._asteroids.push(newAsteroid);
}

