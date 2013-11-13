model.Explosion = function Explosion(position, time, args)
{
	if ( ! args)
		args = {};
	
	this.position = position;
	this.time = Math.floor(time);
	this.endTime = this.time + 2000;
	
	this.type = args.type || 'gas';
	this.size = args.size || 16;
	this.speed = args.speed || 1
	this.ring = args.ring || false
	
	this.seed = args.seed || Math.random();
	
	this.particles = [];
	this.emitter = null;
	
};

model.Explosion.prototype.destroy = function(emitter)
{
	this.emitter.unregister(this);
	this.emitter = null;
	this.particles = [];
}

model.Explosion.prototype.create = function(emitter)
{
	Math.seedrandom(this.seed);
	this.emitter = emitter;
	
	switch (this.type)
	{
		case 'gas':
			this.createGas(emitter);
			break;
			
		case 'glow':
			this.createGlow(emitter);
			break;
			
		default:
			this.createGas(emitter);
			break;
	}
	
	this.emitter.register(this);
};

model.Explosion.prototype.createGlow = function(emitter)
{
	//if ( this.ring)
	//	this.createRing(this.size, emitter);
		
	this.createMainGlow(Math.ceil(this.size/8), this.size, emitter);
	this.createCore(this.size, emitter);
	this.createCore(this.size, emitter);
	this.createCore(this.size, emitter);
};


model.Explosion.prototype.createGas = function(emitter)
{
	//if ( this.ring)
	//	this.createRing(this.size, emitter);
		
	this.createShootOffs(Math.ceil(Math.random()*this.size/8 + this.size/8), this.size, emitter);
	this.createMain(Math.ceil(this.size/4), this.size, emitter);
	this.createCore(this.size, emitter);
};

model.Explosion.prototype.createRing = function(size, emitter)
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
		var particle = emitter.getFreeParticle();
		this.particles.push(particle.index);
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

model.Explosion.prototype.createShootOffs = function(amount, radius, emitter)
{
	var size = radius;
	//amount = 1;
	while (amount--)
	{
		var particle = emitter.getFreeParticle();
		this.particles.push(particle.index);
		var activationTime = this.time + Math.floor(Math.random()*300/this.speed);
		var fadeOutAt = activationTime + Math.floor(Math.random()*500/this.speed);
		
		var angle = Math.floor(Math.random()*360);
		var target = MathLib.getPointInDirection(Math.random()*200*this.speed + 100*this.speed, angle, 0, 0);
		
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

model.Explosion.prototype.createCore = function(radius, emitter)
{
	var size = radius;

	var particle = emitter.getFreeParticle();
	this.particles.push(particle.index);
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
		.setAngle(Math.floor(Math.random()*360))
		.setAngleChange(Math.floor(Math.random()*20*this.speed)-10*this.speed)
		.activateAt(activationTime);
		
	
};


model.Explosion.prototype.createMain = function(amount, radius, emitter)
{
	var size = radius*2;
	while (amount--)
	{
		var particle = emitter.getFreeParticle();
		this.particles.push(particle.index);
		var activationTime = this.time + Math.floor(Math.random()*300/this.speed);
		var fadeOutAt = activationTime + Math.floor(Math.random()*500/this.speed);
		
		particle
			.setSize(Math.floor(Math.random()*size) + size/2)
			.setOpacity(Math.random() * 0.3 + 0.4)
			.fadeIn(activationTime, Math.random()*50 + 25)
			.fadeOut(fadeOutAt, Math.random()*500/this.speed + 250/this.speed) 
			.setColor(this.getRandomColor())
			.setPosition({
				x: this.position.x + Math.floor(Math.random()*radius)-radius/2,
				y: this.position.y + Math.floor(Math.random()*radius)-radius/2,
				})
			.setAngle(Math.floor(Math.random()*360))
			.setAngleChange(Math.floor(Math.random()*20*this.speed)-10*this.speed)
			.activateAt(activationTime);
		
	}
};

model.Explosion.prototype.createMainGlow = function(amount, radius, emitter)
{
	var size = radius*2;
	while (amount--)
	{
		var particle = emitter.getFreeParticle();
		this.particles.push(particle.index);
		var activationTime = this.time + Math.floor(Math.random()*300/this.speed);
		var fadeOutAt = activationTime + Math.floor(Math.random()*500/this.speed);
		
		particle
			.setSize(Math.floor(Math.random()*size) + size/2)
			.setOpacity(Math.random() * 0.1 + 0.4)
			.fadeIn(activationTime, Math.random()*50 + 25)
			.fadeOut(fadeOutAt, Math.random()*500/this.speed + 250/this.speed) 
			.setColor(this.getRandomColor())
			.setPosition({x:this.position.x, y:this.position.y})
			.setTexture(particle.textures.glow)
			.activateAt(activationTime);
		
	}
};

model.Explosion.prototype.getCoreColor = function()
{
	return new THREE.Color().setRGB(
		255,
		255,
		255
	); 
};

model.Explosion.prototype.getSmokeColor = function()
{
	var c = (Math.random()*50 + 20) / 255;
	return new THREE.Color().setRGB(
		c,
		c,
		c + 0.05
	); 
};

model.Explosion.prototype.getRandomColor = function()
{
	return new THREE.Color().setRGB(
		1,
		(255 - Math.floor(Math.random()*255)) / 255,
		(Math.floor(Math.random()*155)) / 255
	); 
};

model.Explosion.prototype.getYellowColor = function()
{
	return new THREE.Color().setRGB(
		1,
		(Math.floor(Math.random()*20) + 235) / 255,
		(Math.floor(Math.random()*10) + 130) / 255
	); 
};
