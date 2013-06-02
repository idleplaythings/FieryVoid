model.ModuleLayout = function ModuleLayout(args)
{
    if (! args.image)
        throw "Module layout needs image";

    this.image = args.image;

    this._id = args._id || null;
    this.name = args.name || 'unnamed';
    this.description = args.description || '';
    this.width = args.width || 10;
    this.height = args.height || 10;
    this.tileScale = args.tileScale || 30;
    this.disabledTiles = args.disabledTiles || [];
    this.outsideTiles = args.outsideTiles || [];
    this.tileHeight = args.tileHeight || 1;

    this.deprecated = args.deprecated || false;
    this.published = args.published || false;

    this.position = {x:0, y:0};
};

_.extend(model.ModuleLayout.prototype, model.ModuleLayoutStorage.prototype);

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