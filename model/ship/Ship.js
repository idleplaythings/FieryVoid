model.Ship = function Ship(args)
{
    this.id = args.id || null;
    this.layout = args.shipLayout;

    this.outerHullLarge = new model.ShipHullCompositeImage
    (
        this.layout
    );
};

model.Ship.prototype.getOuterHull = function()
{
    return this.outerHullLarge;
}
