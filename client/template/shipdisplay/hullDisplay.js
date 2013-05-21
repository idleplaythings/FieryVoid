Template.hullDisplay.created = function()
{

};

Template.hullDisplay.hasSelectedHullLayout = function()
{
    console.log(Session.get("selected_hullLayout"));
    return Session.get("selected_hullLayout");
};

Template.hullDisplay.rendered = function()
{
    var self = this;
    self.outerHullCanvas = jQuery('canvas.shipDisplay.outerhull');

    if (! self.handle)
    {
        self.handle = Deps.autorun(function () {
            var hullLayoutId = Session.get("selected_hullLayout");

            console.log(hullLayoutId);
            var hullLayout = HullLayouts.findOne({_id: hullLayoutId});
            console.log(hullLayout);

            if ( ! hullLayout)
                return;

            if ( ! self.shiphullimage)
                self.shiphullimage = new model.ShipHullCompositeImage(
                    {hullName: hullLayout.hullImgName});

            console.log(self.outerHullCanvas);
            self.outerHull = model.ShipDisplayOuterHull(
                hullLayout, self.outerHullCanvas, self.shiphullimage);
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