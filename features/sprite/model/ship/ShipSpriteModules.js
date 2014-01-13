if ( typeof model === 'undefined')
    model = {};

model.ShipSpriteModules = function ShipSpriteModules(shipDesign, z, types)
{
	model.ShipSprite.call(this, shipDesign.hullLayout, z);
    this.shipDesign = shipDesign;
    this.types = types || ['outside', 'hull'];
    console.log(this.types);
};

model.ShipSpriteModules.prototype =  Object.create(model.ShipSprite.prototype);

model.ShipSpriteModules.prototype.requestImageDataToCallback = function()
{
    new model.CompositeImageShipModules(this.shipDesign, this.types).getImageDataToCallback(
        this.receiveImageData.bind(this));
        
	new model.CompositeImageShipModulesNormalMaps(this.shipDesign, this.types)
       .getImageDataToCallback(this.receiveNormalMapData.bind(this));
};

model.ShipSpriteModules.prototype.update = function(shipDesign)
{
	model.ShipSprite.prototype.update.call(this, shipDesign);

	this.shipDesign = shipDesign;

	new model.CompositeImageShipModules(this.shipDesign, this.types)
        .getImageDataToCallback(this.receiveImageData.bind(this));
        
	new model.CompositeImageShipModulesNormalMaps(this.shipDesign, this.types)
       .getImageDataToCallback(this.receiveNormalMapData.bind(this));
};
