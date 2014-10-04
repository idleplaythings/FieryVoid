describe("MovingService", function() {

  var movementAbility, movement, ship, start, movingService, action, dispatcher;
  beforeEach(function() {
    action = model.movement.Action;

    movementAbility = new model.movement.MovementAbility({
      accelerationCost: 0.1,
      turnCostSpeedFactor: 0.1,
      turnDelaySpeedFactor: 0.1,
      thrustAvailable: 100,
      thrusters: [
        new model.movement.ThrusterInUse({moduleId:1, direction:1, efficiency: 1, max: 3}),
        new model.movement.ThrusterInUse({moduleId:2, direction:2, efficiency: 1, max: 3}),
        new model.movement.ThrusterInUse({moduleId:3, direction:3, efficiency: 1, max: 3}),
        new model.movement.ThrusterInUse({moduleId:4, direction:4, efficiency: 1, max: 3})
      ]
    });

    start = new model.movement.Position({
      position: new model.hexagon.coordinate.Cube(0,0,0),
      facing: 0,
      direction: 0,
      speed: 4
    });

    movement = jasmine.createSpyObj('ShipMovementStatus', [ 'getRouteByTurn', 'addRoute' ]);
    ship = jasmine.createSpyObj('Ship', [ 'getMovement']);
    ship.getMovement.andReturn(movement);
    dispatcher = jasmine.createSpyObj('Dispatcher', ['dispatch']);

    movingService = new model.movement.MovingService(dispatcher);
  });
  
  it("should turn left by adding a left turn action", function() {
  
    actions = [
      new action.Move(),
      new action.Move(),
      new action.Move(),
      new action.Move(),
    ];
    var route = new model.movement.Route(0, start, movementAbility, actions);

    movement.getRouteByTurn.andReturn(route);

    actions = [
      new action.Move(),
      new action.Move(),
      new action.TurnLeft(),
      new action.Move(),
      new action.Move(),
    ];
    var resultRoute = new model.movement.Route(0, start, movementAbility, actions);

    movingService.turnLeft(ship, 0, 2);
    expect(movement.addRoute).toHaveBeenCalledWith(resultRoute);
    
  });

  it("should turn left by removing turn right", function() {
  
    actions = [
      new action.Move(),
      new action.Move(),
      new action.TurnRight(),
      new action.Move(),
      new action.Move(),
    ];
    var route = new model.movement.Route(0, start, movementAbility, actions);

    movement.getRouteByTurn.andReturn(route);

    actions = [
      new action.Move(),
      new action.Move(),
      new action.Move(),
      new action.Move(),
    ];
    var resultRoute = new model.movement.Route(0, start, movementAbility, actions);

    movingService.turnLeft(ship, 0, 2);
    expect(movement.addRoute).toHaveBeenCalledWith(resultRoute);
    
  });

  it("should turn right by adding a right turn action", function() {
  
    actions = [
      new action.Move(),
      new action.Move(),
      new action.Move(),
      new action.Move(),
    ];
    var route = new model.movement.Route(0, start, movementAbility, actions);

    movement.getRouteByTurn.andReturn(route);

    actions = [
      new action.Move(),
      new action.Move(),
      new action.TurnRight(),
      new action.Move(),
      new action.Move(),
    ];
    var resultRoute = new model.movement.Route(0, start, movementAbility, actions);

    movingService.turnRight(ship, 0, 2);
    expect(movement.addRoute).toHaveBeenCalledWith(resultRoute);
    
  });

  it("should turn right by removing turn left action", function() {
  
    actions = [
      new action.Move(),
      new action.Move(),
      new action.TurnLeft(),
      new action.Move(),
      new action.Move(),
    ];
    var route = new model.movement.Route(0, start, movementAbility, actions);

    movement.getRouteByTurn.andReturn(route);

    actions = [
      new action.Move(),
      new action.Move(),
      new action.Move(),
      new action.Move(),
    ];
    var resultRoute = new model.movement.Route(0, start, movementAbility, actions);

    movingService.turnRight(ship, 0, 2);
    expect(movement.addRoute).toHaveBeenCalledWith(resultRoute);
    
  });

  it("should accelerate by adding an accelerate action", function() {
  
    actions = [
      new action.Move(),
      new action.Move(),
      new action.Move(),
      new action.Move(),
    ];
    var route = new model.movement.Route(0, start, movementAbility, actions);

    movement.getRouteByTurn.andReturn(route);

    actions = [
      new action.SpeedAccelerate(),
      new action.Move(),
      new action.Move(),
      new action.Move(),
      new action.Move(),
      new action.Move()
    ];
    var resultRoute = new model.movement.Route(0, start, movementAbility, actions);

    movingService.accelerate(ship, 0, 2);
    expect(movement.addRoute).toHaveBeenCalledWith(resultRoute);
    
  });

  it("should accelerate by removing a deaccelerate action", function() {
  
    actions = [
      new action.SpeedDeaccelerate(),
      new action.Move(),
      new action.Move(),
      new action.Move(),
    ];
    var route = new model.movement.Route(0, start, movementAbility, actions);

    movement.getRouteByTurn.andReturn(route);

    actions = [
      new action.Move(),
      new action.Move(),
      new action.Move(),
      new action.Move(),
    ];
    var resultRoute = new model.movement.Route(0, start, movementAbility, actions);

    movingService.accelerate(ship, 0, 2);
    expect(movement.addRoute).toHaveBeenCalledWith(resultRoute);
    
  });

  it("should not remove deaccelerate if direction of movement has changed", function() {
  
    var actions = [
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.Move()
    ];

    var step = {index: 0, actions: actions};
    var startSpeed = 4;
    var toRemove = model.movement.Action.SpeedDeaccelerate;

    var result = movingService._removeSpeedFromStep(step, startSpeed, toRemove);
    expect(step.actions).toEqual(actions);
    expect(result).toEqual(false);
  });

  it("should remove accelerate after deaccelerating to -1 speed", function() {
  
    var actions = [
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedAccelerate(),
      new action.Move(),
      new action.Move()
    ];

    var step = {index: 0, actions: actions};
    var startSpeed = 4;
    var toRemove = model.movement.Action.SpeedAccelerate;

    movingService._removeSpeedFromStep(step, startSpeed, toRemove);
    expect(step.actions).toEqual([
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.Move(),
      new action.Move()
    ]);
  });

  it("should remove deaccelerate from steps", function() {
  
    var actions = [
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.Move(),
      new action.Move()
    ];

    var step = {index: 0, actions: actions};
    var startSpeed = 4;
    var toRemove = model.movement.Action.SpeedDeaccelerate;

    movingService._removeSpeedFromStep(step, startSpeed, toRemove);
    expect(step.actions).toEqual([
      new action.SpeedDeaccelerate(),
      new action.Move(),
      new action.Move()
    ]);
  });

  it("should remove deaccelerate when speed is 1 backwards, even if acclerate is specified for remove", function() {
  
    var actions = [
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.Move(),
    ];

    var step = {index: 0, actions: actions};
    var startSpeed = 1;
    var toRemove = model.movement.Action.SpeedAccelerate;

    movingService._removeSpeedFromStep(step, startSpeed, toRemove);
    expect(step.actions).toEqual([
      new action.SpeedDeaccelerate(),
      new action.Move(),
    ]);
  });

  it("should not remove deaccelerate, when it has accelerated to speed -1, and changed direction of movement", function() {
  
    actions = [
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.Move()
    ];
    var route = new model.movement.Route(0, start, movementAbility, actions);

    movement.getRouteByTurn.andReturn(route);

    actions = [
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedDeaccelerate(),
      new action.SpeedAccelerate(),
      new action.Move(),
      new action.Move()
    ];
    var resultRoute = new model.movement.Route(0, start, movementAbility, actions);

    movingService.accelerate(ship, 0, 2);
    expect(movement.addRoute).toHaveBeenCalledWith(resultRoute);
    
  });
});
