model.ShipViewHull = function ShipViewHull(target)
{
    model.ShipView.call(this, target);
    this.target = target;

    this.create();
};

model.ShipViewHull.prototype = Object.create(model.ShipView.prototype);

model.ShipViewHull.prototype.create = function()
{
    this.outerHull =
        new model.ShipDisplayOuterHull(this.target, 'outerhull');
    this.hullGrid =
        new model.ShipDisplayGrid(this.target, 'hullgrid');
};

model.ShipViewHull.prototype.drawImages = function(ship)
{
    if ( ! ship)
        return;

    this.outerHull.start(ship);
    this.hullGrid.start(ship);
};
