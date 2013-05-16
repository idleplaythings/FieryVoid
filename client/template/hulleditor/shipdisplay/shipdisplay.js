Template.shipdisplay.created = function()
{

}

Template.shipdisplay.rendered = function()
{

    var self = this;
    self.outerHullCanvas = self.find('.outerhull');

    if (! self.handle)
    {
        self.handle = Deps.autorun(function () {
            var ship = Session.get('selectedShip');

            if ( ! ship)
                return;

            console.log(self.outerHullCanvas);
            self.outerHull = model.ShipDisplayOuterHull(ship, self.outerHullCanvas);
        });
    }
}

Template.shipdisplay.width = function()
{
    return window.innerWidth;
}

Template.shipdisplay.height = function()
{
    return window.innerHeight;
}