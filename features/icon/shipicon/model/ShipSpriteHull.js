model.ShipSpriteHull = function ShipSpriteHull(shipDesign, z)
{
    model.ShipSprite.call(this, shipDesign.hullLayout, z);
    this.shipDesign = shipDesign;
};

model.ShipSpriteHull.prototype =  Object.create(model.ShipSprite.prototype);

model.ShipSpriteHull.prototype.requestImageDataToCallback = function()
{
    new model.CompositeImageShipHull(this.shipDesign)
       .getImageDataToCallback(this.receiveImageData.bind(this));

    new model.CompositeImageShipHullBumpMap(this.shipDesign)
       .getImageDataToCallback(this.receiveBumpMapData.bind(this));
};

model.ShipSpriteHull.prototype.update = function(shipDesign)
{
	model.ShipSprite.prototype.update.call(this, shipDesign);

	this.shipDesign = shipDesign;

	new model.CompositeImageShipHull(this.shipDesign)
        .getImageDataToCallback(this.receiveImageData.bind(this));

    new model.CompositeImageShipHullBumpMap(this.shipDesign)
       .getImageDataToCallback(this.receiveBumpMapData.bind(this));
};

model.ShipSpriteHull.prototype.receiveImageData = function(data)
{
	model.ShipSprite.prototype.receiveImageData.call(this, data);
 	this.setInitialScale(data);
};

model.ShipSpriteHull.prototype.setInitialScale = function(data)
{
	if ( ! data)
		return;

    this.object3d.scale.set(
    	data.data.width * this.hullLayout.hullScale,
    	data.data.height * this.hullLayout.hullScale, 
    	1
	);
};
