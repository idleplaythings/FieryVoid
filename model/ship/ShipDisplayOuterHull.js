model.ShipDisplayOuterHull = function ShipOuterHullDisplay(layout, target, img)
{
    model.ShipDisplay.call(this, layout, target);
    this.img = img;
}

model.ShipDisplayOuterHull.prototype = Object.create(model.ShipDisplay.prototype);

model.ShipDisplayOuterHull.prototype.start = function()
{
    this.img.getImageDataToCallback(jQuery.proxy(this.receiveImageData, this));
}
