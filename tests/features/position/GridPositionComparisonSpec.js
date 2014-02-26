describe("GridPositionComparison", function() {
    var positionHelper;
    var startPosition;

    beforeEach(function() {
        positionHelper = new model.GridPositionComparison();

        startPosition = new model.movement.Position({
            position: new model.hexagon.coordinate.Cube(1, -1, 0),
            facing: 0
        });
    });

    var getPosition = function(x, y, z) {
        return new model.movement.Position({
            position: new model.hexagon.coordinate.Cube(x, y, z)
        });
    }

    it("returns distance between two positions", function() {
        expect(positionHelper.getDistanceBetweenPositions(
            getPosition(-3, 3, 0),
            getPosition(3, -1, -2)
        )).toEqual(6);
    });

    it("calculates angle relative to facing from another position", function() {
        expect(positionHelper.getAngleBetweenPositions(startPosition, getPosition( 3, -3,  0))).toEqual(0);
        expect(positionHelper.getAngleBetweenPositions(startPosition, getPosition( 3, -2, -1))).toEqual(-30);
        expect(positionHelper.getAngleBetweenPositions(startPosition, getPosition( 3, -1, -2))).toEqual(-60);
        expect(positionHelper.getAngleBetweenPositions(startPosition, getPosition( 2,  0, -2))).toEqual(-90);
        expect(positionHelper.getAngleBetweenPositions(startPosition, getPosition(-3,  3,  0))).toEqual(180);
        expect(positionHelper.getAngleBetweenPositions(startPosition, getPosition( 0, -2,  2))).toEqual(90);
        expect(positionHelper.getAngleBetweenPositions(startPosition, getPosition( 1, -3,  2))).toEqual(60);
        expect(positionHelper.getAngleBetweenPositions(startPosition, getPosition( 2, -3,  1))).toEqual(30);
    });
});