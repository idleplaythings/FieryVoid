describe("Rotating module and preserving cordinates", function() {

    beforeEach(function() {

    });

    it("Nönnöti",
        function() {

            var moduleLayout = new model.ModuleLayout({
                width:2,
                height:2,
                direction:2
            });

            var i = moduleLayout.getTileListIndex({x:1, y:0});
            expect(tileScale).toEqual(1);
        });
});
