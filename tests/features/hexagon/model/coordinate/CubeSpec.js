describe("Cube Coordinate", function() {
    var Cube ;

    beforeEach(function() {
        Cube = model.hexagon.coordinate.Cube;
    });

    it("throws an error on invalid coordinates", function() {
        expect(function() { new Cube(1, 0, 0); }).toThrow();
    });

    it("sums itself with another cube coordinate", function() {
        var start = new Cube(1, -1, 0);
        var offset = new Cube(2, -1, -1);
        var end = start.add(offset);

        expect(end.x).toEqual(3);
        expect(end.y).toEqual(-2);
        expect(end.z).toEqual(-1);
    });

    it("subtracts itself with another cube coordinate", function() {
        var start = new Cube(1, -1, 0);
        var offset = new Cube(2, -1, -1);
        var end = start.subtract(offset);

        expect(end.x).toEqual(-1);
        expect(end.y).toEqual(0);
        expect(end.z).toEqual(1);
    });

    it("returns neighbouring coordinates", function() {
        var cube = new Cube(0, 0, 0);
        var neighbours = cube.getNeighbours();

        expect(neighbours).toContain(new Cube({ x:  1, y: -1, z:  0 }));
        expect(neighbours).toContain(new Cube({ x: -1, y:  1, z:  0 }));
        expect(neighbours).toContain(new Cube({ x:  1, y:  0, z: -1 }));
        expect(neighbours).toContain(new Cube({ x: -1, y:  0, z:  1 }));
        expect(neighbours).toContain(new Cube({ x:  0, y:  1, z: -1 }));
        expect(neighbours).toContain(new Cube({ x:  0, y: -1, z:  1 }));
    });

    it("implicitly rounds to nearest coordinate", function() {
        var cube = new Cube(1.1639069893356886, -1.888351433780133, 0.7244444444444444);

        expect(cube.x).toEqual(1);
        expect(cube.y).toEqual(-2);
        expect(cube.z).toEqual(1);
    });

    it("convers to even-r offset coordinates on even row", function() {
        var cube = new Cube(1, -1 , 0);
        var offset = cube.toEvenR();

        expect(offset.q).toEqual(1);
        expect(offset.r).toEqual(0);
        expect(offset.layout).toEqual(model.hexagon.coordinate.Offset.EVEN_R);
    });

    it("convers to even-r offset coordinates on odd row", function() {
        var cube = new Cube(0, -1 , 1);
        var offset = cube.toEvenR();

        expect(offset.q).toEqual(1);
        expect(offset.r).toEqual(1);
        expect(offset.layout).toEqual(model.hexagon.coordinate.Offset.EVEN_R);
    });

    it("convers to odd-r offset coordinates on even row", function() {
        var cube = new Cube(1, -1 , 0);
        var offset = cube.toOddR();

        expect(offset.q).toEqual(1);
        expect(offset.r).toEqual(0);
        expect(offset.layout).toEqual(model.hexagon.coordinate.Offset.ODD_R);
    });

    it("convers to odd-r offset coordinates on odd row", function() {
        var cube = new Cube(0, -1 , 1);
        var offset = cube.toOddR();

        expect(offset.q).toEqual(0);
        expect(offset.r).toEqual(1);
        expect(offset.layout).toEqual(model.hexagon.coordinate.Offset.ODD_R);
    });
});