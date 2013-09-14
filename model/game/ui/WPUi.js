model.WaypointUi = function WaypointUi()
{
    this.uiElement = null;
};

model.WaypointUi.prototype.getUi = function()
{
    if ( ! this.uiElement)
    {
        this.createUiElement();
    }

    return this.uiElement;
};

model.WaypointUi.prototype.createUiElement = function()
{
    var container = jQuery('#waypointUi');
    if (container.length === 0)
    {
        var container = jQuery('<div id="waypointUi"></div>');
        container.appedTo("body");
        this.uiElement = container;
    }
    else
    {
        this.uiElement = container;
    }

};

