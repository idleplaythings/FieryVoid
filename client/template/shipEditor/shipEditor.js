Template.shipEditor.context = function()
{
    return {
        shipView: null,
        viewClass: model.ShipView,
        lastMouseOverPos: null,
        modulePlacing: null,

        handle: function(self) {
            self.shipView.drawImages(
                ShipDesigns.findOne({_id: Session.get("selected_ship")}),
                Session.get('shipEditor_viewMode')
            );
        },

        click: function(self, containerPos)
        {
            console.log("hi");
            var ship = ShipDesigns.findOne({_id: Session.get("selected_ship")});
            var shipView = self.shipView;

            if ( ! ship || ! shipView)
                return;

            var pos = shipView.getClickedTile(containerPos);

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
        },

        mousemove: function(self, containerPos)
        {
            var ship = ShipDesigns.findOne({_id: Session.get("selected_ship")});
            var shipView = self.shipView;

            if ( ! ship || ! shipView)
                return;

            var pos = shipView.getClickedTile(containerPos);

            var lastPos = self.lastMouseoOverPos;

            if ( ! lastPos || pos.x != lastPos.x || pos.y != lastPos.y)
            {
                self.lastMouseoOverPos = pos;

                var moduleLayout = ModuleLayouts.findOne(
                    {'_id': Session.get('selected_module')});

                if ( ! moduleLayout)
                    return;

                var modulePlacing = new model.ShipDisplayPlacingModule(
                    ship, jQuery('div.displayLarge'), 'modulePlacing', moduleLayout, pos);

                modulePlacing.start();

                self.modulePlacing = modulePlacing;
            }
        },

        mouseout: function(self)
        {
            if (this.modulePlacing)
                this.modulePlacing.clear();
        }
    };
};

Template.availableModuleListing = _.extend(Template.availableModuleListing, BaseTemplate);

Template.availableModuleListing.availableModules = function()
{
    return ModuleLayouts.find({'published': true});
};

Template.availableModuleListing.events({
    'click .remove': function () {
        Session.set('selected_module', 'remove');
    }
});

Template.availableModuleListing.selectedClass = function()
{
    return Session.get('selected_module') == 'remove' ? 'selected' : '';
};





Template.shipMenu = _.extend(Template.shipMenu, BaseTemplate);

Template.shipMenu.designName = function()
{
    return getFromSelectedLayout('name');
};

Template.hullmenu.shipViewModeGrid = function()
{
    return  ! Session.get('shipEditor_viewMode') ? 'active' : '';
};

Template.hullmenu.shipViewModeHull = function()
{
    return Session.get('shipEditor_viewMode') == '2' ? 'active' : '';
};

Template.shipMenu.events({
    'blur input': function (event) {
        handleDetailChange(event.currentTarget);
    },
    'click .publish': function(event) {
        var hullLayoutId = Session.get("selected_hullLayout");
        if (hullLayoutId)
        {
            var layout = HullLayouts.findOne({_id: hullLayoutId});
            if (layout)
            {
                layout.publish();
            }
        }
    },
    'click .shipViewMode': function(event) {
        var currentElement = event.target;
        var mode = jQuery(currentElement).data('view');
        console.log(mode);

        if (mode == 1)
            mode = null;

        Session.set('shipEditor_viewMode', mode);
    }
});

Template.shipMenu.publishedClass = function()
{
    return getFromSelectedLayout('published') ? 'active' : '';
};

function getFromSelectedLayout(name)
{
    var id = Session.get("selected_ship");
    if (id)
    {
        var ship = ShipDesigns.findOne({_id: id});
        if (ship && ship[name])
            return ship[name];
    }

    return '';
}

function handleDetailChange(element)
{
    var name = jQuery(element).attr('name');
    var value = jQuery(element).val();

    var id = Session.get("selected_ship");
    if (id)
    {
        var ship = ShipDesigns.findOne({_id: id});
        if (ship)
        {
            ship.updateIfDifferent(name, value);
        }
    }

}