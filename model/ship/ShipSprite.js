model.ShipSprite = function ShipSprite(shipDesign)
{
    this.shipDesign = shipDesign;
    this.object3d = null;
    this.initialScale = null;
    this.z = 0;
};

model.ShipSprite.prototype =  Object.create(model.Sprite.prototype);

model.ShipSprite.prototype.getObject3d = function()
{
    this.object3d = this.createObject3d();
    this.setInitialScale();
    this.requestImageDataToCallback();

    return this.object3d;
};

model.ShipSprite.prototype.requestImageDataToCallback = function()
{

};

model.ShipSprite.prototype.setInitialScale = function()
{
    var width = this.shipDesign.hullLayout.width;
    var height = this.shipDesign.hullLayout.height;
    var scale = this.shipDesign.hullLayout.tileScale;

    this.object3d.scale.set(width*scale, height*scale, 1);
};

model.ShipSprite.prototype.receiveImageData = function(data)
{
    this.object3d.material.map = this.createTexture(data);
};