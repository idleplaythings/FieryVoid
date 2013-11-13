model.EffectParticle = function EffectParticle(material, geometry)
{
    this.material = material;
    this.geometry = geometry;
    this.index = 0;
    
    this.textures = {
		"gas" : {index: 0},
		"bolt" : {index: 1},
		"glow" : {index: 2},
	};
};

model.EffectParticle.prototype.create = function(index)
{
	this.index = index;
	return this;
};

model.EffectParticle.prototype.setInitialValues = function()
{
    this.material.attributes.alive.value[this.index] 				= 0.0;
    this.material.attributes.color.value[this.index]   				= new THREE.Color();
    this.material.attributes.opacity.value[this.index] 				= 1.0;
    
    this.material.attributes.fadeInTime.value[this.index]			= 0.0;
	this.material.attributes.fadeInSpeed.value[this.index]			= 0.0;
	this.material.attributes.fadeOutTime.value[this.index]			= 0.0;
	this.material.attributes.fadeOutSpeed.value[this.index]			= 0.0;
    
    
    this.material.attributes.size.value[this.index]    				= 16.0;
    this.material.attributes.sizeChange.value[this.index]    		= 0.0;
    
    this.material.attributes.angle.value[this.index]   				= 0.0;
    this.material.attributes.angleChange.value[this.index]   		= 0.0;
    this.material.attributes.activationGameTime.value[this.index] 	= 0.0;
    this.material.attributes.velocity.value[this.index] 			= new THREE.Vector3(0,0,0);
    this.material.attributes.acceleration.value[this.index] 		= new THREE.Vector3(0,0,0);
    this.material.attributes.textureNumber.value[this.index] 		= 0.0;
};

model.EffectParticle.prototype.setTexture = function(tex)
{
	if ( ! tex.index)
		throw new Error("You should give texture as particle.textures.textureName.");

    this.material.attributes.textureNumber.value[this.index] = tex.index;
    return this;
};


model.EffectParticle.prototype.setSize = function(size)
{
    this.material.attributes.size.value[this.index] = size;
    return this;
};

model.EffectParticle.prototype.setSizeChange = function(size)
{
    this.material.attributes.sizeChange.value[this.index] = size / 1000;
    return this;
};

model.EffectParticle.prototype.setColor = function(color)
{
    this.material.attributes.color.value[this.index] = color;
    return this;
};

model.EffectParticle.prototype.setOpacity = function(opacity)
{
    this.material.attributes.opacity.value[this.index] = opacity;
    return this;
};

model.EffectParticle.prototype.fadeIn = function(time, speed)
{
	if ( ! speed)
		speed = 1000;
		
    this.material.attributes.fadeInTime.value[this.index] = time;
    this.material.attributes.fadeInSpeed.value[this.index] = speed;
    return this;
};

model.EffectParticle.prototype.fadeOut = function(time, speed)
{
	if ( ! speed)
		speed = 1000;
		
    this.material.attributes.fadeOutTime.value[this.index] = time;
    this.material.attributes.fadeOutSpeed.value[this.index] = speed;
    return this;
};

model.EffectParticle.prototype.setPosition = function(pos)
{
	if ( ! this.geometry.vertices[this.index])
		console.log("illegal index", this.index);
		
	this.geometry.vertices[this.index].set(pos.x, pos.y, 0);
    return this;
};

model.EffectParticle.prototype.setAngle = function(angle)
{
    this.material.attributes.angle.value[this.index] = MathLib.degreeToRadian(angle);
    return this;
};

model.EffectParticle.prototype.setAngleChange = function(angle)
{
    this.material.attributes.angleChange.value[this.index] = 
		MathLib.degreeToRadian(angle/1000);
    return this;
};

model.EffectParticle.prototype._activate = function()
{
    this.material.attributes.alive.value[this.index] = 1;
    return this;
};

model.EffectParticle.prototype.setVelocity = function(velocity)
{
    this.material.attributes.velocity.value[this.index] =
		new THREE.Vector3(velocity.x / 1000, velocity.y / 1000, 0);
    return this;
};

model.EffectParticle.prototype.setAcceleration = function(acceleration)
{
    this.material.attributes.acceleration.value[this.index] =
		new THREE.Vector3(acceleration.x / 1000, acceleration.y / 1000, 0);
    return this;
};

model.EffectParticle.prototype.deactivate = function()
{
    this.setInitialValues();
    return this;
};

model.EffectParticle.prototype.isActive = function(gameTime)
{
	return this.material.attributes.alive.value[this.index] == 1;
};

model.EffectParticle.prototype.activateAt = function(gameTime)
{
	this._activate();
	this.material.attributes.activationGameTime.value[this.index] 	= gameTime;
	return this;
};
