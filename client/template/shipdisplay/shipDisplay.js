Template.shipDisplay = _.extend(Template.shipDisplay, BaseTemplate);

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
        self.handle = Deps.autorun(function(){self.data.handle(self.data);});
    }
};
