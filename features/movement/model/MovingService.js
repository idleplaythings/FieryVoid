model.movement.MovingService = function MovingService(){};

model.movement.MovingService.prototype.turnLeft = function(ship, turn, stepIndex){  
  ship.getMovement().addRoute(
    this._act(ship, turn, stepIndex, model.movement.Action.TurnLeft, model.movement.Action.TurnRight)
  );
};

model.movement.MovingService.prototype.turnRight = function(ship, turn, stepIndex){
  ship.getMovement().addRoute(
    this._act(ship, turn, stepIndex, model.movement.Action.TurnRight, model.movement.Action.TurnLeft)
  );
};

model.movement.MovingService.prototype.accelerate = function(ship, turn, stepIndex){
  ship.getMovement().addRoute(
    this._act(ship, turn, 0, model.movement.Action.SpeedAccelerate, model.movement.Action.SpeedDeaccelerate)
  );
};

model.movement.MovingService.prototype.deaccelerate = function(ship, turn, stepIndex){
  ship.getMovement().addRoute(
    this._act(ship, turn, 0, model.movement.Action.SpeedDeaccelerate, model.movement.Action.SpeedAccelerate)
  );
};

model.movement.MovingService.prototype._act = function(ship, turn, stepIndex, action, reverse){
  var movement = ship.getMovement();
  var route = movement.getRouteByTurn(turn); 

  var steps = route.getActionsAsSteps();
  var step = steps[stepIndex];

  if ( ! this._removeFromStep(step, reverse)){
    step.actions.push(new action());
  }

  if (action == model.movement.Action.SpeedDeaccelerate){
    steps.splice(steps.length-1, 1);
  }

  if (action == model.movement.Action.SpeedAccelerate){
    steps.push({
      index: steps[steps.length-1].index + 1,
      actions: [new model.movement.Action.Move()]
    });
  }

  return route.createFromSteps(steps);
};

model.movement.MovingService.prototype._removeFromStep = function(step, toRemove){

  for (var i in step.actions){
    var action = step.actions[i];
    if (action instanceof toRemove){
      step.actions.splice(i, 1);
      return true;
    }
  }

  return false;

};