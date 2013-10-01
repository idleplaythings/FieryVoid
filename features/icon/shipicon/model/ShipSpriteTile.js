model.ShipSpriteTile = function ShipSpriteTile(tilePosition, hullLayout, args)
{
    model.ShipSprite.call(this, hullLayout);
    this.tilePosition = tilePosition;
    this.args = args;
    this.tile = new model.Tile(this.tilePosition, this.hullLayout, this.args);
    this.z = -1;
};

model.ShipSpriteTile.prototype =  Object.create(model.ShipSprite.prototype);

model.ShipSpriteTile.prototype.requestImageDataToCallback = function()
{
    this.receiveImageData(this.tile.getImageData());
};

model.ShipSpriteTile.prototype.update = function(shipDesign)
{
	model.ShipSprite.prototype.update.call(this, shipDesign);
	this.receiveImageData(this.tile.getImageData());
};

model.ShipSpriteTile.prototype.setInitialScale = function(data)
{
    this.object3d.scale.set(
    	30,
    	30, 
    	1
	);
};