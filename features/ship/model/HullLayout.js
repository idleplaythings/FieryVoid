model.HullLayout = function HullLayout(args)
{
    if (! args.hullImgName)
        throw "Ship layout needs hullName";

    this.hullImgName = args.hullImgName;

    this._id = args._id || null;
    this.name = args.name || 'unnamed';
    this.width = args.width || 30;
    this.height = args.height || 30;
    this.hullScale = args.hullScale || 1;
    this.disabledTiles = args.disabledTiles || [];
    this.tileHeights = args.tileHeights || [];
    
    this.baseTurnCost = Number(args.baseTurnCost) || 1;
    this.baseTurnDelay = Number(args.baseTurnDelay) || 1;
    this.baseSpeedCost = Number(args.baseSpeedCost) || 1;
    
    
    this.color = args.color || '100,100,100';

    this.deprecated = args.deprecated || false;
    this.published = args.published || false;
};

model.HullLayout.prototype.getMovementAbility = function(){
    return {
        baseTurnCost: this.baseTurnCost,
        baseTurnDelay: this.baseTurnDelay,
        baseSpeedCost: this.baseSpeedCost
    }
};

model.HullLayout.prototype.getWidth = function(){
    return this.width;
};

model.HullLayout.prototype.getHeight = function(){
    return this.height;
};

model.HullLayout.prototype.isDisabledTile = function(pos){
    return this.disabledTiles.indexOf(this.getTileIndex(pos)) >= 0;
};

model.HullLayout.prototype.isUnavailableTile = function(pos){
    if (this.isOutOfBounds(pos))
        return true;

    if (this.isDisabledTile(pos))
        return true;

    return false;
};

model.HullLayout.prototype.isOutOfBounds = function(pos){
    return (pos.x < 0 || pos.x >= this.getWidth() || pos.y < 0 || pos.y >= this.getHeight())
};

model.HullLayout.prototype.getTileHeight = function(pos){
    var i = this.getTileIndex(pos);
    for (var k in this.tileHeights)
    {
        var tileAndHeight = this.tileHeights[k];
        if (tileAndHeight.tile == i)
            return tileAndHeight.height;
    }

    return 1;
};

model.HullLayout.prototype.getTileIndex = function(tile){
    return tile.y * this.width + tile.x;
};