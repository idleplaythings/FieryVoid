model.WaypointMenuButton = function WaypointMenuButton(contents, onClick, shouldDisplay, settings)
{
    model.Button.call(this, contents, this._onClicked.bind(this, onClick), settings);
    this._movement = null;
    this._waypoint = null;
    this._shouldDisplayCallback = shouldDisplay;
};

model.WaypointMenuButton.prototype = Object.create(model.Button.prototype);

model.WaypointMenuButton.prototype._onClicked = function(onClick)
{
    console.log("hi");
    console.log(arguments);
    onClick(this._movement, this._waypoint);
};

model.WaypointMenuButton.prototype.enable = function(movement, waypoint)
{
    this._movement = movement;
    this._waypoint = waypoint;
    this.show();
};

model.WaypointMenuButton.prototype.disable = function()
{
    this._movement = null;
    this._waypoint = null;
    this.hide();
};

model.WaypointMenuButton.prototype.shouldDisplay = function(movement, waypoint)
{
    return this._shouldDisplayCallback(movement, waypoint);
};
