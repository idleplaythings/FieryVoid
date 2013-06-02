model.ModuleLayoutStorage = function ModuleLayoutStorage(){};

model.ModuleLayoutStorage.prototype.toggleDisabledTile = function(pos)
{
    var i = pos.y * this.width + pos.x;

    Meteor.call(
        'ModuleLayoutToggleDisabled',
        this._id,
        i,
        function(err, result){}
    );
};

model.ModuleLayoutStorage.prototype.toggleOutsideTile = function(pos)
{
    var i = pos.y * this.width + pos.x;

    Meteor.call(
        'ModuleLayoutToggleOutside',
        this._id,
        i,
        function(err, result){}
    );
};

model.ModuleLayoutStorage.prototype.updateIfDifferent = function(name, value)
{
    if ( ! this[name])
        throw "Trying to change ModuleLayout value '" + name
            +"' that does not exist";

    if (this[name] != value)
    {
        this[name] = value;
        this.updateValue(name, value);
    }
};

model.ModuleLayoutStorage.prototype.updateValue = function(name, value)
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