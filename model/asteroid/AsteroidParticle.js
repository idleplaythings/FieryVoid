model.AsteroidParticle = function AsteroidParticle(asteroid)
{
    model.Particle.call(this, {
        angleVelocity: Math.random() * 90 - 45
    });

    this.position = new THREE.Vector3(asteroid.position.x, asteroid.position.y, 0);
    this.alive = 1;
    this.size = asteroid.radius;
};

model.AsteroidParticle.prototype = Object.create(model.Particle.prototype);
