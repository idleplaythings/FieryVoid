model.ShipSpriteModules = function ShipSpriteModules(shipDesign)
{
    model.ShipSprite.call(this, shipDesign);
};

model.ShipSpriteModules.prototype =  Object.create(model.ShipSprite.prototype);

model.ShipSpriteModules.prototype.requestImageDataToCallback = function()
{
    new model.CompositeImageShipModules(this.shipDesign).getImageDataToCallback(
        jQuery.proxy(this.receiveImageData, this));
};