model.ShipIconEditor = function ShipIconEditor()
{
    model.ShipIcon.call(this);
    this.modulesInside = [];
    this.modulesOutside = [];
    this.modulesOver = [];
};

model.ShipIconEditor.prototype =
    Object.create(model.ShipIcon.prototype);


model.ShipIconEditor.prototype.createSprites = function()
{
	var shipDesign = this.getShipDesign();

    if ( ! shipDesign)
        return;

    this.sprites.hull = new model.ShipSpriteHull(shipDesign, 5);
    this.sprites.grid = new model.SpriteGrid(
    	new model.GridLayout(new model.TileLayout(), this.getHullLayout()), 1);

    this.addObject(this.sprites.hull.getObject3d());
    this.addObject(this.sprites.grid.getObject3d());

    this.modulesInside = this.updateOrCreateModules(this.modulesInside, "inside", 2);
    this.modulesOutside = this.updateOrCreateModules(this.modulesOutside, "outside", 3);
    this.modulesOver = this.updateOrCreateModules(this.modulesOver, "over", 6);

    this.created = true;

    return this;
};

model.ShipIconEditor.prototype.updateSprites = function()
{
    this.sprites.hull.update(this.getShipDesign());
    this.modulesInside = this.updateOrCreateModules(this.modulesInside, "inside", 2);
    this.modulesOutside = this.updateOrCreateModules(this.modulesOutside, "outside", 3);
    this.modulesOver = this.updateOrCreateModules(this.modulesOver, "over", 6);
};

model.ShipIconEditor.prototype.setMode = function(mode)
{
    switch(mode)
    {
        case 0:
            this.sprites.hull.setZPosition(5);
            //this.sprites.hull.show();
            this.modulesOutside.forEach(function(entry){entry.icon.show()});
            break;
        case 1:
            this.sprites.hull.setZPosition(0);
            this.modulesOutside.forEach(function(entry){entry.icon.hide()});
            //this.sprites.hull.hide();
            break;
    }
};
