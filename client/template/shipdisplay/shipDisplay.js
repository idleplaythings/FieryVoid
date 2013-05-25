Template.shipDisplay.hasSelectedShip = function()
{
    return Session.get("selected_ship");
};

Template.shipDisplay.rendered = function()
{
    var self = this;
    var data = self.data;

    if (! self.handle)
    {
        self.handle = Deps.autorun(function () {
            var hullLayoutId = Session.get("selected_ship");
            var hullLayout = HullLayouts.findOne({_id: hullLayoutId});

            console.log("ship rendaus");

            if ( ! hullLayout)
                return;

            var outerHullCanvas = jQuery('canvas.shipDisplay.outerhull')[0];
            var gridCanvas = jQuery('canvas.shipDisplay.hullgrid')[0];

            Template.hullDisplay.shipView = new model.ShipView(
                hullLayout, outerHullCanvas, gridCanvas);
        });
    }
};

var getHeight = function()
{
    return window.innerHeight - 30;
};

Template.shipDisplay.width = function()
{
    return window.innerWidth - 400;
};

Template.shipDisplay.height = function()
{
    return getHeight();
};

Template.shipDisplay.events({
    'click .shipDisplay.clickCatcher': function (event) {
        console.log('click');
        var hullLayoutId = Session.get("selected_hullLayout");
        var hullLayout = HullLayouts.findOne({_id: hullLayoutId});

        if ( ! hullLayout)
            return;

        var pos = Template.hullDisplay.shipView.getClickedTile(
            window.Tools.getMouseCoordinatesInElement(event));

        console.log(pos);

        if (pos)
            hullLayout.toggleDisabledTile(pos);
    }
});