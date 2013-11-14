model.EffectManager = function EffectManager(gameScene, dispatcher)
{
	this.gameScene = gameScene;
	this.dispatcher = dispatcher;
	this.particleCount = 100000;
	
	this.emitter = new model.EffectParticleEmitter(this.particleCount, this.gameScene);
    this.emitter.observeZoomLevelChange(this.dispatcher);
    
	gameScene.animators.push(this);
	
	this.done = [];
	this.toCreate = [];
	this.toDestroy = [];
	this.usageTop = 0;
	
	this.updateFrqeuency = 10000;
	this.lastUpdate = this.updateFrqeuency * -1;
};

model.EffectManager.prototype.createExplosion = function()
{
	Math.seedrandom();
	
	var explosions = 0;
	var objects = [];
	while (explosions--)
	{
		var explosion = new model.Explosion({
				x: Math.floor(Math.random() * 3000 - 1500), 
				y: Math.floor(Math.random() * 3000 - 1500), 
			}, 
			Math.random()* 12000,
			{
				size: Math.random()* 50,
				type: Math.random() > 0.5 ? 'gas' : 'glow',
				speed: Math.random() + 1,
				ring: Math.random() > 0.9 ? true : false
			});
		objects.push(explosion);
	}
	
	//this.register(objects);
	
	
	
	explosion = new model.Explosion({
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
	objects.push(explosion);
	
	this.register(objects);
	
};

model.EffectManager.prototype.getEmitter = function()
{
    return this.emitter;
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
			effect.create(this.getEmitter());
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
	
	this.emitter.freeParticles(toFree);
	
	console.log("particles used:", this.emitter.particleCount - this.emitter.free.length);
	this.emitter.update();
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


