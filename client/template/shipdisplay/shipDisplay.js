Template.shipDisplay = _.extend(Template.shipDisplay, BaseTemplate);

Template.shipDisplay.created = function()
{
    console.log('created');
    Session.set('selected_module', null);
};

Template.shipDisplay.rendered = function()
{
    var self = this;
    if ( ! self.data.shipView)
    {
        console.log("construct shipview");

        self.data.shipView = new self.data.viewClass(
            jQuery(self.find('div.displayLarge .displayTarget'))
        );

        self.data.handle(self.data);
    }

    if (! self.handle)
    {
        self.handle =
            Deps.autorun(function(){self.data.handle(self.data);});
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

        console.log(mode);

        Session.set('shipEditor_viewMode', mode);
    }
});