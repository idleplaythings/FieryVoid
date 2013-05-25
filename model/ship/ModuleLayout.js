model.ModuleLayout = function ModuleLayout(args)
{
    if (! args.moduleImgName)
        throw "Ship layout needs hullName";

    this.moduleImgName = args.moduleImgName;

    this._id = args._id || null;
    this.name = args.name || 'unnamed';
    this.description = args.description || '';
    this.width = args.width || 10;
    this.height = args.height || 10;
    this.tileScale = args.tileScale || 30;
    this.disabledTiles = args.disabledTiles || [];
    this.tileHeights = args.tileHeights || [];

    this.deprecated = args.deprecated || false;
    this.published = args.published || false;
};

model.ModuleLayout.prototype.publish = function()
{
    Meteor.call(
        'ModuleLayoutPublish',
        this._id,
        this.moduleImgName,
        function(err, result){}
    );
};

model.ModuleLayout.prototype.isDisabledTile = function(pos)
{
    var i = pos.y * this.width + pos.x;

    return this.disabledTiles.indexOf(i) >= 0;
};

model.ModuleLayout.prototype.getTileHeight = function(pos)
{
    var i = pos.y * this.width + pos.x;
    return this.tileHeights[i] || 1;
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

model.ModuleLayout.prototype.updateIfDifferent = function(name, value)
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