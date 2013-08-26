model.ShipView = function ShipView(target)
{
    this.target = target;

    this.shiphullimage = null;
    this.outerHull = null;
    this.hullGrid = null;
    this.modulesInside = null;
    this.modulesOutside = null;
    this.modulesOver = null;
    this.modulesUnder = null;
    this.view = null;

    this.massCenter = null;

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
    this.modulesOver =
        new model.ShipDisplayModules(this.target, 'moduleOver', 'over', true);
    this.outerHull =
        new model.ShipDisplayOuterHull(this.target, 'outerhull');

    this.massCenter = new model.ShipDisplayMassCenter(this.target, 'massCenter');

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
    this.modulesOver.start(ship);
    this.massCenter.start(ship);
};

model.ShipView.prototype.setView = function(mode)
{
    if (mode == 2)
        this.hullView();
    else
        this.gridView();
}

model.ShipView.prototype.gridView = function()
{
    if (this.view == 'grid')
        return;

    this.modulesOver.setOpacity(0);
    this.outerHull.setZIndex(1).setOpacity(0.3);
    this.hullGrid.setZIndex(2).setOpacity(1);
    this.modulesInside.setZIndex(3).setOpacity(1);
    this.massCenter.setZIndex(4).setOpacity(1);
    this.modulesOutside.setOpacity(0);

    this.view = 'grid'
};

model.ShipView.prototype.hullView = function()
{
    if (this.view == 'hull')
        return;

    this.modulesOver.setZIndex(3).setOpacity(1);
    this.outerHull.setZIndex(2).setOpacity(1);
    this.hullGrid.setOpacity(0);
    this.modulesInside.setOpacity(0);
    this.modulesOutside.setZIndex(1).setOpacity(1);
    this.massCenter.setOpacity(0);

    this.view = 'hull'
};

model.ShipView.prototype.getClickedTile = function(pos)
{

    return this.hullGrid.getClickedTile(pos);
};
