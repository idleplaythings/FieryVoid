model.ShipIcon = function ShipIcon(gameScene, dispatcher)
{
    model.Icon.call(this);
    this.ThreeIconGroup = null;
    this.created = false;
    this.hidden = false;
    this.modulesOver = [];
    this.modulesUnder = [];
    
    this.gameScene = gameScene;
    this.dispatcher = dispatcher;
    
    this.iconEffectManager = null;
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
    this.sprites.selected = new model.ShipSpriteSelected(shipDesign, 0).hide();

	this.modulesUnder = this.updateOrCreateModules(this.modulesOver, "under", -1);
    this.modulesOver = this.updateOrCreateModules(this.modulesOver, "over", 6);

    this.sprites.silhouette.uniforms.opacity.value = 0.5;

    this.addObject(this.sprites.silhouette.getObject3d());
    this.addObject(this.sprites.inside.getObject3d());
    this.addObject(this.sprites.hull.getObject3d());
    this.addObject(this.sprites.modules.getObject3d());
    this.addObject(this.sprites.selected.getObject3d());
    
    this.iconEffectManager = new model.EffectManager(this.gameScene, this.dispatcher, this.ThreeIconGroup);

    this.created = true;

};

model.ShipIcon.prototype.updateOrCreateModules = function(list, type, z)
{
    var shipDesign = this.getShipDesign();
    var positionService = new model.ShipDesignPositionService(shipDesign);

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
        
        if ( ! found && module.image.getByType(type))
        {
            var newEntry = {
                position: module.position,
                direction: module.direction,
                _id: module._id,
                remove: false,
                icon: new model.ModuleSprite(module, type, z)
                    .setPosition(positionService.getModuleCenterPositionInScene(module))
            };
            newModules.push(newEntry);
            module.icon[type] = newEntry.icon;
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

model.ShipIcon.prototype.setDamageLookup = function(type, data, data2)
{
	this.sprites[type].setDamageOverlay(data, data2);
};

model.ShipIcon.prototype.select = function()
{
	this.sprites.selected.show();
};

model.ShipIcon.prototype.deselect = function()
{
	this.sprites.selected.hide();
};
