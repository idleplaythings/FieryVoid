model.ModuleIconPlacing = function ModuleIconPlacing(gameScene, dispatacher, tilePlacingModule)
{
    model.ModuleIcon.call(this, gameScene, dispatacher);
    this.setTypes(["inside", "over"]);
    this.setZ(10);
    this.tilePlacingModule = tilePlacingModule;
};

model.ModuleIconPlacing.prototype =
    Object.create(model.ModuleIcon.prototype);

model.ModuleIconPlacing.prototype.createSprites = function()
{
    var module = this.getModuleLayout();

    if ( ! module)
        return;

	this.sprites.under = new model.ModuleSprite(module, 'under', -1);
    this.sprites.inside = new model.ModuleSprite(module, 'inside', 4);
    this.sprites.over = new model.ModuleSprite(module, 'over', 6);
    this.sprites.grid = new model.SpriteGrid(
        new model.GridLayout(this.tilePlacingModule, module), 10);

	this.addObject(this.sprites.under);
    this.addObject(this.sprites.inside);
    this.addObject(this.sprites.over);
    this.addObject(this.sprites.grid);

    this.created = true;
};

model.ModuleIconPlacing.prototype.setShipDesign = function(shipDesign)
{
    this.tilePlacingModule.shipDesign = shipDesign;
};

model.ModuleIconPlacing.prototype.changePositionOnShipDesign = function(pos)
{
    this.tilePlacingModule.setPosition(pos);
    this.sprites.grid.update(this.getModuleLayout());
};

model.ModuleIconPlacing.prototype.updateSprites = function()
{
    model.ModuleIcon.prototype.updateSprites.call(this);
    this.sprites.grid.update(this.getModuleLayout());
};
