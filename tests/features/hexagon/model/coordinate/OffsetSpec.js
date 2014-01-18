describe("Offset Coordinate", function() {
    var Offset;

    beforeEach(function() {
        Offset = model.hexagon.coordinate.Offset;
    });

    it("sums itself with another cube coordinate even row", function() {
        var start = new Offset(0, 0, Offset.ODD_R);
        var offset = new Offset(-2, 1, Offset.ODD_R);
        var end = start.add(offset);

        expect(end.q).toEqual(-2);
        expect(end.r).toEqual(1);
        expect(end.layout).toEqual(Offset.ODD_R);
    });

    it("sums itself with another cube coordinate on odd row", function() {
        var start = new Offset(0, 1, Offset.ODD_R);
        var offset = new Offset(-2, 1, Offset.ODD_R);
        var end = start.add(offset);

        expect(end.q).toEqual(-2);
        expect(end.r).toEqual(2);
        expect(end.layout).toEqual(Offset.ODD_R);
    });

    it("convers to cube coordinates", function() {
        var offset = new Offset(1, 1, Offset.EVEN_R);
        var cube = offset.toCube();

        expect(cube.x).toEqual(1);
        expect(cube.y).toEqual(-1);
        expect(cube.z).toEqual(0);
    });

    it("returns neighbouring coordinates on even row", function() {
        var offset = new Offset(0, 0, Offset.ODD_R);
        var neighbours = offset.getNeighbours();

        expect(neighbours).toContain(new Offset({ q:  0, r:  1, layout: Offset.ODD_R }));
        expect(neighbours).toContain(new Offset({ q:  0, r: -1, layout: Offset.ODD_R }));
        expect(neighbours).toContain(new Offset({ q: -1, r: -1, layout: Offset.ODD_R }));
        expect(neighbours).toContain(new Offset({ q: -1, r:  0, layout: Offset.ODD_R }));
        expect(neighbours).toContain(new Offset({ q: -1, r:  1, layout: Offset.ODD_R }));
        expect(neighbours).toContain(new Offset({ q:  0, r:  1, layout: Offset.ODD_R }));
    });

    it("returns neighbouring coordinates on odd row", function() {
        var offset = new Offset(0, 1, Offset.ODD_R);
        var neighbours = offset.getNeighbours();

        expect(neighbours).toContain(new Offset({ q:  1, r: 1, layout: Offset.ODD_R }));
        expect(neighbours).toContain(new Offset({ q:  1, r: 0, layout: Offset.ODD_R }));
        expect(neighbours).toContain(new Offset({ q:  0, r: 0, layout: Offset.ODD_R }));
        expect(neighbours).toContain(new Offset({ q: -1, r: 1, layout: Offset.ODD_R }));
        expect(neighbours).toContain(new Offset({ q:  0, r: 2, layout: Offset.ODD_R }));
        expect(neighbours).toContain(new Offset({ q:  1, r: 2, layout: Offset.ODD_R }));
    });
});
