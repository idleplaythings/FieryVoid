describe("WeaponArcService", function() {

	it("it should construct weaponArc objects", function() {
		var arcService = new model.WeaponArcService();

		var arcs = arcService._combineArcs([
			{visible:true, angle:0},
			{visible:false, angle:90},
			{visible:true, angle:270},
			{visible:false, angle:310}
		]);

		arcs = arcs.map(function(arc){return {start:arc.start, end: arc.end}});

		expect(arcs).toEqual( [ { start : 0, end : 90 }, { start : 270, end : 310 } ]);
	});

	it("it should combine arcs", function() {
		var arcService = new model.WeaponArcService();

		var arcs = arcService._combineArcs([
			{visible:true, angle:0},
			{visible:false, angle:90},
			{visible:true, angle:270}
		]);

		arcs = arcs.map(function(arc){return {start:arc.start, end: arc.end}});
		
		expect(arcs).toEqual([ { start : 270, end : 90 } ]);
	});

	it("it should be able to deal with 360 arc", function() {
		var arcService = new model.WeaponArcService();

		var arcs = arcService._combineArcs([
			{visible:true, angle:0}
		]);

		arcs = arcs.map(function(arc){return {start:arc.start, end: arc.end}});
		
		expect(arcs).toEqual([ { start : 0, end : 360 } ]);
	});

});
