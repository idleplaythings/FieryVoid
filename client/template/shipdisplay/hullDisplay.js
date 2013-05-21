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

            if (hullLayoutId === self.currentHullLayoutId)
            {
                return;
            }

            self.currentHullLayoutId = hullLayoutId;
            var hullLayout = HullLayouts.findOne({_id: hullLayoutId});

            if ( ! hullLayout)
                return;

            self.shiphullimage = new model.ShipHullCompositeImage(
                {hullName: hullLayout.hullImgName});

            var outerHullCanvas = jQuery('canvas.shipDisplay.outerhull')[0];
            self.outerHull = new model.ShipDisplayOuterHull(
                hullLayout, outerHullCanvas, self.shiphullimage);

            var gridCanvas = jQuery('canvas.shipDisplay.hullgrid')[0];
            self.hullGrid = new model.ShipDisplayGrid(hullLayout, gridCanvas)
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