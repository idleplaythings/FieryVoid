model.Fleet = function Fleet(args)
{
    if ( ! args)
        args = {};

    this._id = args._id || null;
    this.ships = args.ships || [];
    this.created = args.created || Date.now();
};
