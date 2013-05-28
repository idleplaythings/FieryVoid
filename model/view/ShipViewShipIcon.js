model.ShipViewShipIcon = function ShipViewShipIcon(target)
{
    model.ShipView.call(this, target);
    this.target = target;

    this.create();
};

model.ShipViewShipIcon.prototype = Object.create(model.ShipView.prototype);

model.ShipViewShipIcon.prototype.create = function()
{
    this.modulesOutside =
        new model.ShipDisplayModules(this.target, 'moduleOutside', 'outside');
    this.outerHull =
        new model.ShipDisplayOuterHull(this.target, 'outerhull');
};

model.ShipViewShipIcon.prototype.drawImages = function(ship)
{
    if ( ! ship)
        return;

    this.modulesOutside.start(ship);
    this.outerHull.start(ship);
};
