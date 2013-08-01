model.AsteroidParticle = function AsteroidParticle(asteroid)
{
    model.Particle.call(this, {
        angleVelocity: Math.random() * 90 - 45
    });

    this.position = new THREE.Vector3(asteroid.position.x, asteroid.position.y, 0);
    this.alive = 1;
    this.size = asteroid.radius;
    this.textureOffset = Math.round(Math.random());
//    console.log(this.textureOffset);
    this.textureCount = 2.0;
};

model.AsteroidParticle.prototype = Object.create(model.Particle.prototype);

model.AsteroidParticle.prototype.updateMaterial = function(particleMaterial, i)
{
    particleMaterial.attributes.customVisible.value[i] = this.alive;
    particleMaterial.attributes.customColor.value[i]   = this.color;
    particleMaterial.attributes.customOpacity.value[i] = this.opacity;
    particleMaterial.attributes.customSize.value[i]    = this.size;
    particleMaterial.attributes.textureOffset.value[i]   = this.textureOffset;
    particleMaterial.attributes.textureCount.value[i]   = this.textureCount;
};