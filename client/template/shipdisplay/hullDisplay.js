Template.hullDisplay.created = function()
{

};

Template.hullDisplay.hasSelectedHullLayout = function()
{
    return Session.get("selected_hullLayout");
};

Template.hullDisplay.rendered = function()
{
    var self = this;

    if (! self.handle)
    {
        self.handle = Deps.autorun(function () {
            var hullLayoutId = Session.get("selected_hullLayout");
            var hullLayout = HullLayouts.findOne({_id: hullLayoutId});

            console.log("hull rendaus");

            if ( ! hullLayout)
                return;

            var outerHullCanvas = jQuery('canvas.shipDisplay.outerhull')[0];
            var gridCanvas = jQuery('canvas.shipDisplay.hullgrid')[0];

            self.shipView = new model.ShipView(
                hullLayout, outerHullCanvas, gridCanvas);
        });
    }
};

var getHeight = function()
{
    return window.innerHeight - 30;
};

Template.hullDisplay.width = function()
{
    return window.innerWidth - 400;
};

Template.hullDisplay.height = function()
{
    return getHeight();
};

Template.hullDisplay .events({
    'click .hullLayout': function () {
        Session.set('selected_hullLayout', this._id);
    }
});