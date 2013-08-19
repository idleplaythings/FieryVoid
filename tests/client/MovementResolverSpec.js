describe("Movement resolver", function() {

     it("Converting position to ship centered", function() {

        var m = new model.MovementResolver();

        expect(m.convertVectorToShipCentered(
            new Vector2(5,-5), 45).round()).toEqual(new Vector2(7, 0));
     });

    it("Converting position to normal space", function() {

        var m = new model.MovementResolver();

        var start = new Vector2(5,-5);
        var first = m.convertVectorToShipCentered(start, 45);
        var second = m.convertVectorToSpace(first, 45);

        expect(second.round()).toEqual(start);
    });
});
