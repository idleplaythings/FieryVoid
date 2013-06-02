model.Ship = function Ship(args, hullLayout)
{
    if ( ! hullLayout || ! args.owner)
        throw "Ship needs at least hullLayout and owner";

    this.owner = args.owner;
    this._id = args._id || null;
    this.name = args.name || 'unnamed';


    this.hullLayout = hullLayout;
    this.modules = args.modules || [];
};

model.Ship.prototype.removeModule = function(pos)
{
    var module = this.getModuleInPosition(pos);
    if ( ! module)
        return;

    Meteor.call(
        'ShipDesignRemoveModule',
        this._id, module._id, module.position,
        function(err, result){}
    );
};

model.Ship.prototype.placeModule = function(module, pos)
{
    if (! module.isValidPosition(this, pos))
        return false;

    Meteor.call(
        'ShipDesignAddModule',
        this._id, module._id, pos,
        function(err, result){}
    );
};

model.Ship.prototype.getModuleInPosition = function(pos)
{
    for (var i in this.modules)
    {
        var module = this.modules[i];
        if (module.occupiesPosition(pos))
            return module;
    }

    return null;
};

model.Ship.prototype.updateIfDifferent = function(name, value)
{
    if ( ! this[name])
        throw "Trying to change Ship design value '" + name
            +"' that does not exist";

    if (this[name] != value)
    {
        this[name] = value;
        this.updateValue(name, value);
    }
};

model.Ship.prototype.updateValue = function(name, value)
{
    var updateObject = {};
    updateObject[name] = value;

    Meteor.call(
        'ShipDesignUpdate',
        this._id,
        updateObject,
        function(err, result){
            console.log('Ship ' +name + ' updated to ' + value);
        }
    );
};