model.Particle = function Particle(args)
{
    if ( ! args)
        args = {};

    this.position     = args.position || new THREE.Vector3();
    this.velocity     = args.velocity || new THREE.Vector3(); // units per second
    this.acceleration = args.velocity || new THREE.Vector3();

    this.angle             = args.angle || 0;
    this.angleVelocity     = args.angleVelocity || 0; // degrees per second
    this.angleAcceleration = args.angleAcceleration || 0; // degrees per second, per second

    this.size = args.size || 16.0;

    this.color   = args.color || new THREE.Color();
    this.opacity = args.opacity || 1.0;

    this.age   = args.age || 0;
    this.alive = args.alive || 0; // use float instead of boolean for shader purposes
};

model.Particle.prototype.animate = function(dt)
{
    this.position.add( this.velocity.clone().multiplyScalar(dt) );
    this.velocity.add( this.acceleration.clone().multiplyScalar(dt) );

    // convert from degrees to radians: 0.01745329251 = Math.PI/180
    this.angle         += this.angleVelocity     * 0.01745329251 * dt;
    this.angleVelocity += this.angleAcceleration * 0.01745329251 * dt;

    this.age += dt;

    // if the tween for a given attribute is nonempty,
    //  then use it to update the attribute's value

    /*
    if ( this.sizeTween.times.length > 0 )
        this.size = this.sizeTween.lerp( this.age );

    if ( this.colorTween.times.length > 0 )
    {
        var colorHSL = this.colorTween.lerp( this.age );
        this.color = new THREE.Color().setHSL( colorHSL.x, colorHSL.y, colorHSL.z );
    }

    if ( this.opacityTween.times.length > 0 )
        this.opacity = this.opacityTween.lerp( this.age );
    */
}
