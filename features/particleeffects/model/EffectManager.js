model.EffectManager = function EffectManager(
	gameAnimationLoop, gameScene, dispatcher, target, args)
{
	if ( ! args)
		args = {};
	
	this.target = target || gameScene.scene;
	this.gameScene = gameScene;
	this.dispatcher = dispatcher;
	this.particleCount = args.particleCount || 20000;

	this._gameAnimationLoop = gameAnimationLoop;
	
	this.emitters = {
		additive: this.createEmitter('additive', THREE.AdditiveBlending),
		normal: this.createEmitter('normal')
	}

	this.effects = [];
	this.activeEffects = [];
};

model.EffectManager.prototype.createEmitter = function(name, blending)
{
	var emitter = new model.EffectParticleEmitter(this.target, this.particleCount, this.gameScene, blending)
		.observeZoomLevelChange(this.dispatcher);

	this._gameAnimationLoop.register(emitter);

	return emitter;
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
	effects = [].concat(effects);

	effects.forEach(function(effect){
		var turn = effect.getTurn();
		console.log("registering effect for turn", turn);

		if ( ! this.effects[turn]){
			this.effects[turn] = [];
		}

		this.effects[turn].push(effect);
	}, this);
	/*
	this.toCreate = this.toCreate.concat(effects);
	this.toCreate.sort(function(a, b){ return a.time - b.time; });
	this.toDestroy = this.toDestroy.concat(effects);
	this.toDestroy.sort(function(a, b){ return a.endTime - b.endTime; });
	*/
};

model.EffectManager.prototype.loadTurn = function(turn)
{
	createBatch.call(this, turn);
};

var createBatch = function(turn)
{
	console.log('creating batch for', turn);
	this.activeEffects.forEach(function(effect){
		effect.destroy();
	});

	this.activeEffects = [];

	this.forEmitters(function(emitter){emitter.update();});

	if ( ! this.effects[turn])
		return;

	this.effects[turn].forEach(function(effect){
		effect.create(this.emitters);
		this.activeEffects.push(effect);
	}, this);

	this.forEmitters(function(emitter){emitter.update();});
};

