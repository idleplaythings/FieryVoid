model.ShipView = function ShipView(target)
{
    this.target = target;

    this.shiphullimage = null;
    this.outerHull = null;
    this.hullGrid = null;
    this.modulesInside = null;
    this.modulesOutside = null;

    this.create();
};

model.ShipView.prototype.create = function()
{

    this.outerHull =
        new model.ShipDisplayOuterHull(this.target, 'outerhull');
    this.hullGrid =
        new model.ShipDisplayGrid(this.target, 'hullgrid');
    this.modulesInside =
        new model.ShipDisplayModules(this.target, 'moduleInside', 'inside');
    this.modulesOutside =
        new model.ShipDisplayModules(this.target, 'moduleOutside', 'outside');
};

model.ShipView.prototype.drawImages = function(ship)
{
    this.outerHull.start(ship);
    this.hullGrid.start(ship);
    this.modulesInside.start(ship);
    this.modulesOutside.start(ship);
};

model.ShipView.prototype.getClickedTile = function(pos)
{
    return this.hullGrid.getClickedTile(pos);
};