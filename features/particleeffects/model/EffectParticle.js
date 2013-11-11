model.EffectParticle = function EffectParticle(args)
{
    if ( ! args)
        args = {};

    this.position = args.position || new THREE.Vector3();
    this.deactivationGameTime = args.deactivationGameTime || null;
    
    this.material = null;
    this.materialIndex = 0;
};

model.EffectParticle.prototype.setInitialValues = function()
{
    this.material.attributes.alive.value[this.materialIndex] 				= 0.0;
    this.material.attributes.color.value[this.materialIndex]   				= new THREE.Color();
    this.material.attributes.opacity.value[this.materialIndex] 				= 1.0;
    
    this.material.attributes.fadeInTime.value[this.materialIndex]			= 0.0;
	this.material.attributes.fadeInSpeed.value[this.materialIndex]			= 0.0;
	this.material.attributes.fadeOutTime.value[this.materialIndex]			= 0.0;
	this.material.attributes.fadeOutSpeed.value[this.materialIndex]			= 0.0;
    
    
    this.material.attributes.size.value[this.materialIndex]    				= 16.0;
    this.material.attributes.angle.value[this.materialIndex]   				= 0.0;
    this.material.attributes.angleChange.value[this.materialIndex]   		= 0.0;
    this.material.attributes.activationGameTime.value[this.materialIndex] 	= 0.0;
    this.material.attributes.velocity.value[this.materialIndex] 			= new THREE.Vector3(0,0,0);
    this.material.attributes.acceleration.value[this.materialIndex] 		= new THREE.Vector3(0,0,0);
};

model.EffectParticle.prototype.setSize = function(size)
{
    this.material.attributes.size.value[this.materialIndex] = size;
    return this;
};

model.EffectParticle.prototype.setColor = function(color)
{
    this.material.attributes.color.value[this.materialIndex] = color;
    return this;
};

model.EffectParticle.prototype.setOpacity = function(opacity)
{
    this.material.attributes.opacity.value[this.materialIndex] = opacity;
    return this;
};

model.EffectParticle.prototype.fadeIn = function(time, speed)
{
	if ( ! speed)
		speed = 1000;
		
    this.material.attributes.fadeInTime.value[this.materialIndex] = time;
    this.material.attributes.fadeInSpeed.value[this.materialIndex] = speed;
    return this;
};

model.EffectParticle.prototype.fadeOut = function(time, speed)
{
	if ( ! speed)
		speed = 1000;
		
    this.material.attributes.fadeOutTime.value[this.materialIndex] = time;
    this.material.attributes.fadeOutSpeed.value[this.materialIndex] = speed;
    return this;
};

model.EffectParticle.prototype.setPosition = function(pos)
{
    this.position.set(pos.x, pos.y, 0);
    return this;
};

model.EffectParticle.prototype.setAngle = function(angle)
{
    this.material.attributes.angle.value[this.materialIndex] = MathLib.degreeToRadian(angle);
    return this;
};

model.EffectParticle.prototype.setAngleChange = function(angle)
{
    this.material.attributes.angleChange.value[this.materialIndex] = 
		MathLib.degreeToRadian(angle/1000);
    return this;
};

model.EffectParticle.prototype._activate = function()
{
    this.material.attributes.alive.value[this.materialIndex] = 1;
    return this;
};

model.EffectParticle.prototype.setVelocity = function(velocity)
{
    this.material.attributes.velocity.value[this.materialIndex] =
		new THREE.Vector3(velocity.x / 1000, velocity.y / 1000, 0);
    return this;
};

model.EffectParticle.prototype.setAcceleration = function(acceleration)
{
    this.material.attributes.acceleration.value[this.materialIndex] =
		new THREE.Vector3(acceleration.x / 1000, acceleration.y / 1000, 0);
    return this;
};

model.EffectParticle.prototype._deactivate = function()
{
	console.log("deactivating");
    this.setInitialValues();
    return this;
};

model.EffectParticle.prototype.isActive = function(gameTime)
{
	return this.material.attributes.alive.value[this.materialIndex] == 1;
};

model.EffectParticle.prototype.activateAt = function(gameTime)
{
	this._activate();
	this.material.attributes.activationGameTime.value[this.materialIndex] 	= gameTime;
	return this;
};

model.EffectParticle.prototype.deactivateAt = function(gameTime)
{
	this.deactivationGameTime = gameTime;
	return this;
};

model.EffectParticle.prototype.animate = function(gameTime)
{
	if (this.isActive() 
		&& this.deactivationGameTime !== null 
		&& this.deactivationGameTime <= gameTime)
	{
		this.deactivationGameTime = null;
		this._deactivate();
	}
};
