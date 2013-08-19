describe("Sorting thrusters for moving ship", function() {

    it("Testing vector angle", function() {

        var v = new Vector2(1,1);

        expect(v.angle()).toEqual(315);
    });


    it("One thruster in wrong direction, no rotation involved", function() {
        var targetRotation = 0;
        var thrusters = [
            new model.ThrusterForMovement(new Vector2(0.5, 0), 0, 1, 1),
            new model.ThrusterForMovement(new Vector2(0, -1), 0, 1, 2),
            new model.ThrusterForMovement(new Vector2(1, 0), 0, 1, 3),
            new model.ThrusterForMovement(new Vector2(0.25, 0), 0, 1, 4)
        ];

        var resolver = new model.ThrusterGroup(thrusters);

        var sorted = reduceThrustersToId(
            resolver.getThrustersSortedForMovement(new Vector2(1,0), targetRotation));
        var expected = [3, 1, 4];

        expect(sorted).toEqual(expected);
    });

    it("Rotation, with one rotating wrong direction.", function() {
        var targetRotation = 0;
        var thrusters = [
            new model.ThrusterForMovement(new Vector2(0.5, 0), 0, 1, 1),
            new model.ThrusterForMovement(new Vector2(1, 0), -1, 1, 3),
            new model.ThrusterForMovement(new Vector2(0.25, 0), 0.5, 1, 4)
        ];

        var resolver = new model.ThrusterGroup(thrusters);

        var sorted = reduceThrustersToId(
            resolver.getThrustersSortedForMovement(new Vector2(1,0), targetRotation));
        var expected = [1, 4, 3];

        expect(sorted).toEqual(expected);
    });

    it("Rotation, with one rotating wrong direction and with target rotation", function() {
        var targetRotation = 1;
        var thrusters = [
            new model.ThrusterForMovement(new Vector2(0.5, 0), 0, 1, 1),
            new model.ThrusterForMovement(new Vector2(1, 0), -1, 1, 3),
            new model.ThrusterForMovement(new Vector2(0.25, 0), 0.5, 1, 4),
            new model.ThrusterForMovement(new Vector2(0.20, 0), 0.6, 1, 5)
        ];

        var resolver = new model.ThrusterGroup(thrusters);

        var sorted = reduceThrustersToId(
            resolver.getThrustersSortedForMovement(new Vector2(1,0), targetRotation));
        var expected = [ 5, 4, 1, 3 ];

        expect(sorted).toEqual(expected);
    });

    it("Testing sorting thrusters by rotation", function() {
        var thrusters = [
            new model.ThrusterForMovement(new Vector2(0.5, 0), 0, 1, 1),
            new model.ThrusterForMovement(new Vector2(1, 0), -1, 1, 3),
            new model.ThrusterForMovement(new Vector2(1, 0), -0.2, 1, 6),
            new model.ThrusterForMovement(new Vector2(1, 0), -2, 1, 7),
            new model.ThrusterForMovement(new Vector2(0.25, 0), 0.5, 1, 4),
            new model.ThrusterForMovement(new Vector2(0.20, 0), 0.6, 1, 5)
        ];

        var resolver = new model.ThrusterGroup(thrusters);
        resolver.sortThrusters();

        expect(reduceThrustersToId(resolver._rPositive)).toEqual([5, 4]);
        expect(reduceThrustersToId(resolver._rNegative)).toEqual([7, 3, 6]);
    });

    function reduceThrustersToId(thrusters)
    {
        return thrusters.map(function(t){return t.module});
    }
});
