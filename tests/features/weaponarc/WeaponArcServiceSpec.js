describe("WeaponArcService", function() {

	it("it should construct weaponArc objects", function() {
		var arcService = new model.WeaponArcService();

		var arcs = arcService._combineArcs([
			{visible:true, angle:0},
			{visible:false, angle:90},
			{visible:true, angle:270},
			{visible:false, angle:310}
		]);

		expect(arcs).toEqual( [ { start : 0, end : 90 }, { start : 270, end : 310 } ]);
	});

	it("it should combine arcs", function() {
		var arcService = new model.WeaponArcService();

		var arcs = arcService._combineArcs([
			{visible:true, angle:0},
			{visible:false, angle:90},
			{visible:true, angle:270}
		]);

		expect(arcs).toEqual([ { start : 270, end : 90 } ]);
	});

});
