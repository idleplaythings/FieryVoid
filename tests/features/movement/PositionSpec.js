describe("MovementPosition", function() {
    var startPosition;

    beforeEach(function() {
        startPosition = new model.movement.Position({
            position: new model.hexagon.coordinate.Cube(1, -1, 0),
            facing: 0
        });
    });

    var getEndPosition = function(x, y, z) {
        return new model.movement.Position({
            position: new model.hexagon.coordinate.Cube(x, y, z)
        });
    }

    it("calculates angle relative to facing from another position", function() {
        expect(startPosition.getAngleTo(getEndPosition( 3, -3,  0))).toEqual(0);
        expect(startPosition.getAngleTo(getEndPosition( 3, -2, -1))).toEqual(-30);
        expect(startPosition.getAngleTo(getEndPosition( 3, -1, -2))).toEqual(-60);
        expect(startPosition.getAngleTo(getEndPosition( 2,  0, -2))).toEqual(-90);
        expect(startPosition.getAngleTo(getEndPosition(-3,  3,  0))).toEqual(180);
        expect(startPosition.getAngleTo(getEndPosition( 0, -2,  2))).toEqual(90);
        expect(startPosition.getAngleTo(getEndPosition( 1, -3,  2))).toEqual(60);
        expect(startPosition.getAngleTo(getEndPosition( 2, -3,  1))).toEqual(30);
    });
});