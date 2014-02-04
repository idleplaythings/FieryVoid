model.movement.Route = function Route(start, movementAbility, modifiers)
{
	this._movementAbility = movementAbility;
	this._start = start;
	
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

model.movement.Route.prototype.clone = function()
{
	return new model.movement.Route({
		gameTurn: this._gameTurn,
		start: this._start,
		movementAbility: this._movementAbility,
		modifiers: this._modifiers
	})
};

model.movement.Route.prototype.getThrusterUsage = function()
{
	return this._thrusterUsage;
}

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
	var current = this._start;
	var route = [this._start];
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
	
	this._thrusterUsage.payOrFail(current.getThrustCost())
	this._validateMoveAmount(actions, current.getSpeed());
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

model.movement.Route.prototype._validateMoveAmount = function(actions, speed)
{
	var moves = actions.filter(function(action){
		return action instanceof model.movement.Action.Move;
	}).length;
	
	if (moves != speed)
		throw new Error("Invalid route, amount of moves ("+moves+") does not match speed ("+speed+")");
};


