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

model.ShipDesign.prototype.getColor = function()
{
    if (this.hullColor)
        return this.hullColor;

    return this.hullLayout.color;
}

model.ShipDesign.prototype.onFailedLoad = function()
{
    return null;
}

model.ShipDesign.prototype.load = function(id)
{
    var design = ShipDesigns.findOne({_id: id});
    if (! design)
        return null;

    return this.loadWithDocument(design);
};

model.ShipDesign.prototype.loadWithDocument = function(shipDesignDoc)
{
    //this.hullLayout = new model.HullLayout(this.hullLayout);
    shipDesignDoc.hullLayout =
        HullLayouts.findOne({'_id': shipDesignDoc.hullLayoutId})

    if ( ! shipDesignDoc.hullLayout)
        return this.onFailedLoad();

    var invalidModule = false;
    shipDesignDoc.modules = shipDesignDoc.modules.map(
        function(moduleDetails)
        {
            var module = ModuleLayouts.findOne(
                {'_id': moduleDetails.module});

            if (module)
            {
                module.setPosition(moduleDetails.position);
                module.setDirection(moduleDetails.direction);
            }
            else
            {
                invalidModule = true;
            }
            return module;
        });

    if (invalidModule)
        return this.onFailedLoad();

    _.extend(this, shipDesignDoc);
    return this;
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

model.ShipDesign.prototype.removeModule = function(pos)
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

model.ShipDesign.prototype.placeModule = function(module, pos)
{
    if (! module.isValidPosition(this, pos))
        return false;

    Meteor.call(
        'ShipDesignAddModule',
        this._id, module._id, module.direction, pos,
        function(err, result){}
    );
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

model.ShipDesign.prototype.updateIfDifferent = function(name, value)
{
    if ( this[name] == undefined)
        throw "Trying to change Ship design value '" + name
            +"' that does not exist";

    if (this[name] != value)
    {
        this[name] = value;
        this.updateValue(name, value);
    }
};

model.ShipDesign.prototype.updateValue = function(name, value)
{
    Meteor.call(
        'ShipDesignUpdate',
        this._id,
        name,
        value,
        function(err, result){
            console.log('Ship ' +name + ' updated to ' + value);
        }
    );
};