model.ShipIconHull = function ShipIconHull()
{
    model.ShipIcon.call(this);
};

model.ShipIconHull.prototype =
    Object.create(model.ShipIcon.prototype);


model.ShipIconHull.prototype.createSprites = function()
{
    this.sprites.hull = new model.ShipSpriteHull(this.shipDesign);
    this.sprites.grid = new model.ShipSpriteGrid(this.shipDesign.hullLayout);

    this.addObject(this.sprites.hull.getObject3d());
    this.addObject(this.sprites.grid.getObject3d());
    this.created = true;
};
