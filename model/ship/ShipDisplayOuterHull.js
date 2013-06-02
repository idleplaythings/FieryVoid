model.ShipDisplayOuterHull = function ShipOuterHullDisplay(
    target, canvasClass)
{
    model.ShipDisplay.call(this, target, canvasClass);
    this.img = null;
}

model.ShipDisplayOuterHull.prototype = Object.create(model.ShipDisplay.prototype);

model.ShipDisplayOuterHull.prototype.start = function(ship)
{
    this.ship = ship;
    this.img = new model.CompositeImageShipHull(ship);
    this.img.getImageDataToCallback(jQuery.proxy(this.receiveImageData, this));
}
