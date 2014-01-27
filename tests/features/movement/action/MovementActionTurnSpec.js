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
    
    it("should calculate turn cost correctly", function() {

		var mockPosition = {
			add: function(){},
			getNeighbours: function(){ return [0,1,2,3,4,5]}
		};
		
		var movementStatus = {
			getTurnCostSpeedFactor: function(){return 0.5;}
		};
		
		var action = new model.movement.Action.Turn({
			position: mockPosition,
			turnDirection: model.movement.Action.Turn.CW,
			speed: 4
		}); 
		
		expect(action.getThrustCost(movementStatus).costs).toEqual({ 180 : 1, 270 : 1 });

		action._facing = 1;
		
		expect(action.getThrustCost(movementStatus).costs).toEqual({ 180 : 1, 270 : 1 });
		
		action._facing = 5;
		
		expect(action.getThrustCost(movementStatus).costs).toEqual({ 180 : 1, 270 : 1 });
		
		action._facing = 2;
		
		expect(action.getThrustCost(movementStatus).costs).toEqual({ 0 : 1, 90 : 1 });
		
		action._facing = 3;
		
		expect(action.getThrustCost(movementStatus).costs).toEqual({ 0 : 1, 90 : 1 });
		
		action._facing = 4;
		
		expect(action.getThrustCost(movementStatus).costs).toEqual({ 0 : 1, 90 : 1 });
    });
});
