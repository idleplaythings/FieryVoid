describe("MovingService", function() {

  var movementAbility, movement, ship, start, movingService, action;
  beforeEach(function() {
    action = model.movement.Action;

    movementAbility = new model.movement.MovementAbility({
      accelerationCost: 0.1,
      turnCostSpeedFactor: 0.1,
      turnDelaySpeedFactor: 0.1,
      thrustAvailable: 100,
      thrusters: [
        new model.movement.Thruster({moduleId:1, direction:0, efficiency: 1, max: 3}),
        new model.movement.Thruster({moduleId:2, direction:90, efficiency: 1, max: 3}),
        new model.movement.Thruster({moduleId:3, direction:270, efficiency: 1, max: 3}),
        new model.movement.Thruster({moduleId:4, direction:180, efficiency: 1, max: 3})
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

    movingService = new model.movement.MovingService();
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
  
});
