Template.shipEditor = _.extend(Template.shipEditor, BaseTemplate);

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

Template.shipEditor.isGridView = function()
{
    return ! Session.get('shipEditor_viewMode');
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


Template.hullApperanceMenu = _.extend(Template.hullApperanceMenu, BaseTemplate);
Template.hullApperanceMenu.rendered = function()
{
    if (! self.handle)
    {
        self.handle =
            Deps.autorun(function(){
                Template.hullApperanceMenu.initColorPicker();
            });
    }
    else
    {
        Template.hullApperanceMenu.initColorPicker();
    }
};

Template.hullApperanceMenu.initColorPicker = function()
{
    var color = Template.hullApperanceMenu.getFromSelectedLayout('hullColor');
    jQuery("#hullColor").spectrum({
        color: "rgb("+color+")",
        preferredFormat: "rgb",
        showButtons: false,
        showInput: true,
        change: Template.hullApperanceMenu.hullColorChanged
    });
}

Template.hullApperanceMenu.hullColorChanged = function(color)
{
  console.log("change, color: " + color);

  var pattern = new RegExp(/^rgb\((.+)\)$/);
  var cleanColor = pattern.exec(color)[1];

  Template.hullApperanceMenu.handleDetailChange('hullColor', cleanColor);
};