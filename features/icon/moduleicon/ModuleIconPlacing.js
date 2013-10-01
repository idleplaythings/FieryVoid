model.ModuleIconPlacing = function ModuleIconPlacing(tile)
{
    model.ModuleIcon.call(this, ["inside", "over"], 10);
    this.TilePlacingModule = tile;
};

model.ModuleIconPlacing.prototype =
    Object.create(model.ModuleIcon.prototype);

model.ModuleIconPlacing.prototype.createSprites = function()
{
    var module = this.getModuleLayout();

    if ( ! module)
        return;

    this.sprites.inside = new model.ModuleSprite(module, 'inside', 4);
    this.sprites.over = new model.ModuleSprite(module, 'over', 6);
    this.sprites.grid = new model.SpriteGrid(
        new model.GridLayout(this.TilePlacingModule, module), 10);

    this.addObject(this.sprites.inside.getObject3d());
    this.addObject(this.sprites.over.getObject3d());
    this.addObject(this.sprites.grid.getObject3d());

    this.created = true;
};

model.ModuleIconPlacing.prototype.changeShipDesign = function(shipDesign)
{
    this.TilePlacingModule.shipDesign = shipDesign;
};

model.ModuleIconPlacing.prototype.changePositionOnShipDesign = function(pos)
{
    this.TilePlacingModule.setPosition(pos);
    this.sprites.grid.update(this.getModuleLayout());
};

model.ModuleIconPlacing.prototype.updateSprites = function()
{
    model.ModuleIcon.prototype.updateSprites.call(this);
    this.sprites.grid.update(this.getModuleLayout());
};