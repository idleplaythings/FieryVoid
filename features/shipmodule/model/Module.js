model.Module = function Module(moduleLayout, power)
{
    this._moduleLayout = moduleLayout;
    this._power = power;
    this._id = moduleLayout._id + moduleLayout.position.x + moduleLayout.position.y;
};

model.Module.prototype.isWeapon = function() { return Boolean(this.getWeapon()); };
model.Module.prototype.getWeapon = function() { return this._moduleLayout.weapon; };

model.Module.prototype.equals = function(module){
    return this.getModuleLayout() === module.getModuleLayout();
};

model.Module.prototype.getImageByType = function(type){
    return this._moduleLayout.image.getByType(type);
};

model.Module.prototype.getStatusSymbols = function()
{
    return [].concat(this._power.getStatusSymbols(this));
};

model.Module.prototype.getModuleLayout = function()
{
    return this._moduleLayout;
};

model.Module.prototype.getWidth = function()
{
    return this._moduleLayout.getWidth();
};

model.Module.prototype.getHeight = function()
{
    return this._moduleLayout.getHeight();
};

model.Module.prototype.getName = function()
{
    return this._moduleLayout.name;
};

model.Module.prototype.getDescription = function()
{
    return this._moduleLayout.description;
};


