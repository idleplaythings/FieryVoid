model.ModuleIcon = function ModuleIcon(types, z)
{
    model.Icon.call(this);
    this.types = types;
    this.module = null;
    this.hidden = true;
    this.z = z || 0;
};

model.ModuleIcon.prototype =
    Object.create(model.Icon.prototype);

model.ModuleIcon.prototype.create = function(moduleLayout)
{
    var width = moduleLayout ? moduleLayout.getWidth() : 0;
    var height = moduleLayout ? moduleLayout.getHeight() : 0;

    model.Icon.prototype.create.call(
        this, 
        moduleLayout,
        width,
        height
    );
};

model.ModuleIcon.prototype.getModuleLayout = function()
{
    return this.iconObject;
};

model.ModuleIcon.prototype.createSprites = function()
{
    var module = this.getModuleLayout();

    if ( ! module)
        return;

    for (var i in this.types)
    {
        var type = this.types[i];
        var z = parseInt(i, 10) + this.z;
        this.sprites[type] = new model.ModuleSprite(module, type, z);
        this.addObject(this.sprites[type].getObject3d());
    }

    this.created = true;
};

model.ModuleIcon.prototype.updateSprites = function()
{
    this.types.forEach(function(type){
        this.sprites[type].update(this.getModuleLayout());
    }, this);
};
