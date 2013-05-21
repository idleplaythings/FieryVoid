model.ShipDisplayOuterHull = function ShipOuterHullDisplay(layout, target, img)
{
    model.ShipDisplay.call(this, layout, target);
    img.getImageDataToCallback(jQuery.proxy(this.receiveImageData, this));
}

model.ShipDisplayOuterHull.prototype = Object.create(model.ShipDisplay.prototype);