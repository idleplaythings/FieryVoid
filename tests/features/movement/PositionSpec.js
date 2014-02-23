describe("PositionHelper", function() {
    var positionHelper;
    var startPosition;

beforeEach(function() {
        positionHelper = new model.movement.PositionHelper();

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
        expect(positionHelper.angleBetweenPositions(startPosition, getEndPosition( 3, -3,  0))).toEqual(0);
        expect(positionHelper.angleBetweenPositions(startPosition, getEndPosition( 3, -2, -1))).toEqual(-30);
        expect(positionHelper.angleBetweenPositions(startPosition, getEndPosition( 3, -1, -2))).toEqual(-60);
        expect(positionHelper.angleBetweenPositions(startPosition, getEndPosition( 2,  0, -2))).toEqual(-90);
        expect(positionHelper.angleBetweenPositions(startPosition, getEndPosition(-3,  3,  0))).toEqual(180);
        expect(positionHelper.angleBetweenPositions(startPosition, getEndPosition( 0, -2,  2))).toEqual(90);
        expect(positionHelper.angleBetweenPositions(startPosition, getEndPosition( 1, -3,  2))).toEqual(60);
        expect(positionHelper.angleBetweenPositions(startPosition, getEndPosition( 2, -3,  1))).toEqual(30);
    });
});