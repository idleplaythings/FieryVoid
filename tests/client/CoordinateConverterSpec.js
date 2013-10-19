describe("Coordinate converter spec", function()
{
    beforeEach(function() {

    });

    it("Calculating centerPosition", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:50, height:25},
            10
        );

        var pos = converter.startPos;
        expect(pos).toEqual({x:250, y:375});
    });

    it("Calculating centerPosition, viewport and grid are same size", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:100, height:50},
            10
        );

        var pos = converter.startPos;
        expect(pos).toEqual({x:0, y:500});
    });

    it("Calculating clicked tile 1", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:100, height:50},
            10
        );

        expect(converter.startPos).toEqual({x:0, y:500});

        var pos = converter.convertWindowToGrid({x:21, y:0});
        expect(pos).toEqual({x:2, y:50});
    });

    it("Calculating clicked tile 2", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:100, height:50},
            10
        );

        expect(converter.startPos).toEqual({x:0, y:500});

        var pos = converter.convertWindowToGrid({x:21, y:21});
        expect(pos).toEqual({x:2, y:47});
    });

    it("Calculating clicked tile, edge case 1", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:100, height:50},
            10
        );

        var pos = converter.convertWindowToGrid({x:40, y:500});
        expect(pos).toEqual({x:4, y:0});
    });

    it("Calculating clicked tile, edge case 2", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:100, height:50},
            10
        );

        var pos = converter.convertWindowToGrid({x:40, y:20});
        expect(pos).toEqual({x:4, y:48});
    });

    it("Calculating clicked tile outside of grid 1", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:100, height:25},
            10
        );

        var pos = converter.convertWindowToGrid({x:40, y:500});
        expect(pos).toEqual({x : 4, y : -13});
    });

    it("Calculating clicked tile outside of grid 2", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:100, height:25},
            10
        );

        var pos = converter.convertWindowToGrid({x:40, y:1});
        expect(pos).toEqual({x : 4, y : 37});
    });

    it("Calculating clicked tile, grid dont span whole draw area. Edge case", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:100, height:25},
            10
        );

        var pos = converter.convertWindowToGrid({x:40, y:125});
        expect(pos).toEqual({x:4, y:25});
    });

    it("Calculating clicked tile, grid dont span whole draw area. Edge case on high y", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:100, height:25},
            10
        );

        var pos = converter.convertWindowToGrid({x:40, y:375});
        expect(pos).toEqual({x:4, y:0});
    });

    it("Calculating clicked tile, edge x", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:50, height:25},
            10
        );

        var pos = converter.convertWindowToGrid({x:250, y:375});
        expect(pos).toEqual({x:0, y:0});
    });

    it("Calculating clicked tile, edge x high", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:50, height:25},
            10
        );

        var pos = converter.convertWindowToGrid({x:750, y:375});
        expect(pos).toEqual({x:50, y:0});
    });


    it("Calculating tile position on canvas, origo position", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:100, height:50},
            10
        );

        var pos = converter.convertGridToCanvas({x:0, y:0});
        expect(pos).toEqual({x:0, y:500});
    });

    it("Calculating tile position on canvas", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:100, height:50},
            10
        );

        var pos = converter.convertGridToCanvas({x:4, y:2});
        expect(pos).toEqual({x:40, y:480});
    });

    it("Calculating tile position on canvas, canvas is smaller than container", function() {

        var converter = new model.CoordinateConverter(
            {width:1000, height:500},
            {width:50, height:25},
            10
        );

        var pos = converter.convertGridToCanvas({x:4, y:2});
        expect(pos).toEqual({x:290, y: 355});
    });

});
