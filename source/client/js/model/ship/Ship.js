var Ship = function Ship(shiplayout, dispatcher)
{
    this.layout = shiplayout;
    this.outerHullLarge = new ShipHullCompositeImage(this.layout, dispatcher);
};
