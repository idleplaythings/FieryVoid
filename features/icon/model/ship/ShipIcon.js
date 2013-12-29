model.ShipIcon = function ShipIcon()
{
    model.Icon.call(this);
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

model.ShipIcon.prototype.showHull = function()
{
    this.sprites.inside.hide();
    this.sprites.modules.show();
    this.sprites.silhouette.hide();
    this.sprites.hull.show();
};

model.ShipIcon.prototype.hideHull = function()
{
    this.sprites.inside.show();
    this.sprites.modules.hide();
    this.sprites.silhouette.show();
    this.sprites.hull.hide();
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

    this.sprites.silhouette = new model.ShipSpriteSilhouette(shipDesign, 0);
    this.sprites.inside = new model.ShipSpriteModules(shipDesign, 1, ['inside']);
    this.sprites.hull = new model.ShipSpriteHull(shipDesign, 5);
    this.sprites.modules = new model.ShipSpriteModules(shipDesign, 2);
    //this.sprites.selected = new model.ShipSpriteSelected(shipDesign);

    this.modulesOver = this.updateOrCreateModules(this.modulesOver, "over", 6);

    this.sprites.silhouette.getObject3d().material.opacity = 0.5;

    this.addObject(this.sprites.silhouette.getObject3d());
    this.addObject(this.sprites.inside.getObject3d());
    this.addObject(this.sprites.hull.getObject3d());
    this.addObject(this.sprites.modules.getObject3d());
    //this.addObject(this.sprites.selected.getObject3d());

    this.created = true;

};

model.ShipIcon.prototype.getModulePositionInIcon = function(module)
{
    if ( ! module)
        return null;

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

model.ShipIcon.prototype.getModulePositionInGame = function(module)
{
    var modulePosition = this.getModulePositionInIcon(module);
    var iconPosition = this.getThreeObject().position;

    var shipFacing = this.getAzimuth();
    modulePosition = MathLib.turnVector(modulePosition, shipFacing);

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

model.ShipIcon.prototype.getModuleOnPosition = function(pos)
{
    if ( ! this.iconObject)
        return null;

    var tile = this.getTileOnPosition(pos);
    var modules = this.getShipDesign().modules;
    for (var i in modules)
    {
        var module = modules[i];
        if (module.occupiesPosition(tile))
            return module;
    }

    return null;
};
