describe("Thruster usage", function() {

	var movementAbility, cost, thrusterUsage;
	
	beforeEach(function() {
		movementAbility = getMovementAbility(1, 0.4, 0.4, 10, [
			new model.movement.ThrusterInUse({moduleId:1, direction:1, efficiency: 1, max: 3}),
			new model.movement.ThrusterInUse({moduleId:2, direction:2, efficiency: 1, max: 3}),
			new model.movement.ThrusterInUse({moduleId:3, direction:3, efficiency: 1, max: 3}),
			new model.movement.ThrusterInUse({moduleId:4, direction:4, efficiency: 1, max: 3})
		]);
		
		
		thrusterUsage = new model.movement.ThrusterUsage(movementAbility.getThrusters(), 10);
  });
    
  it("should pay for thrust", function() {
		
		thrusterUsage.payOrFail(new model.movement.ThrustCost().setCost(90, 1));
		
		expect(thrusterUsage._thrusters[1].use).toEqual(1);
	});
	
	it("should throw if not enough thrust to pay", function() {
		
		expect(function(){thrusterUsage.payOrFail(new model.movement.ThrustCost().setCost(90, 100))}).toThrow();
	});
	
	it("should throw if not enough thruster capacity to pay", function() {
		
		expect(function(){thrusterUsage.payOrFail(new model.movement.ThrustCost().setCost(90, 4))}).toThrow();
	});
	
	it("should be able to pay for multiple costs", function() {
		
		thrusterUsage.payOrFail(new model.movement.ThrustCost().setCost(90, 1));
		thrusterUsage.payOrFail(new model.movement.ThrustCost().setCost(90, 2));
		
		expect(thrusterUsage._thrusters[1].use).toEqual(3);
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
});
