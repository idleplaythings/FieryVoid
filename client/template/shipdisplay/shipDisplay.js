Template.shipDisplay = _.extend(Template.shipDisplay, BaseTemplate);

Template.shipDisplay.created = function()
{
    console.log("shipdisplay created");
    Session.set('selected_module', null);
};

Template.shipDisplay.destroyed = function()
{
    console.log("shipdisplay destroyed");
};


Template.shipDisplay.rendered = function()
{
    var self = this;
    console.log("shipdisplay render")

    var found = jQuery(self.find('div.displayLarge .displayTarget .shipDisplay'));

    if ( ! self.data.shipView || found.length == 0)
    {
        console.log("shipview create");
        self.data.shipView = new self.data.viewClass(
            jQuery(self.find('div.displayLarge .displayTarget'))
        );

        self.data.handle(self.data);
    }
};

Template.viewModeButton.activeShipViewMode = function()
{
    return Session.get('shipEditor_viewMode') ? "hull" : "grid";
};

Template.viewModeButton.events({
    'click .shipViewMode': function(event) {
        var currentMode = Session.get('shipEditor_viewMode');
        var mode = (currentMode == 2) ? null : 2

        Session.set('shipEditor_viewMode', mode);
        Session.set('selected_module', null);
    }
});