model.MovementManagement = function MovementManagement(ship, timeline, thrustManager)
{
	this._ship = ship;
	this._timeline = timeline;
	this._thrustManager = thrustManager

	this._start = null;
	this._route = [];
};

model.MovementManagement.prototype = Object.create(model.ShipStatusManager.prototype);

model.MovementManagement.prototype.getCurrentPosition = function(currentTime)
{
    return this.getStartPosition().getPosition();
}

model.MovementManagement.prototype.getStartPosition = function(position)
{

	if ( ! this._start)
	{
		var entry = this._timeline.filter(function(entry){ return entry.name == 'startPosition'}).pop();
		if ( ! entry)
			throw new Error("Ships require a start position, timelineId",  this._timeline._id);

		entry = entry.payload;

		this._start = new model.movement.Position({
			position: new model.hexagon.coordinate.Offset(entry._position).toCube(),
			facing: entry._facing,
			direction: entry._direction,
			speed: entry._speed
		});

        this._resolveRoute();
	}

	return this._start;
}

model.MovementManagement.prototype._resolveRoute = function()
{
    var movements = this._start.getSpeed();
    var modifiers = [];

    // while (movements--) {
    //     if (movements == 3) {
    //         modifiers.push(new model.movement.Action.TurnLeft());
    //     }

    //     if (movements == 0) {
    //         modifiers.push(new model.movement.Action.TurnRight());
    //     }
    //     modifiers.push(new model.movement.Action.Move());
    // }

    modifiers.push(new model.movement.Action.SpeedAccelerate());
    modifiers.push(new model.movement.Action.SpeedAccelerate());
    modifiers.push(new model.movement.Action.SpeedAccelerate());
    modifiers.push(new model.movement.Action.SpeedAccelerate());
    modifiers.push(new model.movement.Action.SpeedAccelerate());
    modifiers.push(new model.movement.Action.SpeedAccelerate());
    modifiers.push(new model.movement.Action.SpeedAccelerate());
    modifiers.push(new model.movement.Action.Move());
    modifiers.push(new model.movement.Action.Move());
    modifiers.push(new model.movement.Action.TurnLeft());
    modifiers.push(new model.movement.Action.Move());
    modifiers.push(new model.movement.Action.Move());
    modifiers.push(new model.movement.Action.Move());
    modifiers.push(new model.movement.Action.TurnRight());
    modifiers.push(new model.movement.Action.Move());
    modifiers.push(new model.movement.Action.TurnRight());
    modifiers.push(new model.movement.Action.Move());
    modifiers.push(new model.movement.Action.TurnRight());
    modifiers.push(new model.movement.Action.Move());
    modifiers.push(new model.movement.Action.TurnRight());
    modifiers.push(new model.movement.Action.Move());
    modifiers.push(new model.movement.Action.TurnRight());
    modifiers.push(new model.movement.Action.Move());
    modifiers.push(new model.movement.Action.TurnRight());
    modifiers.push(new model.movement.Action.Move());
    modifiers.push(new model.movement.Action.Move());

    this._route = new model.movement.Route(this._start, this._getMovementAbility(), modifiers);

    new model.movement.RouteDisplay(this.gameScene, this.gridService).makeItSo(this._route);
}

model.MovementManagement.prototype.setStartPosition = function(position)
{
    this._timeline.add('startPosition', position);
    this._start = position;
}

model.MovementManagement.prototype.getFacing = function(currentTime)
{
    return 0
}

model.MovementManagement.prototype.targetHex = function(hex)
{
    ship.setPosition(this._getScenePosition(gameTime));
    ship.setAzimuth(this.getFacing(gameTime));
};

model.MovementManagement.prototype.animate = function(ship, gameTime)
{
    ship.setPosition(this._getScenePosition(gameTime));
    ship.setAzimuth(this.getFacing(gameTime));
};

model.MovementManagement.prototype._getScenePosition = function(gameTime)
{
    return this.gridService.resolveGameCoordinates(this.getCurrentPosition(gameTime).toOddR());
};

model.MovementManagement.prototype._getMovementAbility = function()
{
    return new model.movement.MovementAbility(
		this.getSpeedCost(),
		// this.getTurnCostSpeedFactor(),
        0.00001,
        0.00001,
		// this.getTurnDelaySpeedFactor(),
		// this._thrustManager.getTotalThrustProduced(),
        1000,
		// this._thrustManager.getThrusters()
        [
            new model.movement.Thruster({moduleId:1, direction:0, efficiency: 1, max: 30}),
            new model.movement.Thruster({moduleId:2, direction:90, efficiency: 1, max: 30}),
            new model.movement.Thruster({moduleId:3, direction:270, efficiency: 1, max: 30}),
            new model.movement.Thruster({moduleId:4, direction:180, efficiency: 1, max: 30})
        ]
    );
};

model.MovementManagement.prototype.getTurnDelaySpeedFactor = function()
{
    return this._ship.shipDesign.hullLayout.baseTurnDelay;
};

model.MovementManagement.prototype.getTurnCostSpeedFactor = function()
{
    return this._ship.shipDesign.hullLayout.baseTurnCost;
};

model.MovementManagement.prototype.getSpeedCost = function()
{
    return this._ship.shipDesign.hullLayout.baseSpeedCost;
};
