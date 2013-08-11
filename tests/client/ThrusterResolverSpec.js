describe("Moving a ship", function() {

    it("Nönnöti", function() {

        var resolver = new model.ThrusterResolver(
            getBalancedThrusters(),
            new Vector2(10, 5),
            22.5,
            10
        );

        resolver.resolveThrusterUse();

        expect(1).toEqual(0);
    });

    function getBalancedThrusters()
    {
        var thrusters = [
            new model.ThrusterForMovement(new Vector2(1, 0), 10, 1, "back left"),
            new model.ThrusterForMovement(new Vector2(2, 0), 0, 1, "back middle"),
            new model.ThrusterForMovement(new Vector2(1, 0), -10, 1, "back right"),

            new model.ThrusterForMovement(new Vector2(-1, 0), -10, 1, "front left"),
            new model.ThrusterForMovement(new Vector2(-1, 0), 10, 1, "front right"),

            new model.ThrusterForMovement(new Vector2(0, -1), -10, 1, "left left"),
            new model.ThrusterForMovement(new Vector2(0, -1), 10, 1, "left right"),

            new model.ThrusterForMovement(new Vector2(0, 1), 10, 1, "right left"),
            new model.ThrusterForMovement(new Vector2(0, 1), -10, 1, "right right"),
        ];

        return new model.ThrusterGroup(thrusters);
    }
});
