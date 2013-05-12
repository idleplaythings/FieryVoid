var ShipOuterHullDisplay = function ShipOuterHullDisplay(ship, target, dispatcher)
{
    ShipDisplay.call(this, ship, target, "shipOuterHull", dispatcher);

    ship.outerHullLarge.getImageDataToCallback($.proxy(this.receiveImageData, this));
}

ShipOuterHullDisplay.prototype = Object.create(ShipDisplay.prototype);