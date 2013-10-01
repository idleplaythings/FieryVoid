model.Icon = function Icon()
{
    this.ThreeIconGroup = null;
    this.iconObject = null;
    this.width = null;
    this.height = null;
    this.sprites = {};
};

model.Icon.prototype.create = function(iconObject, width, height)
{
    this.width = width;
    this.height = height;

    this.iconObject = iconObject;
    this.getThreeObject();
    this.createOrUpdateSprites();
    
    return this;
};

model.Icon.prototype.addObject = function(obj)
{
    this.ThreeIconGroup.add(obj);
};

model.Icon.prototype.removeObject = function(obj)
{
    this.ThreeIconGroup.remove(obj);
};

model.Icon.prototype.getThreeObject = function()
{
    if ( ! this.ThreeIconGroup)
    {
        this.ThreeIconGroup = new THREE.Object3D();
        this.ThreeIconGroup.position = new THREE.Vector3(0, 0, 1);
        this.ThreeIconGroup.renderDepth = 10;
    }

    return this.ThreeIconGroup;
};

model.Icon.prototype.hide = function()
{
    for (var i in this.sprites)
        this.sprites[i].hide();

    this.hidden = true;
};

model.Icon.prototype.show = function()
{
    for (var i in this.sprites)
        this.sprites[i].show();

    this.hidden = false;
};

model.Icon.prototype.setPosition = function(pos)
{
    this.getThreeObject().position = new THREE.Vector3(pos.x, pos.y, 0);

    if (this.hidden)
        this.show();

    return this;
};

model.Icon.prototype.getPosition = function()
{
    return this.getThreeObject().position;
};

model.Icon.prototype.createOrUpdateSprites = function()
{
    if (this.created)
        this.updateSprites();
    else
        this.createSprites();
};

model.Icon.prototype.updateSprites = function()
{
 
};

model.Icon.prototype.getTileOnPosition = function(pos)
{
    if ( ! this.iconObject)
        return;

    var scale = 30;
    var iconPosition = this.getThreeObject().position;

    var dimensions = {x:this.width * scale, y:this.height * scale};
    var origo = {
        x: iconPosition.x - (dimensions.x/2),
        y: iconPosition.y - (dimensions.y/2)
    };

    var delta = {x: pos.x - origo.x, y: pos.y - origo.y};

    return {x: Math.floor(delta.x / scale), y: Math.floor(delta.y / scale) };
};

model.Icon.prototype.getClosestTilePosition = function(pos)
{
    var scale = 30;
    //parseInt(this.shipDesign.hullLayout.tileScale, 10);

    var x = pos.x % scale;
    x = x < 0 ? scale + x : x;

    var y = pos.y % scale;
    y = y < 0 ? scale + y : y;

    return {
        x: pos.x - x,
        y: pos.y - y
    };
};
