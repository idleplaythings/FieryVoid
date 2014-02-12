describe("HitLocationService", function() {

	var shipDesign, hitLocationService, damageService;
	
	beforeEach(function() {
		
		var tileHeights = [];
		tileHeights.push({tile:4, height:2});
		var hullLayout = new model.HullLayout({
			hullImgName: 'test',
			width: 3,
			height: 3,
			tileHeights: tileHeights
		});

		shipDesign = new model.ShipDesign({hullLayout: hullLayout});
		hitLocationService = new model.HitLocationService();

		damageService = {isDestroyedTile: function(){return false;}};
		
    });

	it("should find tiles in scatter radius", function() {
		var tiles = hitLocationService.getTilesOnScatterRadius(1.5, {x:1, y:1}, shipDesign)
		expect(tiles.length).toEqual(9);
		hasHeight(tiles, 2, 1);

		var tiles = hitLocationService.getTilesOnScatterRadius(1, {x:1, y:1}, shipDesign)
		expect(tiles.length).toEqual(5);
		expect(tiles.map(function(tile){return tile.position})).toEqual(
			[{ x : 0, y : 1 }, { x : 1, y : 0 }, { x : 1, y : 1 }, { x : 1, y : 2 }, { x : 2, y : 1 }]
		);
		hasHeight(tiles, 2, 1);
	});

	it("should find scatter hit change", function() {
		var change = hitLocationService.getHitTilePercentage(2, {x:1, y:1}, shipDesign)
		expect(change).toEqual(0.6923076923076923);

	});

	it("should be able to get tiles in line with weapon and target", function() {
		var target = {x:1, y:1};
		var weaponDirection = MathLib.getAzimuthFromTarget(target, {x: 1, y: -500});
		var positions = hitLocationService.getTilesInLine(weaponDirection, target, shipDesign);
		expect(positions).toEqual(
			[ { x : 1, y : 0 }, { x : 1, y : 1 }, { x : 1, y : 2 } ]
		);
	});

	it("should be able to get diagonal tiles between weapon and target", function() {
		var target = {x:1, y:1};
		var weaponDirection = MathLib.getAzimuthFromTarget(target, {x: -500, y: -500});
		var positions = hitLocationService.getTilesInLine(weaponDirection, target, shipDesign);
		expect(positions).toEqual(
			[ { x : 0, y : 0 }, { x : 0, y : 1 }, { x : 1, y : 1 }, { x : 1, y : 2 }, { x : 2, y : 2 } ]
		);
	});

	it("should be able to discount tiles that are blocked by height", function() {

		shipDesign = {hullLayout: {}};
		shipDesign.hullLayout.getTileHeight = function(position)
		{
			if (position.y == 1)
				return 2;
			return 1;
		}

		var positions = [
			{ x : 1, y : 0 },
			{ x : 1, y : 1 },
			{ x : 1, y : 2 },
			{ x : 1, y : 3 },
			{ x : 1, y : 4 },
		];

		positions = hitLocationService.discountUnreachableTiles(positions, shipDesign, damageService);
		expect(positions).toEqual(
			[ { x : 1, y : 0 }, { x : 1, y : 1 } ]
		);
	});

	it("should disregard height and distance of destroyed tiles", function() {

		shipDesign = {hullLayout: {}};
		shipDesign.hullLayout.getTileHeight = function(position)
		{
			if (position.y == 1)
				return 2;
			return 1;
		}

		var positions = [
			{ x : 1, y : 0 },
			{ x : 1, y : 1 },
			{ x : 1, y : 2 },
			{ x : 1, y : 3 },
			{ x : 1, y : 4 },
		];

		damageService = {isDestroyedTile: function(position){
			return position.y == 1 ? true : false;
		}};

		positions = hitLocationService.discountUnreachableTiles(positions, shipDesign, damageService);
		expect(positions).toEqual(
			[ { x : 1, y : 0 }, { x : 1, y : 2 }, { x : 1, y : 3 } ]
		);
	});

	it("should be able to discount tiles that are blocked by distance", function() {

		shipDesign = {hullLayout: {}};
		shipDesign.hullLayout.getTileHeight = function(position)
		{
			return 1;
		}

		var positions = [
			{ x : 0, y : 0 },
			{ x : 1, y : 1 },
			{ x : 2, y : 2 },
			{ x : 3, y : 3 },
			{ x : 4, y : 4 }
		];


		positions = hitLocationService.discountUnreachableTiles(positions, shipDesign, damageService);
		expect(positions).toEqual(
			[ { x : 0, y : 0 }, { x : 1, y : 1 }, { x : 2, y : 2 } ]
		);
	});

	it("should resolve target validity correctly", function() {
		var target = {x:1, y:1};
		var weaponDirection = MathLib.getAzimuthFromTarget(target, {x: 1, y: -500});

		expect(hitLocationService.isValidTarget(weaponDirection, target, shipDesign, damageService)).toBe(true);
		expect(hitLocationService.isValidTarget(weaponDirection, {x:1, y:2}, shipDesign, damageService)).toBe(false);
		expect(hitLocationService.getClosestValidTarget(weaponDirection, {x:1, y:2}, shipDesign, damageService)).toEqual({ x : 1, y : 1 });
	});

	function hasHeight(list, height, number)
	{
		expect(list.filter(function(entry){return entry.height == height;}).length).toEqual(number);
	}
	
});
