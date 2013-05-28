model.ShipViewModule = function ShipViewModule(target)
{
    model.ShipView.call(this, target);
    this.target = target;

    this.create();
};

model.ShipViewModule.prototype = Object.create(model.ShipView.prototype);

model.ShipViewModule.prototype.create = function()
{
    this.modulesInside =
        new model.ShipDisplayModules(this.target, 'moduleInside', 'inside');
    this.hullGrid =
        new model.ShipDisplayGrid(this.target, 'hullgrid');
};

model.ShipViewModule.prototype.drawImages = function(ship)
{
    if ( ! ship)
        return;

    this.modulesInside.start(ship);
    this.hullGrid.start(ship);
};
