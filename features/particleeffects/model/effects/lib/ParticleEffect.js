if ( typeof effect === 'undefined')
    effect = {};

if ( typeof effect.particle === 'undefined')
    effect.particle = {};
  
effect.particle.Effect = function ParticleEffect(emitterType, seed, turn)
{
	this.emitter = null;
	this.particles = [];
	this.seed = seed || Math.random();
	this.turn = turn;
	console.log(this.turn);
	
	this.emitterType = emitterType || 'normal';
};

effect.particle.Effect.prototype.getTurn = function()
{
	if (this.turn === undefined)
		throw new Error("Particle effect needs a turn!");

	return this.turn;
};

effect.particle.Effect.prototype.destroy = function()
{
	//this.emitter.freeParticles(this.particles);
	this.emitter.unregister(this);
	this.emitter = null;
	this.particles = [];
};

effect.particle.Effect.prototype.create = function(emitters)
{
	Math.seedrandom(this.seed);
	this.emitter = emitters[this.emitterType];
	
	this._create();
	
	this.emitter.register(this);
};

effect.particle.Effect.prototype._getParticle = function()
{
	var particle = this.emitter.getFreeParticle();
	this.particles.push(particle.index);
	
	return particle;
};

effect.particle.Effect.prototype._getColor = function(r,g,b)
{
	return new THREE.Color().setRGB(
		r / 255,
		g / 255,
		b / 255
	); 
};

effect.particle.Effect.prototype._getRandomColor = function()
{
	return new THREE.Color().setRGB(
		1,
		(255 - Math.floor(Math.random()*255)) / 255,
		(Math.floor(Math.random()*155)) / 255
	); 
};


