model.ShipDisplayOuterHull = function ShipOuterHullDisplay(ship, target)
{
    model.ShipDisplay.call(this, ship, target, "shipOuterHull");

    console.log(ship);
    ship.outerHullLarge.getImageDataToCallback($.proxy(this.receiveImageData, this));
}

model.ShipDisplayOuterHull.prototype = Object.create(this.model.ShipDisplay.prototype);