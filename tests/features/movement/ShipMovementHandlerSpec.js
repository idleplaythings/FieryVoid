describe("ShipMovementHandler", function() {

	var ship, addedRoute;

	beforeEach(function() {
    ship = {getMovement: function(){
      return {addRoute: function(route){addRoute = route;}}
    }};
  });

  it("should generate starting position route", function() {

    var handler = new model.movement.ShipMovementHandler();
    spyOn(handler, 'getMovementAbility').andReturn(getMovementAbility());
    var position = new model.movement.Position({
      position: new model.hexagon.coordinate.Offset(2,2),
      speed: 5
    })

    handler.setStartPosition(ship, position);
    //expect(function() {  }).not.toThrow();
  });

  var getMovementAbility = function(){
    return new model.movement.MovementAbility({
      accelerationCost: 1,
      turnCostSpeedFactor: 1,
      turnDelaySpeedFactor: 1,
      thrustAvailable: 12,
      thrusters: []
    });
  };

});
