model.ParticleEffectExplosion = function ParticleEffectExplosion(position, time, args)
{
	if ( ! args)
		args = {};
		
	model.ParticleEffect.call(this, 'additive', args.seed);
	
	this.position = position;
	this.time = Math.floor(time);
	this.endTime = this.time + 2000;
	
	this.type = args.type || 'gas';
	this.size = args.size || 16;
	this.speed = args.speed || 1
	this.ring = args.ring || false
	this.movement = args.movement || {x:0, y:0};
	
};

model.ParticleEffectExplosion.prototype =  Object.create(model.ParticleEffect.prototype);

model.ParticleEffectExplosion.prototype._create = function()
{

	switch (this.type)
	{
		case 'gas':
			this.createGas();
			break;
			
		case 'glow':
			this.createGlow();
			break;
			
		default:
			this.createGas();
			break;
	}
};

model.ParticleEffectExplosion.prototype.createGlow = function()
{
	//if ( this.ring)
	//	this.createRing(this.size, emitter);
		
	this.createMainGlow(Math.ceil(this.size/8), this.size);
	this.createCore(this.size);
	this.createCore(this.size);
	this.createCore(this.size);
};


model.ParticleEffectExplosion.prototype.createGas = function()
{
	//if ( this.ring)
	//	this.createRing(this.size, emitter);
		
	this.createShootOffs(Math.ceil(Math.random()*this.size/8 + this.size/8), this.size);
	this.createMain(Math.ceil(this.size/4), this.size);
	this.createCore(this.size);
};

model.ParticleEffectExplosion.prototype.createRing = function(size)
{
	
	var step = 360 / size;
	var steps = Math.ceil(size);
	
	var distance = size * 3;
	var activation = this.time + Math.floor(Math.random()*300/this.speed);
	var fadeOutAt = activation;
	var fadeOutSpeed = Math.random()*1000 + 1000;
	//amount = 1;
	while (steps--)
	{
		var angle = steps * step;
		var particle = this._getParticle();
		var target = MathLib.getPointInDirection(distance + Math.random()*30, angle, 0, 0);
		
		particle
			.setSize(Math.random() * 50 + 100)
			//.setSizeChange(128)
			.setOpacity(Math.random() * 0.2 + 0.3)
			.fadeIn(activation, 1000)
			.fadeOut(fadeOutAt, fadeOutSpeed) 
			.setColor(this.getSmokeColor())
			.setPosition({x:this.position.x, y:this.position.y})
			.setVelocity(target)
			.setAngle(angle)
			.setTexture(particle.textures.glow)
			.activateAt(activation);
		
	}	
};

model.ParticleEffectExplosion.prototype.createShootOffs = function(amount, radius, emitter)
{
	var size = radius;
	//amount = 1;
	while (amount--)
	{
		var particle = this._getParticle();
		var activationTime = this.time + Math.floor(Math.random()*300/this.speed);
		var fadeOutAt = activationTime + Math.floor(Math.random()*500/this.speed);
		
		var angle = Math.floor(Math.random()*360);
		var target = MathLib.getPointInDirection(Math.random()*200*this.speed + 100*this.speed, angle, 0, 0);
		target.x += this.movement.x;
		target.y += this.movement.x;
		
		particle
			.setSize(Math.floor(Math.random()*size) + size/2)
			.setOpacity(Math.random() * 0.1 + 0.9)
			.fadeIn(activationTime, Math.random()*50 + 25)
			.fadeOut(fadeOutAt, Math.random()*500/this.speed + 250/this.speed) 
			.setColor(this.getYellowColor())
			.setPosition({x:this.position.x, y:this.position.y})
			.setVelocity(target)
			.setAngle(angle)
			.setTexture(particle.textures.bolt)
			.activateAt(activationTime);
		
	}	
};

model.ParticleEffectExplosion.prototype.createCore = function(radius, emitter)
{
	var size = radius;

	var particle = this._getParticle();
	var activationTime = this.time + Math.floor(Math.random()*50/this.speed);
	var fadeOutAt = activationTime + Math.floor(Math.random()*200/this.speed) + 300/this.speed;
	
	particle
		.setSize(Math.floor(Math.random()*size) + size/2)
		.setOpacity(Math.random() * 0.2 + 0.6)
		.fadeIn(activationTime, Math.random()*50 + 25)
		.fadeOut(fadeOutAt, Math.random()*500/this.speed + 250/this.speed) 
		.setColor(this.getCoreColor())
		.setPosition({
			x: this.position.x, // + Math.floor(Math.random()*radius/10)-radius/5,
			y: this.position.y // + Math.floor(Math.random()*radius/10)-radius/5,
			})
		//.setAngle(45)
		.setTexture(particle.textures.glow)
		.setVelocity(this.movement)
		.setAngle(Math.floor(Math.random()*360))
		.setAngleChange(Math.floor(Math.random()*20*this.speed)-10*this.speed)
		.activateAt(activationTime);
		
	
};


model.ParticleEffectExplosion.prototype.createMain = function(amount, radius, emitter)
{
	var size = radius*2;
	while (amount--)
	{
		var particle = this._getParticle();
		var activationTime = this.time + Math.floor(Math.random()*300/this.speed);
		var fadeOutAt = activationTime + Math.floor(Math.random()*500/this.speed);
		
		particle
			.setSize(Math.floor(Math.random()*size) + size/2)
			.setOpacity(Math.random() * 0.3 + 0.4)
			.fadeIn(activationTime, Math.random()*50 + 25)
			.fadeOut(fadeOutAt, Math.random()*500/this.speed + 250/this.speed) 
			.setColor(this._getRandomColor())
			.setPosition({
				x: this.position.x + Math.floor(Math.random()*radius)-radius/2,
				y: this.position.y + Math.floor(Math.random()*radius)-radius/2,
				})
			.setVelocity(this.movement)
			.setAngle(Math.floor(Math.random()*360))
			.setAngleChange(Math.floor(Math.random()*20*this.speed)-10*this.speed)
			.activateAt(activationTime);
		
	}
};

model.ParticleEffectExplosion.prototype.createMainGlow = function(amount, radius, emitter)
{
	var size = radius*2;
	while (amount--)
	{
		var particle = this._getParticle();
		var activationTime = this.time + Math.floor(Math.random()*300/this.speed);
		var fadeOutAt = activationTime + Math.floor(Math.random()*500/this.speed);
		
		particle
			.setSize(Math.floor(Math.random()*size) + size/2)
			.setOpacity(Math.random() * 0.1 + 0.4)
			.fadeIn(activationTime, Math.random()*50 + 25)
			.fadeOut(fadeOutAt, Math.random()*500/this.speed + 250/this.speed) 
			.setColor(this._getRandomColor())
			.setVelocity(this.movement)
			.setPosition({x:this.position.x, y:this.position.y})
			.setTexture(particle.textures.glow)
			.activateAt(activationTime);
		
	}
};

model.ParticleEffectExplosion.prototype.getCoreColor = function()
{
	return new THREE.Color().setRGB(
		255,
		255,
		255
	); 
};

model.ParticleEffectExplosion.prototype.getYellowColor = function()
{
	return new THREE.Color().setRGB(
		1,
		(Math.floor(Math.random()*20) + 235) / 255,
		(Math.floor(Math.random()*10) + 130) / 255
	); 
};
