model.AsteroidBelt = function AsteroidBelt(asteroids)
{
    this.asteroids = asteroids;
};

model.AsteroidBelt.prototype.animate = function()
{
    this.asteroids.forEach(this.animateAsteroid);
    this.updateMaterial();
}

model.AsteroidBelt.prototype.animateAsteroid = function(asteroid)
{
    asteroid.animate();
}
