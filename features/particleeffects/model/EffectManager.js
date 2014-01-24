model.EffectManager = function EffectManager(gameScene, dispatcher, target, args)
{
	if ( ! args)
		args = {};
	
	this.target = target || gameScene.scene;
	this.gameScene = gameScene;
	this.dispatcher = dispatcher;
	this.particleCount = args.particleCount || 20000;
	
	this.emitters = {
		additive: this.createEmitter('additive', THREE.AdditiveBlending),
		normal: this.createEmitter('normal')
	}
    
	gameScene.animators.push(this);
	
	this.done = [];
	this.toCreate = [];
	this.toDestroy = [];
	this.usageTop = 0;
	
	this.updateFrqeuency = args.updateFrqeuency || 10000;
	this.lastUpdate = this.updateFrqeuency * -1;
};

model.EffectManager.prototype.createEmitter = function(name, blending)
{
	return new model.EffectParticleEmitter(this.target, this.particleCount, this.gameScene, blending)
		.observeZoomLevelChange(this.dispatcher);
}

model.EffectManager.prototype.forEmitters = function(callback)
{
	Object.keys(this.emitters).forEach(function (key) {
		callback(this.emitters[key]);
	}, this);
}

model.EffectManager.prototype.createExplosion = function()
{
	Math.seedrandom();
	
	var explosions = 20;
	var objects = [];
	while (explosions--)
	{
		var explosion = new model.ParticleEffectExplosion({
				x: Math.floor(Math.random() * 200 - 100), 
				y: Math.floor(Math.random() * 200 - 100), 
			}, 
			Math.random()* 1000,
			{
				size: Math.random()* 50 + 10,
				type: Math.random() > 0.5 ? 'gas' : 'glow',
				speed: Math.random() + 1,
				ring: Math.random() > 0.9 ? true : false,
				movement: {x:200, y:0}
			});
		objects.push(explosion);
	}
	
	//this.register(objects);
	
	
	
	explosion = new model.ParticleEffectExplosion({
		x: 200, 
		y: 200, 
	}, 
	500,
	{
		size: 50,
		type: 'gas',
		speed: 1,
		ring: true
	});
	
	//this.register(explosion);
	//objects.push(explosion);
	
	
	this.register(objects);
	
};

model.EffectManager.prototype.register = function(effects)
{
	this.toCreate = this.toCreate.concat(effects);
	this.toCreate.sort(function(a, b){ return a.time - b.time; });
	this.toDestroy = this.toDestroy.concat(effects);
	this.toDestroy.sort(function(a, b){ return a.endTime - b.endTime; });
};

model.EffectManager.prototype.createBatch = function(gameTime)
{
	var toFree = [];
	
	while(true)
	{
		if (this.toCreate[0] && this.toCreate[0].time - this.updateFrqeuency <= gameTime)
		{
			var effect = this.toCreate.shift();
			effect.create(this.emitters);
		}
		else
		{
			break;
		}
	}

	while(true)
	{
		if (this.toDestroy[0] && this.toDestroy[0].endTime <= gameTime)
		{
			var effect = this.toDestroy.shift();
			toFree = toFree.concat(effect.particles);
			effect.destroy();
		}
		else
		{
			break;
		}
	}
	
	this.forEmitters(function(emitter){emitter.update();});
}

model.EffectManager.prototype.animate = function(gameTime)
{
	if (gameTime - this.lastUpdate >= this.updateFrqeuency)
	{
		this.lastUpdate = gameTime;
		this.createBatch(gameTime);
	}
};

model.EffectManager.prototype.create = function(gameScene, dispatcher)
{
	
    return this;
};


