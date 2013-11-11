model.EffectManager = function EffectManager(gameScene, dispatcher)
{
	this.emitter = null;
	this.particleCount = 100000;
	this.create(gameScene, dispatcher);
};

model.EffectManager.prototype.createExplosion = function()
{
	var explosions = 1000;
	while (explosions--)
	{
		var explosion = new model.Explosion({
				x: Math.floor(Math.random() * 10000 - 5000), 
				y: Math.floor(Math.random() * 10000 - 5000), 
			}, 
			Math.random()* 8000,
			Math.random()* 50 + 25);
		explosion.create(this.emitter);
	}
};

model.EffectManager.prototype.getParticles = function()
{
    var particles = [];

    for (var i = 0; i<this.particleCount; i++)
    {
        particles.push(new model.EffectParticle());
    }

    return particles;
};

model.EffectManager.prototype.create = function(gameScene, dispatcher)
{
    this.emitter = new model.EffectParticleEmitter(this.getParticles());
    
    this.emitter.observeZoomLevelChange(dispatcher);

	gameScene.scene.add(this.emitter.getObject3d());
	gameScene.animators.push(this);
    return this;
};

model.EffectManager.prototype.animate = function(gameTime)
{
    this.emitter.animate(gameTime);
};
