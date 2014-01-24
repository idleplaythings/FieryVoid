describe("MovementAction: Move", function() {

    it("should construct from last action properly", function() {

		var mockPosition = {
			add: function(a){return a},
			getNeighbours: function(){ return [0,1,2,3,4,5]}
		};
		
		var mockPosition2 = {
			add: function(a){ return a;},
			getNeighbours: function(){ return [0,1,mockPosition,3,4,5]}
		};
		
		var action = new model.movement.Action({
			position: mockPosition2,
			direction: 2
		});
		
		expect(model.movement.Action.Move.createFrom(action).getPosition()).toBe(mockPosition);

    });
});
