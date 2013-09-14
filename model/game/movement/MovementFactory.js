model.MovementFactory = function MovementFactory(timelineFactory)
{
    this.timelineFactory = timelineFactory;
    this.waypointUi = new model.WaypointUi();
};

model.MovementFactory.prototype.createMovement = function(timelineId)
{
    return new model.Movement(this.timelineFactory.getTimeline(timelineId));
};