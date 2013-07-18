model.ShipSpriteHull = function ShipSpriteHull(shipDesign)
{
    model.ShipSprite.call(this, shipDesign);
    this.z = 1;
};

model.ShipSpriteHull.prototype =  Object.create(model.ShipSprite.prototype);

model.ShipSpriteHull.prototype.requestImageDataToCallback = function()
{
    new model.CompositeImageShipHull(this.shipDesign).getImageDataToCallback(
        jQuery.proxy(this.receiveImageData, this));
};