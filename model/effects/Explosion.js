model.Explosion = function Explosion(args)
{
    if ( ! args)
        args = {};

    this.particleCount = args.particleCount || 100;

    model.ParticleEmitter.call(
        this,
        this.createParticles(),
        {
            texture: THREE.ImageUtils.loadTexture( "/terrain/star1.png" ),
        }
    );

    this.particles = [];
    this.emitter = null;

    this.effect = null;
    this.target = null;
};

model.Explosion.prototype = Object.create(model.ParticleEmitter.prototype);

model.Explosion.prototype.explode = function(position, gameScene, target)
{
    this.create();
    this.effect.position = position;
    this.target = target;
    this.target.add(this.effect);
};

model.Explosion.prototype.animate = function()
{
    model.ParticleEmitter.prototype.call(this);

    requestAnimationFrame( jQuery.proxy(this.animate, this) );
    this.animators.forEach(function(a){a.animate()})
    this.render();

};

model.Explosion.prototype.destroy = function()
{
    this.target.remove(this);
};

model.Explosion.prototype.createParticles = function()
{
    if (this.particles.length == 0)
    {
        var count = this.particleCount;
        while(count--)
        {
            this.particles.push(new model.particle());
        }
    }

    return this.particles;
};