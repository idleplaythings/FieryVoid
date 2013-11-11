model.Explosion = function Explosion(position, time, size)
{
	this.time = time;
	this.size = size;
	this.position = position;
	
};

model.Explosion.prototype.create = function(emitter)
{
	this.createRandom(emitter);
}

model.Explosion.prototype.createRandom = function(emitter)
{
	Math.seedrandom();
	this.createMain(Math.ceil(this.size/4), this.size, emitter);
	this.createCore(this.size, emitter);
};

model.Explosion.prototype.createShootOffs = function(amount, radius, emitter)
{
	var size = radius*2;
	while (amount--)
	{
		var particle = emitter.getFreeParticle();
		var activationTime = this.time + Math.floor(Math.random()*300);
		var fadeOutAt = activationTime + Math.floor(Math.random()*500);
		
		particle
			.setSize(Math.floor(Math.random()*size) + size/2)
			.setOpacity(Math.random() * 0.1 + 0.4)
			.fadeIn(activationTime, Math.random()*50 + 25)
			.fadeOut(fadeOutAt, Math.random()*1000 + 500) 
			.setColor(this.getRandomColor())
			.setPosition({
				x: this.position.x + Math.floor(Math.random()*radius)-radius/2,
				y: this.position.y + Math.floor(Math.random()*radius)-radius/2,
				})
			.setAngle(Math.floor(Math.random()*360))
			.setAngleChange(Math.floor(Math.random()*20)-10)
			.activateAt(activationTime);
		
	}	
};

model.Explosion.prototype.createCore = function(radius, emitter)
{
	var size = radius;

	var particle = emitter.getFreeParticle();
	var activationTime = this.time + Math.floor(Math.random()*50);
	var fadeOutAt = activationTime + Math.floor(Math.random()*200) + 300;
	
	particle
		.setSize(Math.floor(Math.random()*size) + size/2)
		.setOpacity(Math.random() * 0.2 + 0.2)
		.fadeIn(activationTime, Math.random()*50 + 25)
		.fadeOut(fadeOutAt, Math.random()*1000 + 500) 
		.setColor(this.getCoreColor())
		.setPosition({
			x: this.position.x, // + Math.floor(Math.random()*radius/10)-radius/5,
			y: this.position.y // + Math.floor(Math.random()*radius/10)-radius/5,
			})
		.setAngle(Math.floor(Math.random()*360))
		.setAngleChange(Math.floor(Math.random()*20)-10)
		.activateAt(activationTime);
		
	
};


model.Explosion.prototype.createMain = function(amount, radius, emitter)
{
	var size = radius*2;
	while (amount--)
	{
		var particle = emitter.getFreeParticle();
		var activationTime = this.time + Math.floor(Math.random()*300);
		var fadeOutAt = activationTime + Math.floor(Math.random()*500);
		
		particle
			.setSize(Math.floor(Math.random()*size) + size/2)
			.setOpacity(Math.random() * 0.1 + 0.4)
			.fadeIn(activationTime, Math.random()*50 + 25)
			.fadeOut(fadeOutAt, Math.random()*1000 + 500) 
			.setColor(this.getRandomColor())
			.setPosition({
				x: this.position.x + Math.floor(Math.random()*radius)-radius/2,
				y: this.position.y + Math.floor(Math.random()*radius)-radius/2,
				})
			.setAngle(Math.floor(Math.random()*360))
			.setAngleChange(Math.floor(Math.random()*20)-10)
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


model.Explosion.prototype.getRandomColor = function()
{
	return new THREE.Color().setRGB(
		1,
		(255 - Math.floor(Math.random()*255)) / 255,
		(Math.floor(Math.random()*155)) / 255
	); 
};
