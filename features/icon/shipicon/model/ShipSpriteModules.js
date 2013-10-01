model.ShipSpriteModules = function ShipSpriteModules(shipDesign, z)
{
	model.ShipSprite.call(this, shipDesign.hullLayout, z);
    this.shipDesign = shipDesign;
};

model.ShipSpriteModules.prototype =  Object.create(model.ShipSprite.prototype);

model.ShipSpriteModules.prototype.requestImageDataToCallback = function()
{
    new model.CompositeImageShipModules(this.shipDesign).getImageDataToCallback(
        this.receiveImageData.bind(this));
};

model.ShipSpriteModules.prototype.update = function(shipDesign)
{
	model.ShipSprite.prototype.update.call(this, shipDesign);

	this.shipDesign = shipDesign;

	new model.CompositeImageShipModules(this.shipDesign)
        .getImageDataToCallback(this.receiveImageData.bind(this));
};