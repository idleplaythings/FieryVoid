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
};

model.WaypointUi.prototype.createUiElement = function()
{

};

