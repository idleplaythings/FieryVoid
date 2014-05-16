model.ShipIconHull = function ShipIconHull(gameScene, dispatcher)
{
	model.ShipIcon.call(this, gameScene, dispatcher);
};

model.ShipIconHull.prototype =
    Object.create(model.ShipIcon.prototype);


model.ShipIconHull.prototype.createSprites = function()
{
    this.sprites.hull = new model.ShipSpriteHull(this.shipDesign);
    this.sprites.grid = new model.ShipSpriteGrid(this.shipDesign.hullLayout);

    this.addObject(this.sprites.hull);
    this.addObject(this.sprites.grid);
    this.created = true;
};
