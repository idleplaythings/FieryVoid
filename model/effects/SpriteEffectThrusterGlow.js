model.SpriteEffectThrusterGlow = function SpriteEffectThrusterGlow(module)
{
    this.module = module;
    this.sprite = null;
};

//this.position = this.shipDesign.getPositionInIconRelativeFromCenter(
//    this.module.getCenterPosition());

model.SpriteEffectThrusterGlow.prototype.init = function()
{
    this.module.ship.getIcon().addObject(this.getSprite());
};

model.SpriteEffectThrusterGlow.prototype.animate = function()
{
};

model.SpriteEffectThrusterGlow.prototype.getSprite = function()
{
    if ( ! this.sprite)
    {
        this.sprite = this.createSprite();
        var scale = this.getIconScale(30);
        this.setScale(scale, scale);
        this.setPosition(
            this.module.ship.shipDesign.getPositionInIconRelativeFromCenter(
                this.module.getCenterPosition()));
    }

    return this.sprite;
};

model.SpriteEffectThrusterGlow.prototype.getOrginalPosition = function(pos)
{
    this.sprite.position = new THREE.Vector3(pos.x/40, pos.y/40, 1);
};

model.SpriteEffectThrusterGlow.prototype.setPosition = function(pos)
{
    this.sprite.position = new THREE.Vector3(pos.x/40, pos.y/40, 1);
};

model.SpriteEffectThrusterGlow.prototype.createSprite = function()
{
    var map = THREE.ImageUtils.loadTexture( "/effect/thrusterglow.png" );
    var material =
        new THREE.SpriteMaterial({
            map: map,
            useScreenCoordinates: false,
            scaleByViewport:false
        } );

    var sprite = new THREE.Sprite(material);
    sprite.visible = true;
    sprite.position = new THREE.Vector3(0, 0, 10);
    return sprite;
}

model.SpriteEffectThrusterGlow.prototype.setScale = function(x,y)
{
    this.sprite.scale.set(x, y, 1);
};

model.SpriteEffectThrusterGlow.prototype.getIconScale = function(scale)
{
    return (window.innerWidth > window.innerHeight)
        ? scale / window.innerHeight : scale / window.innerWidth;
};
