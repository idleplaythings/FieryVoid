describe("MovementRoute", function() {

	var movementAbility, start, route, action;
	
	beforeEach(function() {
		
		action = model.movement.Action;
		
		movementAbility = getMovementAbility(1, 0.4, 0.4, 10, [
			new model.movement.ThrusterInUse({moduleId:1, direction:1, efficiency: 1, max: 3}),
			new model.movement.ThrusterInUse({moduleId:2, direction:2, efficiency: 1, max: 3}),
			new model.movement.ThrusterInUse({moduleId:3, direction:3, efficiency: 1, max: 3}),
			new model.movement.ThrusterInUse({moduleId:4, direction:4, efficiency: 1, max: 3})
		]);
		start = new model.movement.Position({
			position: new model.hexagon.coordinate.Cube(0,0,0),
			facing: 0,
			direction: 0,
			speed: 5
		});
		
    });
    
    it("should throw if too few moves", function() {
		
		actions = [
			new action.Move(),
			new action.Move(),
		];
	
		expect(function() { new model.movement.Route(0, start, movementAbility, actions)}).toThrow();
	});

   it("should be ok if deaccelerated to speed zero", function() {	

   	start = new model.movement.Position({
			position: new model.hexagon.coordinate.Cube(0,0,0),
			facing: 0,
			direction: 0,
			speed: 1
		});

		actions = [
			new action.SpeedDeaccelerate(),
		];
	
		expect(function() { new model.movement.Route(0, start, movementAbility, actions)}).not.toThrow();
	});
	
	it("should throw if too many moves", function() {	
		actions = [
			new action.Move(),
			new action.Move(),
			new action.Move(),
			new action.Move(),
			new action.Move(),
			new action.Move(),
		];
	
		expect(function() { new model.movement.Route(0, start, movementAbility, actions)}).toThrow();
	});

	it("should serialize and deserialize", function() {	
		actions = [
			new action.Move(),
			new action.Move(),
			new action.Move(),
			new action.Move(),
			new action.Move()
		];

		var route = new model.movement.Route(0, start, movementAbility, actions);
		var serialized = route.serialize();
		var route2 = null;
	
		expect(function() {route2 = model.movement.Route.deserialize(serialized)}).not.toThrow();
		expect(route2.serialize()).toEqual(serialized);
	});
	
	it("should throw if not observing turn delay", function() {	
		actions = [
			new action.Move(),
			new action.Move(),
			new action.TurnLeft(),
			new action.TurnRight(),
			new action.Move(),
			new action.Move(),
			new action.Move()
		];
	
		expect(function() { new model.movement.Route(0, start, movementAbility, actions)}).toThrow();
		
		actions = [
			new action.Move(),
			new action.Move(),
			new action.TurnLeft(),
			new action.Move(),
			new action.Move(), // turn delay 2 satisified
			new action.TurnRight(),
			new action.Move()
		];
		expect(function() { new model.movement.Route(0, start, movementAbility, actions)}).not.toThrow();
    });
    
    it("should throw if not enough thrust to pay", function() {	
		movementAbility = getMovementAbility(1, 0.4, 0.4, 1, [
			new model.movement.ThrusterInUse({moduleId:1, direction:1, efficiency: 1, max: 3}),
			new model.movement.ThrusterInUse({moduleId:2, direction:2, efficiency: 1, max: 3}),
			new model.movement.ThrusterInUse({moduleId:3, direction:3, efficiency: 1, max: 3}),
			new model.movement.ThrusterInUse({moduleId:4, direction:4, efficiency: 1, max: 3})
		]);
		
		actions = [
			new action.Move(),
			new action.Move(),
			new action.TurnLeft(),
			new action.Move(),
			new action.Move(),
			new action.Move()
		];
	
		expect(function() { new model.movement.Route(0, start, movementAbility, actions)}).toThrow();
    });
    
     it("should throw if not enough thruster capacity to pay", function() {	
		movementAbility = getMovementAbility(1, 1, 1, 10, [
			new model.movement.ThrusterInUse({moduleId:1, direction:1, efficiency: 1, max: 1}),
			new model.movement.ThrusterInUse({moduleId:2, direction:2, efficiency: 1, max: 1}),
			new model.movement.ThrusterInUse({moduleId:3, direction:3, efficiency: 1, max: 1}),
			new model.movement.ThrusterInUse({moduleId:4, direction:4, efficiency: 1, max: 1})
		]);
		
		actions = [
			new action.Move(),
			new action.Move(),
			new action.TurnLeft(),
			new action.Move(),
			new action.Move(),
			new action.Move()
		];
	
		expect(function() { new model.movement.Route(0, start, movementAbility, actions)}).toThrow();
    });
	
	it("should be able to take actions", function() {
		
		var move = new action.Move();
		route = new model.movement.Route(
			0, 
			start, 
			movementAbility,
			[
				move, 
				new action.Move(),
				new action.Move(),
				new action.Move(),
				new action.Move()
			]);
		
		expect(route._modifiers[0]).toBe(move);
    });
    
    
    it("should be able to apply moves together", function() {
		
		route = new model.movement.Route(
			0, 
			start, 
			movementAbility,
			[
				new action.Move(), 
				new action.Move(),
				new action.Move(),
				new action.Move(),
				new action.Move()
			]);
				
		expect(route.getCurrent().getPosition()).toEqual(new model.hexagon.coordinate.Cube(5,-5,0));
    });
    
    it("should be able to apply moves and turns together", function() {

		route = new model.movement.Route(
			0, 
			start, 
			movementAbility,
			[
				new action.Move(), 
				new action.Move(),
				new action.TurnLeft(),
				new action.Move(),
				new action.Move(),
				new action.TurnRight(),
				new action.Move()
			]);
			
		expect(route.getCurrent().getPosition()).toEqual(new model.hexagon.coordinate.Cube(3, -5, 2));
    });
    
    it("should be able to evaluate its cost", function() {

		route = new model.movement.Route(
			0, 
			start, 
			movementAbility,
			[
				new action.Move(), 
				new action.Move(),
				new action.TurnLeft(),
				new action.Move(),
				new action.Move(),
				new action.TurnRight(),
				new action.Move()
			]);
		
		expect(route.getCurrent().getThrustCost().costs).toEqual({ 0 : 0, 90 : 1, 180 : 2, 270 : 1 });
    });
    
    it("should be able to deaccelerate", function() {

		route = new model.movement.Route(
			0, 
			start, 
			movementAbility,
			[
				new action.Move(), 
				new action.Move(),
				new action.Move(),
				new action.Move(),
				new action.SpeedDeaccelerate()
				
			]);
		
		expect(route.getCurrent().getSpeed()).toEqual(4);	
		expect(route.getCurrent().getPosition()).toEqual(new model.hexagon.coordinate.Cube(4, -4, 0));
    });
    
    it("should be able to accelerate", function() {

		route = new model.movement.Route(
			0, 
			start, 
			movementAbility,
			[
				new action.Move(), 
				new action.Move(),
				new action.Move(),
				new action.Move(),
				new action.Move(),
				new action.Move(),
				new action.SpeedAccelerate()
				
			]);
		
		expect(route.getCurrent().getSpeed()).toEqual(6);	
		expect(route.getCurrent().getPosition()).toEqual(new model.hexagon.coordinate.Cube(6, -6, 0));
    });
    
    it("deaccelerating below zero should change direction", function() 
    {
		start = new model.movement.Position({
			position: new model.hexagon.coordinate.Cube(0,0,0),
			facing: 2,
			direction: 2,
			speed: 1
		});
		
		route = new model.movement.Route(
			0, 
			start, 
			movementAbility,
			[
				new action.SpeedDeaccelerate(),
				new action.SpeedDeaccelerate(),
				new action.SpeedAccelerate(),
				new action.Move(),
				new action.Move(),
			]);
		
		expect(route.getCurrent().getSpeed()).toEqual(2);
		expect(route.getCurrent().getDirection()).toEqual(5);
		expect(route.getCurrent().getFacing()).toEqual(2);	
		expect(route.getCurrent().getPosition()).toEqual(new model.hexagon.coordinate.Cube(0, -2, 2));
 		});
   
	it("resets pivot (direction == facing) when deaccelerating to zero speed", function() 
    {
		start = new model.movement.Position({
			position: new model.hexagon.coordinate.Cube(0,0,0),
			facing: 4,
			direction: 5,
			speed: 1
		});
		
		route = new model.movement.Route(
			0, 
			start, 
			movementAbility,
			[
				new action.SpeedDeaccelerate()
			]);
		
		expect(route.getCurrent().getSpeed()).toEqual(0);
		expect(route.getCurrent().getDirection()).toEqual(4);
		expect(route.getCurrent().getFacing()).toEqual(4);	
		expect(route.getCurrent().getPosition()).toEqual(new model.hexagon.coordinate.Cube(0, 0, 0));
    });
    
    it("merges route positions that are in the same hex", function() 
    {
		route = new model.movement.Route(
			0, 
			start, 
			movementAbility,
			[
				new action.Move(), 
				new action.Move(),
				new action.Move(),
				new action.TurnLeft(),
				new action.Move(),
				new action.Move(),
				new action.Move(),
				new action.SpeedAccelerate()
				
			]);
		
		expect(route.getRoute().length).toEqual(7);	
    });

    it("returns actions with step index for route that has only moves", function() 
    {
			route = new model.movement.Route(
				0, 
				start, 
				movementAbility,
				[
					new action.Move(), 
					new action.Move(),
					new action.Move(),
					new action.Move(),
					new action.Move()
				]);
		
			var steps = pruneCostsOutFromSteps(route.getActionsAsSteps());
			expect(steps).toEqual([
		 		{ index : 0, actions : [  ] },
		 		{ index : 1, actions : [ new action.Move() ] },
		 		{ index : 2, actions : [ new action.Move() ] },
		 		{ index : 3, actions : [ new action.Move() ] },
		 		{ index : 4, actions : [ new action.Move() ] },
		 		{ index : 5, actions : [ new action.Move() ] }  
		 	]);

		 	expect(route.createFromSteps(steps)).toEqual(route);	
    });

    it("returns actions with step index for route that has turns and acceleration", function() 
    {
			route = new model.movement.Route(
				0, 
				start, 
				movementAbility,
				[
					new action.SpeedAccelerate(),
					new action.Move(), 
					new action.Move(),
					new action.TurnLeft(),
					new action.Move(),
					new action.Move(),
					new action.Move(),
					new action.Move()
				]);
		
			var steps = pruneCostsOutFromSteps(route.getActionsAsSteps());
			expect(steps).toEqual([
		 		{ index : 0, actions : [ new action.SpeedAccelerate() ] },
		 		{ index : 1, actions : [ new action.Move() ] },
		 		{ index : 2, actions : [ new action.Move(), new action.TurnLeft() ] },
		 		{ index : 3, actions : [ new action.Move() ] },
		 		{ index : 4, actions : [ new action.Move() ] },
		 		{ index : 5, actions : [ new action.Move() ] },
		 		{ index : 6, actions : [ new action.Move() ] } 
		 	]);

		 	expect(route.createFromSteps(steps)).toEqual(route);
    });

    it("returns actions with step index for route that has turns", function() 
    {
			route = new model.movement.Route(
				0, 
				start, 
				movementAbility,
				[
					new action.Move(), 
					new action.Move(),
					new action.TurnLeft(),
					new action.Move(),
					new action.Move(),
					new action.TurnLeft(),
					new action.Move()
				]
			);
			
			var steps = pruneCostsOutFromSteps(route.getActionsAsSteps());
			expect(steps).toEqual([
		 		{ index : 0, actions : [  ] },
		 		{ index : 1, actions : [ new action.Move() ] },
		 		{ index : 2, actions : [ new action.Move(), new action.TurnLeft() ] },
		 		{ index : 3, actions : [ new action.Move() ] },
		 		{ index : 4, actions : [ new action.Move(), new action.TurnLeft() ] },
		 		{ index : 5, actions : [ new action.Move() ] }  
		 	]);

		 	expect(route.createFromSteps(steps)).toEqual(route);
    });

    function getMovementAbility(accelerationCost, turnCostSpeedFactor, turnDelaySpeedFactor, thrustAvailable, thrusters)
    {
    	return new model.movement.MovementAbility({
    		accelerationCost: accelerationCost,
    		turnCostSpeedFactor: turnCostSpeedFactor,
    		turnDelaySpeedFactor: turnDelaySpeedFactor,
    		thrustAvailable: thrustAvailable,
    		thrusters: thrusters
    	});
    }

    function pruneCostsOutFromSteps(steps){
    	steps.forEach(function(step){
    		delete step.costs;
    	})
    	return steps;
    }
	
});
