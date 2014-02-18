describe("DirectionalRaytrace", function() {


	beforeEach(function() {
	
    });

	it("should find tiles in straight line", function() {
		var ray = new model.DirectionalRaytrace({x:0.5, y:0.5}, 0, 2);
		expect(ray.get()).toEqual([ { x : 0, y : 0 }, { x : 1, y : 0 }, { x : 2, y : 0 } ] );

		var ray = new model.DirectionalRaytrace({x:0.5, y:0.5}, 90, 2);
		expect(ray.get()).toEqual([ { x : 0, y : 0 }, { x : 0, y : -1 }, { x : 0, y : -2 } ]);

		var ray = new model.DirectionalRaytrace({x:0.5, y:0.5}, 270, 2);
		expect(ray.get()).toEqual([ { x : 0, y : 0 }, { x : 0, y : 1 }, { x : 0, y : 2 } ]);

		var ray = new model.DirectionalRaytrace({x:0.5, y:0.5}, 180, 2);
		expect(ray.get()).toEqual([ { x : 0, y : 0 }, { x : -1, y : 0 }, { x : -2, y : 0 } ]);
		
	});

	it("should find tiles in diagonal line", function() {
		var ray = new model.DirectionalRaytrace({x:0.5, y:0.5}, 45, 3);
		expect(ray.get()).toEqual([ { x : 0, y : 0 }, { x : 1, y : -1 }, { x : 2, y : -2 } ] );

		var ray = new model.DirectionalRaytrace({x:0.5, y:0.5}, 135, 3);
		expect(ray.get()).toEqual([ { x : 0, y : 0 }, { x : -1, y : -1 }, { x : -2, y : -2 } ]);

		var ray = new model.DirectionalRaytrace({x:0.5, y:0.5}, 225, 3);
		expect(ray.get()).toEqual([ { x : 0, y : 0 }, { x : -1, y : 1 }, { x : -2, y : 2 } ]);

		var ray = new model.DirectionalRaytrace({x:0.5, y:0.5}, 315, 3);
		expect(ray.get()).toEqual([ { x : 0, y : 0 }, { x : 1, y : 1 }, { x : 2, y : 2 } ]);
		
	});

	it("should find tiles in diagonal line", function() {
		var ray = new model.DirectionalRaytrace({x:0.5, y:0.5}, 325, 3);
		expect(ray.get()).toEqual([ { x : 0, y : 0 }, { x : 1, y : 0 }, { x : 1, y : 1 }, { x : 2, y : 1 }, { x : 2, y : 2 } ]);

		var ray = new model.DirectionalRaytrace({x:0.5, y:0.5}, 35, 3);
		expect(ray.get()).toEqual([ { x : 0, y : 0 }, { x : 1, y : 0 }, { x : 1, y : -1 }, { x : 2, y : -1 }, { x : 2, y : -2 } ]);
		
	});

});
