model.Module = function Module(moduleLayout, shipDesign, powerStatus, weaponStatus, ewStatus)
{
    this._moduleLayout = moduleLayout;
    this._shipDesign = shipDesign;
    this._powerStatus = powerStatus;
    this._weaponStatus = weaponStatus;
    this._ewStatus = ewStatus;
    this._id = moduleLayout._id + moduleLayout.position.x + moduleLayout.position.y;

    moduleLayout.initTraits(this);
};

model.Module.prototype.equals = function(module){
    return this.getModuleLayout() === module.getModuleLayout();
};

model.Module.prototype.getImageByType = function(type){
    return this._moduleLayout.image.getByType(type);
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

model.Module.prototype.getDirection = function()
{
    return this._moduleLayout.direction;
};

model.Module.prototype.getArcs = function(){
    return new model.WeaponArcService().calculateWeaponArc(
        this._moduleLayout, this._shipDesign
    );
};

model.Module.prototype.occupiesTile = function(tile){
    return this._moduleLayout.occupiesPosition(tile);
};

model.Module.prototype.getPowerStatus = function(){
    return this._powerStatus.getPowerStatus(this);
};


