model.ShipDesign = function ShipDesign(args)
{
    if ( ! args)
        args = [];

    this.owner = args.owner;
    this._id = args._id || null;
    this.name = args.name || 'unnamed';

    this.hullLayout = args.hullLayout || null;
    this.hullColor = args.hullColor || null;
    this.modules = args.modules || [];
    this.armor = args.armor || {};

    this.public = args.public || false;
};

model.ShipDesign.prototype.getMovementAbility = function(){
    return this.hullLayout.getMovementAbility();
};

model.ShipDesign.prototype.serializeArmor = function(){
    var armor = {};
    Object.keys(this.armor).forEach(function(key){
        if(this.armor[key]){
            armor[key] = this.armor[key].className;
        }
    }, this);

    console.log(armor);
    return armor;
};

model.ShipDesign.prototype.setArmor = function(tile1, tile2, armor){

    if ( ! armor){
        delete this.armor[tilesToArmorId(tile1, tile2)];
    }
    else
    {
        this.armor[tilesToArmorId(tile1, tile2)] = armor;
    }
};

var tilesToArmorId = function(tile1, tile2){

    if (tile1.y < tile2.y){
        var o = tile1;
        tile1 = tile2;
        tile2 = o;
    }

    if (tile1.y == tile2.y){
        if (tile1.x < tile2.x){
            var o = tile1;
            tile1 = tile2;
            tile2 = o;
        }
    }

    return tile1.x+'x'+tile1.y+'-'+tile2.x+'x'+tile2.y;
}

model.ShipDesign.prototype.getArmor = function(tile1, tile2){
    return this.armor[tilesToArmorId(tile1, tile2)];
};

model.ShipDesign.prototype.getColor = function()
{
    if (this.hullColor)
        return this.hullColor;

    return this.hullLayout.color;
};

model.ShipDesign.prototype.getPatternColor = function()
{
    return '255,234,0';
};

model.ShipDesign.prototype.onFailedLoad = function()
{
    return null;
};

model.ShipDesign.prototype.validateVariable = function(name, value)
{
    if (name === "public")
    {
        return value === true || value === false;
    }
    else if (name === "name")
    {
        return new RegExp(/^([a-zA-Z0-9]+\s?)*$/).exec(value);
    }
    else if (name === "hullColor")
    {
        return new RegExp(/^\d{1,3},\s\d{1,3},\s\d{1,3}$/).exec(value);
    }

    return false;
};

model.ShipDesign.prototype.getModuleInPosition = function(pos)
{
    for (var i in this.modules)
    {
        var module = this.modules[i];
        if (module.occupiesPosition(pos))
            return module;
    }

    return null;
};

model.ShipDesign.prototype.getPositionInIcon = function(pos)
{
    return this.getCoordinateTool().convertGridToCanvas(pos);
};

model.ShipDesign.prototype.getCoordinateTool = function()
{
    var gridWidth = this.hullLayout.width;
    var gridHeight = this.hullLayout.height;
    var tileScale = this.hullLayout.tileScale;

    return new model.CoordinateConverter(
        {width: gridWidth * tileScale, height: gridHeight * tileScale},
        {width: gridWidth, height: gridHeight},
        tileScale
    );
};

model.ShipDesign.prototype.getPositionInIconRelativeFromCenter = function(pos)
{
    pos = this.getPositionInIcon(pos);

    var hullScale = this.hullLayout.tileScale;
    var center = {
        x: (this.hullLayout.width/2)*hullScale,
        y: (this.hullLayout.height/2)*hullScale
    };

    return {
        x: pos.x - center.x,
        y: -pos.y + center.y
    };
};
