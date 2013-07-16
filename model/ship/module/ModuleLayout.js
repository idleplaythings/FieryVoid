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
    this.traits.every(function(trait) {
        console.log("init trait: " + trait.name);
        var traitName = 'ModuleLayout' + trait.name[0].toUpperCase() + trait.name.slice(1) + 'Trait';
        _.extend(this, model[traitName].prototype);

        console.log("TODO: trait.value as param to trait");
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

    if (pos.x >= this.getWidth() || pos.y >= this.getHeight())
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
    for (var x = 0; x < this.getWidth(); x++)
    {
        for (var y = 0; y < this.getHeight(); y++)
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

model.ModuleLayout.prototype.getTileListIndex = function(pos)
{
    if ((pos.x < 0 || pos.y < 0)
       || (pos.x >= this.getWidth() || pos.y >= this.getHeight()))
            throw new Error("(x: " + pos.x + ",y: "
                + pos.y+" is outside of the module" );

    if (this.direction == 2)
    {
        console.log("direction 2");
        var x = (this.width-1) - pos.y;
        var y = pos.x;

        console.log("x: "+ x + ",y: " + y);
        return y * this.width + x;
    }
    else if (this.direction == 3)
    {
        console.log("direction 3");
        var x = pos.y;
        var y = (this.height-1) - pos.x;

        console.log("x: "+ x + ",y: " + y);
        return y * this.width + x;
    }
    else if (this.direction == 4)
    {
        console.log("direction 4");
        var x = (this.width-1) - pos.x
        var y = (this.height-1) - pos.y;

        console.log("x: "+ x + ",y: " + y);
        return y * this.width + x;
    }
    else
    {
        return pos.y * this.width + pos.x;
    }
};

model.ModuleLayout.prototype.isDisabledTile = function(pos)
{
    return this.disabledTiles.indexOf(this.getTileListIndex(pos)) >= 0;
};

model.ModuleLayout.prototype.isOutsideTile = function(pos)
{
    return this.outsideTiles.indexOf(this.getTileListIndex(pos)) >= 0;
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

model.ModuleLayout.prototype.updateTrait = function(name, value)
{
    this.traits.forEach(function(trait)
    {
        if (trait.name == name && trait.value == value)
        {
            trait.value = value;
        }
    });

    this.updateValue(name, value, true);
};

model.ModuleLayout.prototype.updateIfDifferent = function(name, value)
{
    if ( ! this[name])
        throw new Error("Trying to change ModuleLayout value '" + name
            +"' that does not exist");

    if (this[name] != value)
    {
        this[name] = value;
        this.updateValue(name, value);
    }
};

model.ModuleLayout.prototype.updateValue = function(name, value, trait)
{
    if (! trait)
        trait = false;

    var updateObject = {};
    updateObject[name] = value;

    Meteor.call(
        'ModuleLayoutUpdate',
        this._id,
        updateObject,
        trait,
        function(err, result){
            console.log('ModuleLayout ' +name + ' updated to ' + value);
        }
    );
};