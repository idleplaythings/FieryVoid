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

    this.public = args.public || false;
};

model.ShipDesign.prototype.calculateWeaponArcs = function(arcService)
{
    this.modules.filter(function(module){
        return module.weapon;
    }).forEach(function(module){
        module.weapon.calculateWeaponArcs(this, arcService);
    }, this);
};


model.ShipDesign.prototype.getModuleByOnShipId = function(id)
{
    return this.modules.filter(function(module){return module.idOnShip == id;})[0];
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

model.ShipDesign.prototype.getMass = function()
{
    var mass = 0;
    this.modules.forEach(
        function(module){mass += module.getMass();}
    );

    return mass;
};

model.ShipDesign.prototype.calculateCenterOfMass = function()
{
    var totalMass = this.getMass();
    var x = 0;
    var y = 0;

    this.modules.forEach(
        function(module)
        {
            var pos = module.getCenterPosition();
            var mass = module.mass;

            x += mass * pos.x;
            y += mass * pos.y;
        }
    );

    return {x: x / totalMass, y: y / totalMass};
};

model.ShipDesign.prototype.calculateMomentOfIntertia = function()
{
    var massCenter = this.calculateCenterOfMass();
    var moment = 0;

    this.modules.forEach(
        function(module)
        {
            var distance = MathLib.distance(massCenter, module.getCenterPosition());
            var mass = module.mass;

            moment += mass * Math.pow(distance, 2);
        }
    );

    return moment;
};
