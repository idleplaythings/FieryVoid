model.ShipIconHullEditor = function ShipIconHull(gameScene, dispatcher)
{
    model.ShipIcon.call(this, gameScene, dispatcher);
};

model.ShipIconHullEditor.prototype =
    Object.create(model.ShipIcon.prototype);


model.ShipIconHullEditor.prototype.createSprites = function()
{
	var shipDesign = this.getShipDesign();

    if ( ! shipDesign)
        return;

    this.sprites.hull = new model.ShipSpriteHull(shipDesign, 0);
    this.sprites.grid = new model.SpriteGrid(
    	new model.GridLayout(new model.TileLayout(), this.getHullLayout()), 1);

    this.addObject(this.sprites.hull.getObject3d());
    this.addObject(this.sprites.grid.getObject3d());
    this.created = true;
};

model.ShipIconHullEditor.prototype.updateSprites = function()
{
	this.sprites.hull.update(this.getShipDesign());
	this.sprites.grid.update(this.getHullLayout());
};

