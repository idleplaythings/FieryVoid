MovementProcessor = function MovementProcessor()
{
};

MovementProcessor.prototype.processMovement = function(ship, from, to)
{
    var movement = ship.movement;
    var current = (from / 1000);
    var end = to / 1000;
    var route = movement.route;
    var valid = [];

    while(current < end)
    {
        current++;

        var waypoint = route.getAt(current);
        if (waypoint)
            valid.push(waypoint);
    }

    valid.forEach(function(waypoint){
        route.acceptToPast(waypoint);
    });
};