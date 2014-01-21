model.ParticleEffect = function ParticleEffect(emitterType, seed)
{
	this.emitter = null;
	this.particles = [];
	this.seed = seed || Math.random();
	
	this.emitterType = emitterType || 'normal';
};

model.ParticleEffect.prototype.destroy = function(emitter)
{
	this.emitter.freeParticles(this.particles);
	this.emitter.unregister(this);
	this.emitter = null;
	this.particles = [];
}

model.ParticleEffect.prototype.create = function(emitters)
{
	Math.seedrandom(this.seed);
	this.emitter = emitters[this.emitterType];
	
	this._create();
	
	this.emitter.register(this);
};

model.ParticleEffect.prototype._getParticle = function()
{
	var particle = this.emitter.getFreeParticle();
	this.particles.push(particle.index);
	
	return particle;
};

model.ParticleEffect.prototype._getColor = function(r,g,b)
{
	return new THREE.Color().setRGB(
		r / 255,
		g / 255,
		b / 255
	); 
};

model.ParticleEffect.prototype._getRandomColor = function()
{
	return new THREE.Color().setRGB(
		1,
		(255 - Math.floor(Math.random()*255)) / 255,
		(Math.floor(Math.random()*155)) / 255
	); 
};


