Template.shipEditor = _.extend(Template.shipEditor, BaseTemplate);

Template.shipEditor.contextObject = null;

Template.shipEditor.context = function()
{
    if ( ! Template.shipEditor.contextObject)
       Template.shipEditor.contextObject =
           Template.shipEditor.createContext();

    return Template.shipEditor.contextObject;
};

Template.shipEditor.createContext = function()
{
    console.log("createContext");
    return  {
        shipView: null,
        viewClass: model.ShipView,
        lastMouseOverPos: null,
        modulePlacing: null,
        ship: null,
        viewModeHandle: null,
        shipHandle: null,

        viewModeReactivity: function(self)
        {
            self.viewModeHandle = Deps.autorun(function(){
                var viewMode = Session.get('shipEditor_viewMode');

                if (self.shipView)
                {
                    self.shipView.setView(viewMode);
                }
            });
        },

        shipReactivity: function(self)
        {
            self.shipHandle = Deps.autorun(function(){
                var ship = new model.ShipDesign().load(
                    Session.get("selected_ship")
                );
                console.dir(ship);
                self.ship = ship;
                console.log("draw");
                self.shipView.drawImages(ship);
            });
        },

        handle: function(self) {
            self.viewModeReactivity(self);
            self.shipReactivity(self);
        },

        click: function(self, containerPos)
        {
            var ship = self.ship;
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
            var ship = self.ship;
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

Template.shipEditor.created = function()
{
    console.log("shipEditor created");
}

Template.shipEditor.destroyed = function()
{
    if (Template.shipEditor.contextObject)
    {
        Template.shipEditor.contextObject.viewModeHandle.stop();
        Template.shipEditor.contextObject.shipHandle.stop();
        Template.shipEditor.contextObject = null;
    }

    console.log("shipEditor destroyed");
}

Template.shipEditorRightMenu = _.extend(Template.shipEditorRightMenu, BaseTemplate);

Template.shipEditorRightMenu.isGridView = function()
{
    return ! Session.get('shipEditor_viewMode');
};

Template.shipEditorRightMenu.availableModules = function()
{
    return ModuleLayouts.find({'published': true});
};

Template.shipEditorRightMenu.events({
    'click .remove': function () {
        Session.set('selected_module', 'remove');
    }
});

Template.shipEditorRightMenu.selectedClass = function()
{
    return Session.get('selected_module') == 'remove' ? 'selected' : '';
};

Template.shipEditorRightMenu.rendered = function()
{
    if (this.colorPicker)
        this.colorPicker.spectrum("destroy");

    var ship = new model.ShipDesign()
        .load(Session.get("selected_ship"));

    if ( ! ship)
       return;

    this.colorPicker = jQuery("#hullColor");
    this.colorPicker.spectrum({
        color: "rgb("+ship.getColor()+")",
        preferredFormat: "rgb",
        showButtons: false,
        showInput: true,
        change: Template.shipEditorRightMenu.hullColorChanged
    });
};

Template.shipEditorRightMenu.hullColorChanged = function(color)
{
  console.log("change, color: " + color);

  var pattern = new RegExp(/^rgb\((.+)\)$/);
  var cleanColor = pattern.exec(color)[1];

  Template.shipEditorRightMenu.handleDetailChange('hullColor', cleanColor);
};