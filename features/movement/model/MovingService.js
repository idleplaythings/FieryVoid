model.movement.MovingService = function MovingService(dispatcher){
  this._dispatcher = dispatcher;
};

model.movement.MovingService.prototype.turnLeft = function(ship, turn, stepIndex){
  this._addRoute(ship,
    this._getTurnLeftRoute(ship, turn, stepIndex)
  );
};

model.movement.MovingService.prototype.canTurnLeft = function(ship, turn, stepIndex){
  return this._can(this._getTurnLeftRoute, ship, turn, stepIndex);
};

model.movement.MovingService.prototype._getTurnLeftRoute = function(ship, turn, stepIndex){  
  return this._act(ship, turn, stepIndex, model.movement.Action.TurnLeft, model.movement.Action.TurnRight)
};

model.movement.MovingService.prototype.turnRight = function(ship, turn, stepIndex){
  this._addRoute(ship,
    this._getTurnRightRoute(ship, turn, stepIndex)
  );
};

model.movement.MovingService.prototype.canTurnRight = function(ship, turn, stepIndex){
  return this._can(this._getTurnRightRoute, ship, turn, stepIndex);
};

model.movement.MovingService.prototype._getTurnRightRoute = function(ship, turn, stepIndex){
  return this._act(ship, turn, stepIndex, model.movement.Action.TurnRight, model.movement.Action.TurnLeft)
};

model.movement.MovingService.prototype.accelerate = function(ship, turn, stepIndex){
  this._addRoute(ship,
    this._getAccelerateRoute(ship, turn, stepIndex)
  );
};

model.movement.MovingService.prototype.canAccelerate = function(ship, turn, stepIndex){
  return this._can(this._getAccelerateRoute, ship, turn, stepIndex);
};

model.movement.MovingService.prototype._getAccelerateRoute = function(ship, turn, stepIndex){
  return this._speed(ship, turn, 0, model.movement.Action.SpeedAccelerate, model.movement.Action.SpeedDeaccelerate)
};

model.movement.MovingService.prototype.deaccelerate = function(ship, turn, stepIndex){
  this._addRoute(ship,
    this._getDeaccelerateRoute(ship, turn, stepIndex)
  );
};

model.movement.MovingService.prototype.canDeaccelerate = function(ship, turn, stepIndex){
  return this._can(this._getDeaccelerateRoute, ship, turn, stepIndex);
};

model.movement.MovingService.prototype._getDeaccelerateRoute = function(ship, turn, stepIndex){
  return this._speed(ship, turn, 0, model.movement.Action.SpeedDeaccelerate, model.movement.Action.SpeedAccelerate)
};

model.movement.MovingService.prototype._act = function(ship, turn, stepIndex, action, reverse){
  var movement = ship.getMovement();
  var route = movement.getRouteByTurn(turn); 

  var steps = route.getActionsAsSteps();
  var step = steps[stepIndex];

  if ( ! this._removeFromStep(step, reverse)){
    step.actions.push(new action());
  }

  return route.createFromSteps(steps);
};

model.movement.MovingService.prototype._speed = function(ship, turn, stepIndex, action, reverse){
  var movement = ship.getMovement();
  var route = movement.getRouteByTurn(turn); 

  var steps = route.getActionsAsSteps();
  var step = steps[stepIndex];

  var isDeaccelerate = (action == model.movement.Action.SpeedDeaccelerate);
  var isAccelerate = (action == model.movement.Action.SpeedAccelerate);
  var isStationary = (steps.length === 1);

  if ( ! this._removeSpeedFromStep(step, route.getStartPosition().getSpeed(), reverse)){
    step.actions.push(new action());
  }

  if ((isStationary && isDeaccelerate) || isAccelerate){
      steps.push({
      index: steps[steps.length-1].index + 1,
      actions: [new model.movement.Action.Move()]
    });
  } 
  else if (isDeaccelerate){
    steps.splice(steps.length-1, 1);
  }
  
  //console.log("MOVING SERVICE IS PROPOSING FOLLOWING");
  //console.log(steps);

  return route.createFromSteps(steps);
};

model.movement.MovingService.prototype._removeSpeedFromStep = function(step, startSpeed, toRemove){
  var canRemoveDeaccelerate = false;
  var toRemoveIsDeaccelerate = (toRemove == model.movement.Action.SpeedDeaccelerate);

  var changedDirection = false;

  step.actions.forEach(function(action){
    var isDeaccelerate = (action instanceof model.movement.Action.SpeedDeaccelerate);
    var isAccelerate = (action instanceof model.movement.Action.SpeedAccelerate);

    if (isDeaccelerate){
      canRemoveDeaccelerate = true;
      startSpeed--;
    }
    if (isAccelerate) {
      startSpeed++;
    }

    if (startSpeed === -1){
      changedDirection = true;
      canRemoveDeaccelerate = false;
      startSpeed = 1;
    }
  });

  if (startSpeed === 1 && changedDirection && ! toRemoveIsDeaccelerate){
    toRemove = model.movement.Action.SpeedDeaccelerate;
    toRemoveIsDeaccelerate = false;
  }

  if ( ! toRemoveIsDeaccelerate || (toRemoveIsDeaccelerate && canRemoveDeaccelerate))
    return this._removeFromStep(step, toRemove);

  return false;
};

model.movement.MovingService.prototype._removeFromStep = function(step, toRemove){

  for (var i = step.actions.length-1; i >= 0; i--){
    var action = step.actions[i];
    if (action instanceof toRemove){
      step.actions.splice(i, 1);
      return true;
    }
  }

  return false;

};

model.movement.MovingService.prototype._can = function(handler, ship, turn, stepIndex){

  try{
    handler(ship, turn, stepIndex);
    return true;
  }catch(e){
    console.log("Can't do movement, because:", e.message);
    return false;
  }
};

model.movement.MovingService.prototype._addRoute = function(ship, route){
  ship.getMovement().addRoute(route);
  this._dispatcher.dispatch({name: 'MovementRouteChanged', ship: ship, route: route});
};