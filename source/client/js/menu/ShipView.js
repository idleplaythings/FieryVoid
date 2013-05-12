var ShipView = function ShipView(ship, target, dispatcher)
{
    this.dispatcher = dispatcher;
    this.outerHull = new ShipOuterHullDisplay(ship, target, dispatcher);
    this.grid = new ShipGrid(ship, target, dispatcher);

};