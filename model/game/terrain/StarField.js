model.StarField = function StarField(gameScene, seed, count)
{
    this.gameScene = gameScene;
    this.seed = seed;
    this.count = count;

    this.particles = [];
    this.emitter = null;
};

model.StarField.prototype.create = function()
{
    this.emitter = new model.ParticleEmitter(
        this.getParticles(),
        {
            texture: THREE.ImageUtils.loadTexture( "/terrain/star1.png" )
        }
    );

    this.gameScene.terrainScene.add(this.emitter.getObject3d());
};

model.StarField.prototype.getParticles = function()
{
    if (this.particles.length == 0)
    {
        console.log("pärt");
        this.particles.push(new model.Particle({
            alive: 1.0,
            position: new THREE.Vector3(0,0,0)
        }))
    }

    return this.particles;
};