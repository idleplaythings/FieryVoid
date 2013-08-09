describe("Sorting thrusters for moving ship", function() {

    it("Testing vector angle", function() {

        var v = new Vector2(1,1);

        expect(v.angle()).toEqual(45);
    });


    it("Sorting four thrusters, expecting 3, 4, 1, 2", function() {
        var resolver = new model.ThrusterResolver();
        var target = new Vector2(1, 0);
        var targetRotation = 0;

        var thrusters = [
            new model.ThrusterForMovement(new Vector2(0.5, 1), 0, 1, 1),
            new model.ThrusterForMovement(new Vector2(-1, -1), 0, 1, 2),
            new model.ThrusterForMovement(new Vector2(1, 0), 0, 1, 3),
            new model.ThrusterForMovement(new Vector2(0.5, 0), 0, 1, 4)
        ];


        var sorted = reduceThrustersToId(
            resolver.sortThrusters(thrusters, target, targetRotation, 1));
        var expected = [3, 4, 1, 2];

        expect(sorted).toEqual(expected);
    });

    it("Sorting four thrusters, rotation tiebreaking instead of length 4, 2, 1, 3", function() {
        var resolver = new model.ThrusterResolver();
        var target = new Vector2(1, 0);
        var targetRotation = 1;

        var thrusters = [
            new model.ThrusterForMovement(new Vector2(1, 0), 0, 1, 1),
            new model.ThrusterForMovement(new Vector2(1, 0), 0.5, 1, 2),
            new model.ThrusterForMovement(new Vector2(1, 0), 0, 1, 3),
            new model.ThrusterForMovement(new Vector2(0.5, 0), 1, 1, 4)
        ];


        var sorted = reduceThrustersToId(
            resolver.sortThrusters(thrusters, target, targetRotation, 1));
        var expected = [4, 2, 1, 3];

        expect(sorted).toEqual(expected);
    });

    function reduceThrustersToId(thrusters)
    {
        return thrusters.map(function(t){return t.module});
    }
});
