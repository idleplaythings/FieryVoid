Template.shipEditor.created = function()
{
    console.log("shipEditor created");
}

Template.shipEditor.rendered = function()
{
    if ( ! Template.shipEditor.controller)
    {
        var shipDesignId = Session.get("selected_ship");
        var leftmenu = jQuery('.sidemenu.left');
        var shipview = jQuery('div.displayLarge');
        var modulelist = jQuery('.sidemenu.right .modulelist');
        var shipapperance = jQuery('.sidemenu.right .shipapperance');

        Template.shipEditor.controller =
            new model.ShipEditor(
                shipDesignId, leftmenu, shipview, modulelist, shipapperance, dic.get('model.ShipDesignStorage'));
    }
}

Template.shipEditor.destroyed = function()
{
    if ( Template.shipEditor.controller)
        Template.shipEditor.controller.destroy();

    console.log("shipEditor destroyed");
}


Template.shipEditorRightMenu.isGridView = function()
{
    return ! Session.get('shipEditor_viewMode');
};

Template.shipEditorRightMenu.availableModules = function()
{
    var modules = ModuleLayouts.find({'published': true});
    var finalModules = [];
    modules.forEach(
        function(module){
            module.getAvailableDirections().forEach(
                function(direction){
                    var newModule = new model.ModuleLayout(module);
                    newModule.direction = parseInt(direction, 10);
                    newModule._id += "-" + newModule.direction;
                    finalModules.push(newModule);
            });
    });

    return finalModules;
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

  var pattern = new RegExp(/^rgb\((.+)\)$/);
  var cleanColor = pattern.exec(color)[1];

  Template.shipEditorRightMenu.handleDetailChange('hullColor', cleanColor);
};