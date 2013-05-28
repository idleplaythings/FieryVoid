
Template.clickCatcher.events({
    'click .shipDisplay.clickCatcher': function (event) {
        var pos = window.Tools.getMouseCoordinatesInElement(event)

        if (this.click)
            this.click(this, pos);
    }
});

Template.clickCatcher.events({
    'mousemove .shipDisplay.clickCatcher': function (event) {
        var pos = window.Tools.getMouseCoordinatesInElement(event)
        if (this.mousemove)
            this.mousemove(this, pos);
    }
});

Template.clickCatcher.events({
    'mouseout .shipDisplay.clickCatcher': function (event) {
        if (this.mouseout)
            this.mouseout(this);
    }
});

Template.clickCatcher.removeClass = function()
{
    return Session.get('selected_module') == 'remove' ? 'activeRemove' : '';
};

Template.clickCatcher = _.extend(Template.clickCatcher, BaseTemplate);