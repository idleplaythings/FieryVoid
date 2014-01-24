describe("MovementAction: Turn", function() {

    it("should validate turn direction", function() {

		var mockPosition = {
			add: function(){},
			getNeighbours: function(){ return [0,1,2,3,4,5]}
		};
		
		expect(function() { 
			new model.movement.Action.Turn(); 
		}).toThrow();
		
		expect(function() { 
			new model.movement.Action.Turn({
				position: mockPosition,
				turnDirection: 9999
			}); 
		}).toThrow();
		
		expect(function() { 
			new model.movement.Action.Turn({
				position: mockPosition,
				turnDirection: 0
			}); 
		}).toThrow();
		
		expect(function() { 
			new model.movement.Action.Turn({
				position: mockPosition,
				turnDirection: model.movement.Action.Turn.CW
			}); 
		}).not.toThrow();

    });
});
