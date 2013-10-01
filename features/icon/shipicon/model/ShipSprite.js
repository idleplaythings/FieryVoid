model.ShipSprite = function ShipSprite(hullLayout, z)
{
    model.SpritePhong.call(this, z);
    this.hullLayout = hullLayout;
    this.object3d = null;
    this.tileSize = 30;
};

model.ShipSprite.prototype =  Object.create(model.SpritePhong.prototype);

model.ShipSprite.prototype.requestImageDataToCallback = function()
{

};

model.ShipSprite.prototype.update = function(shipDesign)
{
    this.hullLayout = shipDesign.hullLayout;
    this.setInitialScale();
};

model.ShipSprite.prototype.setInitialScale = function()
{
    var width = this.hullLayout.width;
    var height = this.hullLayout.height;
    var scale = this.tileSize;

    this.object3d.scale.set(width*scale, height*scale, 1);
};