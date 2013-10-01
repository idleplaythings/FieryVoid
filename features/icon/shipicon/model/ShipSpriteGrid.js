model.ShipSpriteGrid = function ShipSpriteGrid(hullLayout, z, args)
{
    model.ShipSprite.call(this, hullLayout, z);
    this.args = args;
};

model.ShipSpriteGrid.prototype =  Object.create(model.ShipSprite.prototype);

model.ShipSpriteGrid.prototype.requestImageDataToCallback = function()
{
    this.receiveImageData(
        new model.Grid(this.hullLayout, this.args).getImageData());
};

model.ShipSpriteGrid.prototype.update = function(shipDesign)
{
	model.ShipSprite.prototype.update.call(this, shipDesign);
	
	this.receiveImageData(
        new model.Grid(this.hullLayout, this.args).getImageData());
};