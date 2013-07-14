model.Star = function Star(args)
{
    this.position = args.position || {x:0, y:0};
    this.scale = args.scale || 1;
    this.opacity = args.opacity || 1.0;
    this.color = args.color || {h:0.54, s:1, l:0.8};
    this.sprite = null;
    this.gameScene = args.gameScene || null;
    this.twinkle = args.twinkle || null;
    this.twinkleVariance = args.twinkleVariance || 0;

    if (this.gameScene && this.twinkle)
    {
        this.gameScene.animators.push(this);
    }

    this.twinkleStatus = 0;
    this.twinkleIncrement = 1;
};

model.Star.prototype.animate = function()
{
    this.twinkleStatus += this.twinkleIncrement;

    if (this.twinkleStatus > this.twinkle)
        this.twinkleIncrement = -1;
    else if (this.twinkleStatus <= 0)
        this.twinkleIncrement = 1;

    this.sprite.material.opacity =
        (1 - this.twinkleVariance) + this.twinkleVariance*(this.twinkleStatus / this.twinkle);
};

model.Star.prototype.getSprite = function()
{
    if ( ! this.sprite)
        this.sprite = this.createSprite();

    return this.sprite;
};

model.Star.prototype.createSprite = function()
{
    var map = THREE.ImageUtils.loadTexture( "/terrain/star1.png" );
    var material =
        new THREE.SpriteMaterial({
            map: map,
            useScreenCoordinates: true,
            sizeAttenuation: false,
            scaleByViewport:false,
            opacity: this.opacity
        } );

    material.color.setHSL(this.color.h, this.color.s, this.color.l);
    var sprite = new THREE.Sprite(material);
    var scale = this.getIconScale() * this.scale * 0.6;

    sprite.scale.set(scale, scale, 1);
    sprite.visible = true;
    sprite.position = new THREE.Vector3(this.position.x, this.position.y, -10);
    sprite.renderDepth = 100;

    return sprite;
};

model.Star.prototype.getIconScale = function()
{
    return window.innerWidth > window.innerHeight ?
        30 / window.innerHeight : 30 / window.innerWidth;
};
