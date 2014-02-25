describe("ShipMovementHandler", function() {

	var ship, addedRoute;

	beforeEach(function() {
		ship = {getMovement: function(){
			return {addRoute: function(route){addRoute = route;}}
		}}
    });
    
    it("should generate starting position route", function() {
		
		var handler = new model.movement.ShipMovementHandler();
		var position = new model.movement.Position({
				position: new model.hexagon.coordinate.Offset(2,2),
				speed: 5
			})
		
		handler.setStartPosition(ship, position);
		//expect(function() {  }).not.toThrow();
	});

});
