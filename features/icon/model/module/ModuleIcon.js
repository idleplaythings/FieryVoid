model.ModuleIcon = function ModuleIcon(gameScene, dispatcher)
{
    model.Icon.call(this);
    this.types = [];
    this.module = null;
    this.hidden = true;
    this.z = 0;

    this.gameScene = gameScene;
    this.dispatcher = dispatcher;
};

model.ModuleIcon.prototype =
    Object.create(model.Icon.prototype);

model.ModuleIcon.prototype.setTypes = function(types){
    this.types = types;
};

model.ModuleIcon.prototype.setZ = function(z){
    this.z = z;
};

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

    //TODO: make sure that module icon is not added too often
    console.log('adding to scene, should this happen so often?', this.getThreeObject())
    this.gameScene.addToScene(this.getThreeObject());
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
