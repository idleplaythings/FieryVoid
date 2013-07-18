model.ShipSpriteTurret = function ShipSpriteTurret(module, shipDesign)
{
    this.module = module;
    this.type = "over";

    model.ShipSprite.call(this, shipDesign);

    this.z = 2;

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

model.ShipSpriteTurret.prototype.getObject3d = function()
{
    this.object3d = this.createObject3d();
    this.setInitialScale();
    console.log(this.position);

    var x = this.position.x;
    var y = this.position.y;

    this.object3d.position = new THREE.Vector3(x, y, this.z);

    this.requestImageDataToCallback();

    return this.object3d;
};

model.ShipSpriteTurret.prototype.setInitialScale = function()
{
    var width = this.module.width;
    var height = this.module.height;
    var scale = this.shipDesign.hullLayout.tileScale;

    this.object3d.scale.set(width*scale, height*scale, 1);
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