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

    this.deprecated = args.deprecated || false;
    this.active = args.active || false;
};

model.HullLayout.prototype.isDisabledTile = function()
{

};

model.HullLayout.prototype.getArgsForInsert = function()
{
    return {
        hullImgName: this.hullImgName,
        active:false,
        deprecated:false,
        name: this.name,
        width: this.width,
        height: this.height,
        tileScale: this.tileScale,
        disabledTiles: this.disabledTiles,
        tileHeights: this.tileHeights
    };
};

model.HullLayout.prototype.updateIfDifferent = function(name, value)
{
    if ( ! this[name])
        throw "Trying to change HullLayout value '" + name
            +"' that does not exist";

    if (this[name] != value)
    {
        this[name] = value;

        if (Meteor.isClient)
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
        }

    }
}