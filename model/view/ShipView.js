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

    this.hullGrid =
        new model.ShipDisplayGrid(this.target, 'hullgrid');
    this.modulesInside =
        new model.ShipDisplayModules(this.target, 'moduleInside', 'inside');
    this.modulesOutside =
        new model.ShipDisplayModules(this.target, 'moduleOutside', 'outside');
    this.outerHull =
        new model.ShipDisplayOuterHull(this.target, 'outerhull');

    this.hullView();
};

model.ShipView.prototype.drawImages = function(ship)
{
    if ( ! ship)
        return;

    this.hullGrid.start(ship);
    this.modulesInside.start(ship);
    this.modulesOutside.start(ship);
    this.outerHull.start(ship);
};

model.ShipView.prototype.gridView = function()
{
    this.outerHull.setZIndex(1).setOpacity(0.3);
    this.hullGrid.setZIndex(2).setOpacity(1);
    this.modulesInside.setZIndex(3).setOpacity(1);
    this.modulesOutside.setOpacity(0);
};

model.ShipView.prototype.hullView = function()
{
    this.outerHull.setZIndex(2).setOpacity(1);
    this.hullGrid.setOpacity(0);
    this.modulesInside.setOpacity(0);
    this.modulesOutside.setZIndex(1).setOpacity(1);
};

model.ShipView.prototype.getClickedTile = function(pos)
{

    return this.hullGrid.getClickedTile(pos);
};
