var ShipLayout = function ShipLayout(args)
{
    if (! args.hullName)
        throw "Ship layout needs hullname";

    this.width = args.width | 90;
    this.height = args.height | 27;
    this.tileScale = args.tileScale | 30;

    this.hullName = args.hullName;
};