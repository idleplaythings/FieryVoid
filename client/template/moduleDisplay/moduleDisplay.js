Template.moduleDisplay.hasSelectedLayout = function()
{
    return Session.get("selected_moduleLayout");
};

Template.moduleDisplay.rendered = function()
{
    var self = this;

    if (! self.handle)
    {
        self.handle = Deps.autorun(function () {
            var layoutId = Session.get("selected_moduleLayout");
            var layout = ModuleLayouts.findOne({_id: layoutId});

            console.log("module rendaus");

            if ( ! layout)
                return;

            var moduleCanvas = jQuery('canvas.shipDisplay.outerhull')[0];
            var gridCanvas = jQuery('canvas.shipDisplay.hullgrid')[0];

            Template.hullDisplay.view = new model.ModuleView(
                layout, moduleCanvas, gridCanvas);
        });
    }
};

var getHeight = function()
{
    return window.innerHeight - 30;
};

Template.moduleDisplay.width = function()
{
    return window.innerWidth - 400;
};

Template.moduleDisplay.height = function()
{
    return getHeight();
};

Template.moduleDisplay.events({
    'click .shipDisplay.clickCatcher': function (event) {
        console.log('click');
        var hullLayoutId = Session.get("selected_moduleLayout");
        var hullLayout = HullLayouts.findOne({_id: hullLayoutId});

        if ( ! hullLayout)
            return;

        var pos = Template.moduleDisplay.view.getClickedTile(
            window.Tools.getMouseCoordinatesInElement(event));

        console.log(pos);

        if (pos)
            hullLayout.toggleDisabledTile(pos);
    }
});