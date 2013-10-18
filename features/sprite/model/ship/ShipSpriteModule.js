if ( typeof model === 'undefined')
    model = {};

model.ShipSpriteModule = function ShipSpriteModule(module, shipDesign, type)
{
    this.module = module;
    this.type = type;

    model.ShipSprite.call(this, shipDesign);

    this.z = 2;

    var image = this.module.image.getByType(this.type);

    this.img = new model.CompositeImageModule(
        {shipDesign: shipDesign, imageSrc: image, shadow: true});
    this.setPosition();
};

model.ShipSpriteModule.prototype =  Object.create(model.ShipSprite.prototype);

model.ShipSpriteModule.prototype.requestImageDataToCallback = function()
{
    this.img.getImageDataToCallback(jQuery.proxy(this.receiveImageData, this));
};

model.ShipSpriteModule.prototype.setPosition = function()
{
    this.position = this.shipDesign.getPositionInIconRelativeFromCenter(
        this.module.getCenterPosition());
};

model.ShipSpriteModule.prototype.getObject3d = function()
{
    this.object3d = this.createObject3d();
    this.setInitialScale();

    var x = this.position.x;
    var y = this.position.y;

    this.object3d.position = new THREE.Vector3(x, y, this.z);

    this.requestImageDataToCallback();

    return this.object3d;
};

model.ShipSpriteModule.prototype.setInitialScale = function()
{
    var width = this.module.width;
    var height = this.module.height;
    var scale = this.shipDesign.hullLayout.tileScale;

    this.object3d.scale.set(width*scale, height*scale, 1);
};

model.ShipSpriteModule.prototype.getIconScale = function()
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