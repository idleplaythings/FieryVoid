model.AsteroidParticle = function AsteroidParticle(asteroid)
{
    model.Particle.call(this);

    this.position = new THREE.Vector3(asteroid.position.x, asteroid.position.y, 0);
    this.alive = 1;
    this.size = 20;
};

model.AsteroidParticle.prototype = Object.create(model.Particle.prototype);
