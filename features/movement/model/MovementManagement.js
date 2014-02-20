model.MovementManagement = function MovementManagement(ship, modules, timeline, thrust, pathResolver)
{
    model.ShipStatusManager.call(this, ship, modules, timeline);
    this.thrustManager = thrust;
	this._ship = ship;
	this._timeline = timeline;
    this._pathResolver = new model.movement.PathResolver();
    this._pathRenderer = null;

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
		var entry = this.timeline.filter(function(entry){ return entry.name == 'startPosition'}).pop();
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
    this._path = this._pathResolver.resolvePathForRoute(this.gridService, this._route);

    // console.log(this._path)

    this._pathRenderer = new model.movement.PathRenderer(this.dispatcher);
    this._pathRenderer.renderPath(this.gameScene, this._path);



    this._animationPosition = 0;
    this._shipAnimator = new model.movement.ShipAnimator();

    // this.animate2(this._ship)
    // this.animate2(this._ship)
    // this.animate2(this._ship)
    // this.animate2(this._ship)
    // this.animate2(this._ship)
    // this.animate2(this._ship)
    // this.animate2(this._ship)

    // new model.movement.RouteDisplay(this.gameScene, this.gridService, this.dispatcher).makeItSo(this._route);
}

model.MovementManagement.prototype.setStartPosition = function(position)
{
    this.timeline.add('startPosition', position);
    this._start = position;
}

model.MovementManagement.prototype.getFacing = function(currentTime)
{
    return 0;
}

/*
model.MovementManagement.prototype.targetHex = function(hex)
{
    ship.setPosition(this.getScenePosition(gameTime));
    ship.setAzimuth(this.getSceneFacing(gameTime));
};
*/

model.MovementManagement.prototype.animate = function(gameTime)
{
    this._advanceAnimationPosition();

    this._shipAnimator.positionShipAlongPath(this._ship, this._path, this._animationPosition);

    // ship.setPosition(this._getScenePosition(gameTime));
    // ship.setAzimuth(this.getFacing(gameTime));
};


model.MovementManagement.prototype._advanceAnimationPosition = function()
{
    this._animationPosition += 0.1;

    if (this._animationPosition > 100) {
        this._animationPosition = 0;
    }
}




model.MovementManagement.prototype.getScenePosition = function(gameTime)
{
    return this.gridService.resolveGameCoordinates(this.getCurrentPosition(gameTime).toOddR());
};

model.MovementManagement.prototype.getSceneFacing = function(currentTime)
{
    return 80;
}

model.MovementManagement.prototype.getScenePositionAtTurn = function(turn)
{
    return this.gridService.resolveGameCoordinates(this.getCurrentPosition(turn * 10000).toOddR());
};

model.MovementManagement.prototype.getSceneFacingAtTurn = function(turn)
{
    return 80;
}

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
    return this.ship.shipDesign.hullLayout.baseTurnDelay;
};

model.MovementManagement.prototype.getTurnCostSpeedFactor = function()
{
    return this.ship.shipDesign.hullLayout.baseTurnCost;
};

model.MovementManagement.prototype.getSpeedCost = function()
{
    return this.ship.shipDesign.hullLayout.baseSpeedCost;
};
