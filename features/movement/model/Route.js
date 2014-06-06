model.movement.Route = function Route(turn, startPosition, movementAbility, modifiers)
{
	this._turn = turn;
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

model.movement.Route.deserialize = function(serialized)
{
	return new model.movement.Route(
		serialized.turn,
		model.movement.Position.deserialize(serialized.startPosition),
		model.movement.MovementAbility.deserialize(serialized.movementAbility),
		serialized.modifiers.map(function(mod){ 
			return model.movement.Action.deserialize(mod);
		})
	);
};

model.movement.Route.prototype.serialize = function()
{
	return {
		turn: this._turn,
		startPosition: this._startPosition.serialize(),
		movementAbility: this._movementAbility.serialize(),
		modifiers: this._modifiers.map(function(action){return action.serialize()})
	}
};

model.movement.Route.prototype.createFromSteps = function(steps){

	actions = steps.reduce(function(actions, step){
		return actions.concat(step.actions);
	}, []);

	return new model.movement.Route(
		this._turn,
		this._startPosition,
		this._movementAbility,
		actions
	);
};

model.movement.Route.prototype.getModifiers = function()
{
	return this._modifiers;
};

model.movement.Route.prototype.getTurn = function()
{
	return this._turn;
};

model.movement.Route.prototype.getStartPosition = function()
{
	return this._startPosition;
};

model.movement.Route.prototype.getRoute = function()
{
	return this._route;
};

model.movement.Route.prototype.getStep = function(index)
{
	return this._route[index];
};

model.movement.Route.prototype.getCurrent = function()
{
	return this._route[this._route.length-1];
};

model.movement.Route.prototype.getActionsAsSteps = function(){
	var speed = this._getSpeeds(this._modifiers);
	var modifiers = this._getOtherThanSpeeds(this._modifiers);
	
	var actions = [].concat(speed).concat(modifiers);

	var steps = [];
	var currentStep = {index: 0, actions: []};
	for (var i in actions){
		var action = actions[i];

		if (action instanceof model.movement.Action.Move){
			steps.push(currentStep);
			var newIndex = currentStep.index+1;
			currentStep = {index: newIndex, actions: []};
		}

		currentStep.actions.push(action);
	}

	steps.push(currentStep);

	return steps;
};

model.movement.Route.prototype._constructRoute = function()
{
	var current = this._startPosition;
	var route = [this._startPosition];
	var speed = this._getSpeeds(this._modifiers);
	var modifiers = this._getOtherThanSpeeds(this._modifiers);
	
	var actions = [].concat(speed).concat(modifiers);
	
	for (var i in actions)
	{
		var last = current;
		var action = actions[i];
		this._validateActionOrFail(action, current);
		current = action.apply(current, this._movementAbility);
		
		if (last.occupiesSamePosition(current))
			route.pop();
		
		route.push(current);
	}
	
	this._thrusterUsage.payOrFail(current.getThrustCost());
	this._validateMoveAmount(current.getSpeed());
	this._route = route;
};

model.movement.Route.prototype._validateActionOrFail = function(action, current){
	action.validateInContextOrFail(current);
};

model.movement.Route.prototype._getSpeeds = function(route)
{
	return route.filter(function(action){return action instanceof model.movement.Action.Speed;});
};

model.movement.Route.prototype._getOtherThanSpeeds = function(route)
{
	return route.filter(function(action){return ! (action instanceof model.movement.Action.Speed);});
};

model.movement.Route.prototype._getMoves = function()
{
	return this._modifiers.filter(function(action){
		return action instanceof model.movement.Action.Move;
	})
};

model.movement.Route.prototype._validateMoveAmount = function(speed)
{
	var moves = this._getMoves().length;
	
	if (moves != Math.abs(speed))
		throw new Error("Invalid route, amount of moves ("+moves+") does not match speed ("+speed+")");
};


