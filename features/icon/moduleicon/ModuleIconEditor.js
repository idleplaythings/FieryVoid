model.ModuleIconEditor = function ModuleIconEditor(types)
{
    model.ModuleIcon.call(this, types);
};

model.ModuleIconEditor.prototype =
    Object.create(model.ModuleIcon.prototype);

model.ModuleIconEditor.prototype.createSprites = function()
{
    model.ModuleIcon.prototype.createSprites.call(this);

    var module = this.getModuleLayout();

    if ( ! module)
        return;

    var z = (5 + this.z);
    this.sprites.grid = new model.SpriteGrid(
        new model.GridLayout(new model.TileLayout(), module), z);

    this.addObject(this.sprites.grid.getObject3d());
};

model.ModuleIconEditor.prototype.updateSprites = function()
{
    model.ModuleIcon.prototype.updateSprites.call(this);
    this.sprites.grid.update(this.getModuleLayout());
};
