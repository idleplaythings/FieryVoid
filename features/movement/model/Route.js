model.movement.Route = function Route(startPosition, movementAbility, modifiers)
{
	this._movementAbility = movementAbility;
	this._startPosition = startPosition;
	
	this._modifiers = modifiers;
	
	this._route = null;
	this._thrusterUsage = new model.movement.ThrusterUsage(
		movementAbility.getThrusters(),
		movementAbility.getAvailableThrust()
	);
	this._constructRoute();
};

model.movement.Route.INVALID_NOT_ENOUGH_MOVES = 1;
model.movement.Route.INVALID_TOO_MANY_MOVES = 2;
model.movement.Route.INVALID_BREAKS_TURN_DELAY = 3;
model.movement.Route.INVALID_BREAKS_SLIP_DELAY = 4;
model.movement.Route.INVALID_TOO_EXPENSIVE = 5;

model.movement.Route.prototype.getRoute = function()
{
	return this._route;
}

model.movement.Route.prototype.getCurrent = function()
{
	return this._route[this._route.length-1];
}

model.movement.Route.prototype._constructRoute = function()
{
	var current = this._startPosition;
	var route = [this._startPosition];
	var speed = this._getSpeeds(this._modifiers);
	var modifiers = this._getOtherThanSpeeds(this._modifiers);
	
	var actions = [].concat(speed).concat(modifiers);
	
	for (var i in actions)
	{
		var action = actions[i];
		action.validateInContextOrFail(current);
		current = action.apply(current, this._movementAbility);
		route.push(current);
	}
	
	this._thrusterUsage.payOrFail(current.getThrustCost());
	this._validateMoveAmount(current.getSpeed());
	this._route = route;
};

model.movement.Route.prototype._getSpeeds = function(route)
{
	return route.filter(function(action){return action instanceof model.movement.Action.Speed;});
};

model.movement.Route.prototype._getOtherThanSpeeds = function(route)
{
	return route.filter(function(action){return ! (action instanceof model.movement.Action.Speed);});
};

model.movement.Route.prototype.getMoves = function()
{
	return this._modifiers.filter(function(action){
		return action instanceof model.movement.Action.Move;
	})
};

model.movement.Route.prototype._validateMoveAmount = function(speed)
{
	var moves = this.getMoves().length;
	
	if (moves != Math.abs(speed))
		throw new Error("Invalid route, amount of moves ("+moves+") does not match speed ("+speed+")");
};


