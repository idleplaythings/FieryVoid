model.Star = function Star(args)
{
    model.Particle.call(this, args);

    this.parallaxFactor = args.parallaxFactor || 0;

    this.twinkle = args.twinkle || null;
    this.twinkleVariance = args.twinkleVariance || 0;

    this.twinkleStatus = 0;
    this.twinkleIncrement = 1;
};

model.Star.prototype = Object.create(model.Particle.prototype);

model.Star.prototype.updateMaterial = function(particleMaterial, i)
{
    particleMaterial.attributes.customVisible.value[i] = this.alive;
    particleMaterial.attributes.customColor.value[i]   = this.color;
    particleMaterial.attributes.customOpacity.value[i] = this.opacity;
    particleMaterial.attributes.customSize.value[i]    = this.size;
    particleMaterial.attributes.parallaxFactor.value[i]   = this.parallaxFactor;
};

model.Star.prototype.animate = function(dt)
{
    if ( ! this.twinkle)
        return;

    this.twinkleStatus += this.twinkleIncrement;

    if (this.twinkleStatus > this.twinkle)
        this.twinkleIncrement = -1;
    else if (this.twinkleStatus <= 0)
        this.twinkleIncrement = 1;

    this.opacity =
        (1 - this.twinkleVariance) + this.twinkleVariance*(this.twinkleStatus / this.twinkle);
};

