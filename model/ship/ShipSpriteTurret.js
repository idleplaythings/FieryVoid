model.ShipSpriteTurret = function ShipSpriteTurret(module, shipDesign)
{
    this.module = module;
    this.type = "over";

    model.ShipSprite.call(this, shipDesign);

    var image = this.module.image.getByType(this.type);

    this.img = new model.CompositeImageModule(
        {shipDesign: shipDesign, imageSrc: image, shadow: true});
    this.setPosition();
};

model.ShipSpriteTurret.prototype =  Object.create(model.ShipSprite.prototype);

model.ShipSpriteTurret.prototype.requestImageDataToCallback = function()
{
    this.img.getImageDataToCallback(jQuery.proxy(this.receiveImageData, this));
};

model.ShipSpriteTurret.prototype.setPosition = function()
{
    this.position = this.shipDesign.getPositionInIconRelativeFromCenter(
        this.module.getCenterPosition());
};

model.ShipSpriteTurret.prototype.getSprite = function()
{
    this.sprite = this.createSprite();
    console.log(this.position);

    var x = this.position.x;
    var y = this.position.y;

    this.sprite.position = //new THREE.Vector3(10, 0, 0);
        new THREE.Vector3(x/40, y/40, 1);
    this.setZoom(1);

    this.requestImageDataToCallback();

    return this.sprite;
};

model.ShipSpriteTurret.prototype.setInitialScale = function(sprite)
{
    var width = this.module.width;
    var height = this.module.height;

    this.initialScale = width/height;

    sprite.scale.set(this.initialScale, 1, 1);
};

model.ShipSpriteTurret.prototype.getIconScale = function()
{
    var hullScale = this.shipDesign.hullLayout.tileScale;
    if (window.innerWidth > window.innerHeight)
    {
        return (this.module.height * hullScale) / window.innerHeight;
    }
    else
    {
        return (this.module.width * hullScale) / window.innerWidth;
    }
};