model.HullLayout = function HullLayout(args)
{
    if (! args.hullImgName)
        throw "Ship layout needs hullName";

    this.hullImgName = args.hullImgName;

    this._id = args._id || null;
    this.name = args.name || 'unnamed';
    this.width = args.width || 30;
    this.height = args.height || 30;
    this.tileScale = args.tileScale || 30;
    this.disabledTiles = args.disabledTiles || [];
    this.tileHeights = args.tileHeights || [];
    this.color = args.color || '100,100,100';

    this.deprecated = args.deprecated || false;
    this.published = args.published || false;
};

model.HullLayout.prototype.publish = function()
{
    Meteor.call(
        'HullLayoutPublish',
        this._id,
        this.hullImgName,
        function(err, result){}
    );
};

model.HullLayout.prototype.isDisabledTile = function(pos)
{
    var i = pos.y * this.width + pos.x;

    return this.disabledTiles.indexOf(i) >= 0;
};

model.HullLayout.prototype.isUnavailableTile = function(pos)
{
    if (pos.x < 0 || pos.x > this.width || pos.y < 0 || pos.y > this.height-1)
        return true;

    if (this.isDisabledTile(pos))
        return true;

    return false;
};

model.HullLayout.prototype.getTileHeight = function(pos)
{
    var i = pos.y * this.width + pos.x;

    for (var k in this.tileHeights)
    {
        var tileAndHeight = this.tileHeights[k];
        if (tileAndHeight.tile == i)
            return tileAndHeight.height;
    }

    return 1;
};

model.HullLayout.prototype.toggleDisabledTile = function(pos)
{
    var i = pos.y * this.width + pos.x;

    Meteor.call(
        'HullLayoutToggleDisabled',
        this._id,
        i,
        function(err, result){}
    );
};

model.HullLayout.prototype.setTileHeight = function(pos, height)
{
    var i = pos.y * this.width + pos.x;

    Meteor.call(
        'HullLayoutSetTileHeight',
        this._id,
        i,
        height,
        function(err, result){}
    );
}

model.HullLayout.prototype.updateIfDifferent = function(name, value)
{
    if ( ! this[name])
        throw "Trying to change HullLayout value '" + name
            +"' that does not exist";

    if (this[name] != value)
    {
        this[name] = value;
        this.updateValue(name, value);
    }
};

model.HullLayout.prototype.updateValue = function(name, value)
{
    var updateObject = {};
    updateObject[name] = value;

    Meteor.call(
        'HullLayoutUpdate',
        this._id,
        updateObject,
        function(err, result){
            console.log('Hull layout ' +name + ' updated to ' + value);
        }
    );
};