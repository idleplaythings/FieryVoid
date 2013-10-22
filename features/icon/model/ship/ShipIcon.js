model.ShipIcon = function ShipIcon()
{
    model.Icon.call(this);
    this.shipDesign = null;
    this.ThreeIconGroup = null;
    this.created = false;
    this.hidden = false;
    this.modulesOver = [];
};

model.ShipIcon.prototype =
    Object.create(model.Icon.prototype);

model.ShipIcon.prototype.create = function(shipDesign)
{
    var width = shipDesign ? shipDesign.hullLayout.getWidth() : 0;
    var height = shipDesign ? shipDesign.hullLayout.getHeight() : 0;

    model.Icon.prototype.create.call(
        this, 
        shipDesign,
        width,
        height
    );

    return this;
};

model.ShipIcon.prototype.getShipDesign = function()
{
    return this.iconObject;
};

model.ShipIcon.prototype.getHullLayout = function()
{
    if ( this.iconObject)
        return this.iconObject.hullLayout;
};

model.ShipIcon.prototype.createSprites = function()
{
    var shipDesign = this.getShipDesign();

    if ( ! shipDesign)
        return;

    this.sprites.hull = new model.ShipSpriteHull(shipDesign, 5);
    this.sprites.modules = new model.ShipSpriteModules(shipDesign, 2);
    //this.sprites.selected = new model.ShipSpriteSelected(shipDesign);

    this.modulesOver = this.updateOrCreateModules(this.modulesOver, "over", 6);

    this.addObject(this.sprites.hull.getObject3d());
    this.addObject(this.sprites.modules.getObject3d());
    //this.addObject(this.sprites.selected.getObject3d());

    this.created = true;

};

model.ShipIcon.prototype.getModulePositionInIcon = function(module)
{
    return this.getCustomModulePositionInIcon(module.getCenterPosition());
};

model.ShipIcon.prototype.getCustomModulePositionInIcon = function(modulepos)
{
    var scale = 30;
    var dimensions = {x:this.width * scale, y:this.height * scale};
    var origo = {
        x: (dimensions.x/-2),
        y: (dimensions.y/-2)
    };

    return {
        x: modulepos.x * scale + origo.x,
        y: modulepos.y * scale + origo.y
    };
};

model.ShipIcon.prototype.getModuleTopLeftPosition = function(module)
{
    var modulePosition = this.getCustomModulePositionInIcon(module.getTopLeftPosition());
    var iconPosition = this.getThreeObject().position;

    return {x: iconPosition.x + modulePosition.x, y: iconPosition.y + modulePosition.y};
};

model.ShipIcon.prototype.getModulePosition = function(module)
{
    var modulePosition = this.getModulePositionInIcon(module);
    var iconPosition = this.getThreeObject().position;

    return {x: iconPosition.x + modulePosition.x, y: iconPosition.y + modulePosition.y};
};


model.ShipIcon.prototype.updateOrCreateModules = function(list, type, z)
{
    var shipDesign = this.getShipDesign();

    list.forEach(function(entry){entry.remove = true});
    var newModules = [];

    shipDesign.modules.forEach(function(module){

        var found = false;

        list.forEach(function(entry){
            if (entry.position.x == module.position.x 
                && entry.position.y == module.position.y 
                && entry._id == module._id
                && entry.direction == module.direction)
            {
                entry.remove = false;
                found = true;
            }
        });

        if ( ! found)
        {
            var newEntry = {
                position: module.position,
                direction: module.direction,
                _id: module._id,
                remove: false,
                icon: new model.ModuleSprite(module, type, z)
                    .setPosition(this.getModulePositionInIcon(module))
            };
            newModules.push(newEntry);
            this.addObject(newEntry.icon.getObject3d());
        }

    }, this);


    for (var i = list.length -1; i >= 0; i--)
    {
        var entry = list[i];
        if (entry.remove === true)
        {
            list.splice(i, 1);
            this.removeObject(entry.icon.getObject3d());
        }
    }

    return list.concat(newModules);
};