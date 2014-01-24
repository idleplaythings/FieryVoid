model.ParticleEffectTrail = function ParticleEffectTrail(time, type, args)
{
	if ( ! args)
		args = {};
	
	this.type = type || 'smoke';
	var blending = this.type == 'smoke' ? 'normal' : 'additive';
	
	model.ParticleEffect.call(this, blending, args.seed);
	
	this.path = args.path;
	this.time = Math.floor(time);
	this.fadeTime = args.fadeTime || 4000
	this.duration = args.duration || 10000;
	this.endTime = this.duration  + this.fadeTime;
	
	this.startSize = args.startSize || 16 + Math.random() * 16;
	this.endSize = args.endSize || 64 + Math.random() * 64;
	
	this.variance = args.variance || 5;
	
	this.speed = args.speed || 1
	this.ring = args.ring || false
	
	this.seed = args.seed || Math.random();
	
};

model.ParticleEffectTrail.prototype =  Object.create(model.ParticleEffect.prototype);

model.ParticleEffectTrail.prototype._create = function()
{

	switch (this.type)
	{
		case 'smoke':
			this._createSmoke();
			break;
			
		case 'fire':
			this._createFire();
			break;
			
		default:
			this.createGas();
			break;
	}
};


model.ParticleEffectTrail.prototype._createSmoke = function()
{
	var time = this.time;
	var step = this.duration / this.path.length;
	
	var color = this._getSmokeColor();
	
	this.path.forEach( function(position){
		var particle = this._getParticle();
		
		particle
			.setSize(Math.random() * this.variance + this.startSize + 10)
			.setSizeChange(32)
			.setOpacity(Math.random() * 0.2 + 0.1)
			.fadeIn(time, 100)
			.fadeOut(time + 2000, this.fadeTime) 
			.setColor(this._getSmokeColor())
			.setPosition(position)
			.setAngle(Math.random()* 360)
			.setTexture(particle.textures.gas)
			.setAngleChange(Math.random()*20)
			.activateAt(time);
			
		time += step;
	}, this);
};

model.ParticleEffectTrail.prototype._createFire = function()
{
	var time = this.time;
	var step = this.duration / this.path.length;
	
	var color = this._getYellowColor();
	
	this.path.forEach( function(position){
		var particle = this._getParticle();
		
		particle
			.setSize(Math.random() * this.variance + this.startSize + 20)
			//.setSizeChange(32)
			.setOpacity(1.0)
			.fadeIn(time, 100)
			.fadeOut(time + 100, 100) 
			.setColor(color)
			.setPosition(position)
			.setAngle(Math.random()* 360)
			.setTexture(particle.textures.glow)
			.setAngleChange(Math.random()*20)
			.activateAt(time);
			
		time += step;
	}, this);
};

model.ParticleEffectTrail.prototype._getSmokeColor = function()
{
	var c = (Math.random()*50 + 20) / 255;
	return new THREE.Color().setRGB(
		c,
		c,
		c + 0.05
	); 
};

model.ParticleEffectTrail.prototype._getYellowColor = function()
{
	return new THREE.Color().setRGB(
		1,
		(Math.floor(Math.random()*20) + 115) / 255,
		(Math.floor(Math.random()*10) + 120) / 255
	); 
};
