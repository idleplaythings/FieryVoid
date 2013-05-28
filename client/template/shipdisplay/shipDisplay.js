Template.shipDisplay = _.extend(Template.shipDisplay, BaseTemplate);

Template.shipDisplay.rendered = function()
{
    var self = this;
    if ( ! self.data.shipView)
    {
        self.data.shipView = new self.data.viewClass(
            jQuery(self.find('div.displayLarge'))
        );
    }

    if (! self.handle)
    {
        self.handle = Deps.autorun(function(){self.data.handle(self.data);});
    }
};
