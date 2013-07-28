model.Star = function Star(args)
{
    model.Particle.call(this, args);
    this.twinkle = args.twinkle || null;
    this.twinkleVariance = args.twinkleVariance || 0;

    this.twinkleStatus = 0;
    this.twinkleIncrement = 1;
};

model.Star.prototype = Object.create(model.Particle.prototype);

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

