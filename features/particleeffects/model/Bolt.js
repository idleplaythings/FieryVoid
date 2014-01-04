model.Bolt = function Explosion(start, end, time, args)
{
	if ( ! args)
		args = {};
	
	this.start = start;
	this.end = end;
	this.time = Math.floor(time);
	this.endTime = this.time + 10000;
	
	this.seed = args.seed || Math.random();
	
	this.particles = [];
	this.emitter = null;
	
};

model.Bolt.prototype.destroy = function(emitter)
{
	this.emitter.unregister(this);
	this.emitter = null;
	this.particles = [];
}

model.Bolt.prototype.create = function(emitter)
{
	Math.seedrandom(this.seed);
	this.emitter = emitter;
	this.createBolt(this.emitter, 128, this.getRed(), 0);
	this.createBolt(this.emitter, 80, this.getRed(), 0);
	this.createBolt(this.emitter, 64, this.getCoreColor(), 30);
	//this.createCore();

	this.emitter.register(this);
};

model.Bolt.prototype.createBolt = function(emitter, size, color, offset)
{

	if ( ! offset)
		offset = 0;
		
	var particle = emitter.getFreeParticle();
	this.particles.push(particle.index);
	var activationTime = this.time;
	var fadeOutAt = this.endTime - 1000;
	
	var start = this.start;
	var end = this.end;
	
	
	var vel = new THREE.Vector3(this.end.x, this.end.y, 0)
		.sub(new THREE.Vector3(this.start.x, this.start.y, 0));
		
	var angle = MathLib.radianToDegree(Math.atan2(vel.y, vel.x));
	
	start = vel.clone().normalize().multiplyScalar(offset);
	vel = vel.normalize().multiplyScalar(1000);
	
	particle
		.setSize(size)
		.setOpacity(Math.random() * 0.1 + 0.9)
		.fadeIn(activationTime, Math.random()*50 + 25)
		.fadeOut(fadeOutAt, Math.random()*500 + 250) 
		.setColor(color)
		.setPosition(start)
		.setVelocity(vel)
		.setAngle(angle)
		.setTexture(particle.textures.bolt)
		.activateAt(activationTime);
		
	
};

model.Bolt.prototype.getCoreColor = function()
{
	return new THREE.Color().setRGB(
		255,
		255,
		255
	); 
};

model.Bolt.prototype.getRed = function()
{
	return new THREE.Color().setRGB(
		255,
		0,
		0
	); 
};

model.Bolt.prototype.getSmokeColor = function()
{
	var c = (Math.random()*50 + 20) / 255;
	return new THREE.Color().setRGB(
		c,
		c,
		c + 0.05
	); 
};

model.Bolt.prototype.getRandomColor = function()
{
	return new THREE.Color().setRGB(
		1,
		(255 - Math.floor(Math.random()*255)) / 255,
		(Math.floor(Math.random()*155)) / 255
	); 
};

model.Bolt.prototype.getYellowColor = function()
{
	return new THREE.Color().setRGB(
		1,
		(Math.floor(Math.random()*20) + 235) / 255,
		(Math.floor(Math.random()*10) + 130) / 255
	); 
};
