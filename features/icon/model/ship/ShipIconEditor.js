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

    this.sprites.silhouette = new model.ShipSpriteSilhouette(shipDesign, 0);
    this.sprites.hull = new model.ShipSpriteHull(shipDesign, 5);
    this.sprites.grid = new model.SpriteGrid(
    	new model.GridLayout(new model.TileLayout(), this.getHullLayout()), 1);
    this.sprites.grid.hide();

    this.sprites.silhouette.getObject3d().material.opacity = 0.2;

    this.addObject(this.sprites.silhouette.getObject3d());
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

model.ShipIconEditor.prototype.sethullMode = function()
{
    this.sprites.hull.show();
    this.sprites.silhouette.hide();
    this.sprites.grid.hide();
    this.modulesOutside.forEach(function(entry){entry.icon.show()});
};

model.ShipIconEditor.prototype.setInsideMode = function()
{
    this.modulesOutside.forEach(function(entry){entry.icon.hide()});
    this.sprites.hull.hide();
    this.sprites.grid.hide();
    this.sprites.silhouette.show();
};

model.ShipIconEditor.prototype.showGrid = function()
{
    this.sprites.grid.show();
};


model.ShipIconEditor.prototype.hideGrid = function()
{
    this.sprites.grid.hide();
};
