effect.particle.Bolt = function Bolt(args)
{
	console.log("bolt", args)
	effect.particle.Effect.call(this, 'additive', null, args.turn);

	this.start = args.start;
	this.end = args.end;
	this.velocity = args.velocity;
	this.startTime = args.startTime;
	this.endTime = args.endTime;
};

effect.particle.Bolt.prototype =  Object.create(effect.particle.Effect.prototype);

effect.particle.Bolt.prototype._create = function()
{
	this.createBolt(this.emitter, 128, this.getRed(), 0);

	for (var i = 0; i<2; i++){
		this.createBolt(this.emitter, 128, this.getRed(), -10*i);
	}

	this.createBolt(this.emitter, 64, this.getCoreColor(), 20);
};

effect.particle.Bolt.prototype.createBolt = function(emitter, size, color, offset, time)
{

	if ( ! offset)
		offset = 0;

	if ( ! time)
		time = 0;
		
	var particle = this._getParticle();
	var activationTime = this.startTime + time;
	var fadeOutAt = this.endTime + time;
	
	var start = new THREE.Vector3(this.start.x, this.start.y, 0)
	var end = this.end;
	
	var vel = new THREE.Vector3(this.end.x, this.end.y, 0)
		.sub(new THREE.Vector3(this.start.x, this.start.y, 0));
		
	var angle = MathLib.radianToDegree(Math.atan2(vel.y, vel.x));
	
	start = start.add(vel.clone().normalize().multiplyScalar(offset));
	vel = vel.normalize().multiplyScalar(this.velocity);
	
	particle
		.setSize(size)
		.setOpacity(1.0)
		.fadeIn(activationTime, 0.01)
		.fadeOut(fadeOutAt, 0.001) 
		.setColor(color)
		.setPosition(start)
		.setVelocity(vel)
		.setAngle(angle)
		.setTexture(particle.textures.bolt)
		.activateAt(activationTime);
};

effect.particle.Bolt.prototype.getCoreColor = function()
{
	return new THREE.Color().setRGB(
		255,
		255,
		255
	); 
};

effect.particle.Bolt.prototype.getRed = function()
{
	return new THREE.Color().setRGB(
		255,
		0,
		0
	); 
};

effect.particle.Bolt.prototype.getSmokeColor = function()
{
	var c = (Math.random()*50 + 20) / 255;
	return new THREE.Color().setRGB(
		c,
		c,
		c + 0.05
	); 
};

effect.particle.Bolt.prototype.getRandomColor = function()
{
	return new THREE.Color().setRGB(
		1,
		(255 - Math.floor(Math.random()*255)) / 255,
		(Math.floor(Math.random()*155)) / 255
	); 
};

effect.particle.Bolt.prototype.getYellowColor = function()
{
	return new THREE.Color().setRGB(
		1,
		(Math.floor(Math.random()*20) + 235) / 255,
		(Math.floor(Math.random()*10) + 130) / 255
	); 
};
