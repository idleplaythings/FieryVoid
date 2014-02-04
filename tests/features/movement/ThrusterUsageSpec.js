describe("Thruster usage", function() {

	var movementAbility, cost, thrusterUsage;
	
	beforeEach(function() {
		movementAbility = new model.movement.MovementAbility(1, 0.4, 0.4, 10, [
			new model.movement.Thruster({moduleId:1, direction:0, efficiency: 1, max: 3}),
			new model.movement.Thruster({moduleId:2, direction:90, efficiency: 1, max: 3}),
			new model.movement.Thruster({moduleId:3, direction:270, efficiency: 1, max: 3}),
			new model.movement.Thruster({moduleId:4, direction:180, efficiency: 1, max: 3})
		]);
		
		
		thrusterUsage = new model.movement.ThrusterUsage(movementAbility.getThrusters());
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
});