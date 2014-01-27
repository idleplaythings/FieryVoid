describe("MovementAction", function() {

    it("should validate itself", function() {

		var mockPosition = {
			add: function(){},
			getNeighbours: function(){ return [0,1,2,3,4,5]}
		};
		
		expect(function() { 
			new model.movement.Action(); 
		}).toThrow();
		
		expect(function() { 
			new model.movement.Action({
				position: mockPosition,
				direction: 6
			}); 
		}).toThrow();
		
		expect(function() { 
			new model.movement.Action({
				position: mockPosition,
				direction: -1
			}); 
		}).toThrow();
		
		expect(function() { 
			new model.movement.Action({
				position: mockPosition
			}); 
		}).not.toThrow();

    });
    
    it("should turn properly", function() {

		
		var mockPosition = {
			add: function(){},
			getNeighbours: function(){ return [0,1,2,3,4,5]}
		};
		
		var action = new model.movement.Action({
			position: mockPosition
		});
		
		expect(action.turnDirection(-1)).toEqual(5);
		expect(action.turnDirection(6)).toEqual(0);
		expect(action.turnDirection(-7)).toEqual(5);
		expect(action.turnDirection(-13)).toEqual(5);
		expect(action.turnDirection(6)).toEqual(0);
		expect(action.turnDirection(12)).toEqual(0);
		
    });
    
    it("should resolve needed thrusters properly", function() {
		
		var mockPosition = {
			add: function(){},
			getNeighbours: function(){ return [0,1,2,3,4,5]}
		};
		
		var action = new model.movement.Action({
			position: mockPosition,
			direction: 2,
			facing: 4
		});
		
		expect(action._getThrusterDirection(model.movement.Action.THRUSTER_LEFT))
			.toEqual(model.movement.Action.THRUSTER_RIGHT)
			
		expect(action._getThrusterDirection(model.movement.Action.THRUSTER_FRONT))
			.toEqual(model.movement.Action.THRUSTER_REAR)
			
		action = new model.movement.Action({
			position: mockPosition,
			direction: 2,
			facing: 1
		});
		
		expect(action._getThrusterDirection(model.movement.Action.THRUSTER_LEFT))
			.toEqual(model.movement.Action.THRUSTER_LEFT)
			
		expect(action._getThrusterDirection(model.movement.Action.THRUSTER_FRONT))
			.toEqual(model.movement.Action.THRUSTER_FRONT)
	});

});
