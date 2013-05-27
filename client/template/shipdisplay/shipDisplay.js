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
            var id = Session.get("selected_ship");
            var ship = ShipDesigns.findOne({_id: id});

            console.log("before ship");
            if ( ! ship)
                return;

            console.log("render");
            if (! Template.shipDisplay.shipView)
            {
                Template.shipDisplay.shipView = new model.ShipView(
                    jQuery('div.displayLarge')
                );
            }

            Template.shipDisplay.shipView.drawImages(ship);
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
        var id = Session.get("selected_ship");
        var ship = ShipDesigns.findOne({_id: id});

        if ( ! ship)
            return;

        var pos = Template.shipDisplay.shipView.getClickedTile(
            window.Tools.getMouseCoordinatesInElement(event));

        var moduleId = Session.get('selected_module');
        var module = ModuleLayouts.findOne({'_id': moduleId});

        if (moduleId == 'remove')
        {
            ship.removeModule(pos);
        }
        else if (module)
        {
            ship.placeModule(module, pos);
        }

    }
});

Template.shipDisplay.events({
    'mousemove .shipDisplay.clickCatcher': function (event) {
        var id = Session.get("selected_ship");
        var ship = ShipDesigns.findOne({_id: id});

        if ( ! ship || ! Template.shipDisplay.shipView)
            return;

        var pos = Template.shipDisplay.shipView.getClickedTile(
            window.Tools.getMouseCoordinatesInElement(event));

        var lastPos = Session.get("mouseover_tile");
        if ( ! lastPos || pos.x != lastPos.x || pos.y != lastPos.y)
        {
            Session.set("mouseover_tile", pos);
            var moduleLayout = ModuleLayouts.findOne(
                {'_id': Session.get('selected_module')});

            if ( ! moduleLayout)
            {
                return;
            }

            var modulePlacing = new model.ShipDisplayPlacingModule(
                ship, jQuery('div.displayLarge'), 'modulePlacing', moduleLayout, pos);

            modulePlacing.start();

            Template.shipDisplay.modulePlacing = modulePlacing;
        }

    }
});

Template.shipDisplay.events({
    'mouseout .shipDisplay.clickCatcher': function (event) {
        if (Template.shipDisplay.modulePlacing)
            Template.shipDisplay.modulePlacing.clear();
    }
});

Template.clickCatcher.removeClass = function()
{
    return Session.get('selected_module') == 'remove' ? 'activeRemove' : '';
};

Template.clickCatcher.width = function()
{
    return window.innerWidth - 400;
};

Template.clickCatcher.height = function()
{
    return getHeight();
};