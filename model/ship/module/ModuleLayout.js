model.ModuleLayout = function ModuleLayout(args)
{
    if (! args)
        args = {};

    this.image = args.image || null;

    this._id = args._id || null;
    this.name = args.name || 'unnamed';
    this.description = '';
    this.width = args.width || 10;
    this.height = args.height || 10;
    this.tileScale = args.tileScale || 30;
    this.disabledTiles = args.disabledTiles || [];
    this.outsideTiles = args.outsideTiles || [];
    this.tileHeight = args.tileHeight || 1;
    this.allowedDirections = args.allowedDirections || '';
    this.direction = args.direction || 0;

    this.deprecated = args.deprecated || false;
    this.published = args.published || false;

    this.position = args.position || {x:0, y:0};

    this.traits = args.traits || [];

    this.initTraits();
};

model.ModuleLayout.prototype.getWidth = function()
{
    return (this.direction == 2 || this.direction == 3) ? this.height : this.width;
}

model.ModuleLayout.prototype.getHeight = function()
{
    return (this.direction == 2 || this.direction == 3) ? this.width : this.height;
}

model.ModuleLayout.getAvailableTraits = function() {
    var traits = [];

    for (modelName in model) {
        if (modelName.match(/^ModuleLayout\D+Trait$/) !== null) {
            traits.push(modelName);
        }
    }

    return traits;
}

model.ModuleLayout.prototype.initTraits = function() {
    this.traits.every(function(traitName) {
        traitName = 'ModuleLayout' + traitName[0].toUpperCase() + traitName.slice(1) + 'Trait';
        _.extend(this, model[traitName].prototype);
    }, this);
}

model.ModuleLayout.prototype.setDirection = function(direction)
{
    console.log("setting direction: " + direction);
    if (! direction || direction == '0')
    {
        this.direction = 0;
        return;
    }

    if ( this.getAvailableDirections().indexOf(direction) < 0)
    {
        throw new Error("Invalid module direction: '"+direction+"'");
    }
    this.direction = direction;
};

model.ModuleLayout.prototype.getAvailableDirections = function()
{
    return this.allowedDirections.split(',').map(function(value){return parseInt(value)});
};

model.ModuleLayout.prototype.getRotation = function()
{
    console.log(this.direction);
    switch (this.direction)
    {
        case 2:
            return 270;
        case 3:
            return 90;
        case 4:
            return 180;
        default:
            return 0;
    }
};

model.ModuleLayout.prototype.occupiesPosition = function(pos)
{
    var pos = {
        x: pos.x - this.position.x,
        y: pos.y - this.position.y
    };

    if (pos.x < 0 || pos.y < 0)
        return false;

    if (pos.x >= this.width || pos.y >= this.height)
        return false;

    if (this.isDisabledTile(pos))
        return false;

    return true;
};

model.ModuleLayout.prototype.setPosition = function(pos)
{
    this.position = pos;
};

model.ModuleLayout.prototype.isValidPosition = function(ship, pos)
{
    for (var x = 0; x < this.width; x++)
    {
        for (var y = 0; y < this.height; y++)
        {
            if ( ! this.isValidTileForPosition(ship, pos, {x:x, y:y}))
            {
                return false;
            }
        }
    }

    return true;
};

model.ModuleLayout.prototype.isValidTileForPosition  = function(
    ship, pos, tilePos)
{
    var hullLayout = ship.hullLayout;
    var hullLayoutPos = {x: pos.x + tilePos.x, y: pos.y + tilePos.y};

    if (this.isDisabledTile(tilePos))
        return true;

    var hullDisabledTile = hullLayout.isUnavailableTile(hullLayoutPos);
    var outsideTile = this.isOutsideTile(tilePos);

    if (outsideTile != hullDisabledTile)
        return false;

    if ( ! outsideTile && this.tileHeight > hullLayout.getTileHeight(hullLayoutPos))
        return false;

    if (ship.getModuleInPosition(hullLayoutPos))
        return false;

    return true;
};

model.ModuleLayout.prototype.publish = function()
{
    Meteor.call(
        'ModuleLayoutPublish',
        this._id,
        this.image.name,
        function(err, result){}
    );
};

model.ModuleLayout.prototype.isDisabledTile = function(pos)
{
    var i = pos.y * this.width + pos.x;

    return this.disabledTiles.indexOf(i) >= 0;
};

model.ModuleLayout.prototype.isOutsideTile = function(pos)
{
    var i = pos.y * this.width + pos.x;

    return this.outsideTiles.indexOf(i) >= 0;
};

model.ModuleLayout.prototype.getTileHeight = function(pos)
{
    return this.tileHeight;
};



model.ModuleLayout.prototype.toggleDisabledTile = function(pos)
{
    var i = pos.y * this.width + pos.x;

    Meteor.call(
        'ModuleLayoutToggleDisabled',
        this._id,
        i,
        function(err, result){}
    );
};

model.ModuleLayout.prototype.toggleOutsideTile = function(pos)
{
    var i = pos.y * this.width + pos.x;

    Meteor.call(
        'ModuleLayoutToggleOutside',
        this._id,
        i,
        function(err, result){}
    );
};

model.ModuleLayout.prototype.updateIfDifferent = function(name, value)
{
    // if ( ! this[name])
    //     throw "Trying to change ModuleLayout value '" + name
    //         +"' that does not exist";

    if (this[name] != value)
    {
        this[name] = value;
        this.updateValue(name, value);
    }
};

model.ModuleLayout.prototype.updateValue = function(name, value)
{
    var updateObject = {};
    updateObject[name] = value;

    Meteor.call(
        'ModuleLayoutUpdate',
        this._id,
        updateObject,
        function(err, result){
            console.log('ModuleLayout ' +name + ' updated to ' + value);
        }
    );
};