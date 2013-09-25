model.MovementFactory = function MovementFactory(
    timelineFactory, coordinateConverter, dispatcher, uiResolver)
{
    this.timelineFactory = timelineFactory;
    this.waypointUi = new model.RadialMenu(
        'waypointUi',
        this.createWaypointUiButtons(),
        coordinateConverter,
        dispatcher,
        uiResolver,
        {hideAfterClick: true}
    );
};

model.MovementFactory.prototype.createMovement = function(timelineId)
{
    return new model.Movement(
        this.timelineFactory.getTimeline(timelineId),
        this.waypointUi
    );
};

model.MovementFactory.prototype.createWaypointUiButtons = function()
{
    return [
        new model.WaypointMenuButton('X',
            function(movement, waypoint)
            {
                movement.deleteWaypoint(waypoint.time - 9);
            },
            function(movement, waypoint)
            {
                console.log("should show remove");
                return waypoint.time != 0;
            }
        ),
        new model.WaypointMenuButton('ᐅ',
            function(movement, waypoint)
            {
                movement.jump(waypoint);
            },
            function(movement, waypoint)
            {
                return movement.canJump(waypoint);
            }
        )
    ];
};