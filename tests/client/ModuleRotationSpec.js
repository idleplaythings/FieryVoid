describe("Rotating module and preserving cordinates", function() {

    beforeEach(function() {

    });

    it("3x2 module with direction 3",
        function() {

            var moduleLayout = new model.ModuleLayout({
                width:3,
                height:2,
                direction:3
            });

            var i = moduleLayout.getTileListIndex({x:1, y:0});
            expect(i).toEqual(0);

            var i = moduleLayout.getTileListIndex({x:1, y:1});
            expect(i).toEqual(1);

            var i = moduleLayout.getTileListIndex({x:1, y:2});
            expect(i).toEqual(2);

            var i = moduleLayout.getTileListIndex({x:0, y:2});
            expect(i).toEqual(5);
        });

    it("3x2 module with direction 2",
        function() {

            var moduleLayout = new model.ModuleLayout({
                width:3,
                height:2,
                direction:2
            });

            var i = moduleLayout.getTileListIndex({x:1, y:0});
            expect(i).toEqual(5);

            var i = moduleLayout.getTileListIndex({x:1, y:1});
            expect(i).toEqual(4);

            var i = moduleLayout.getTileListIndex({x:1, y:2});
            expect(i).toEqual(3);

            var i = moduleLayout.getTileListIndex({x:0, y:2});
            expect(i).toEqual(0);
        });

    it("3x2 module with direction 4",
        function() {

            var moduleLayout = new model.ModuleLayout({
                width:3,
                height:2,
                direction:4
            });

            var i = moduleLayout.getTileListIndex({x:1, y:0});
            expect(i).toEqual(4);

            var i = moduleLayout.getTileListIndex({x:1, y:1});
            expect(i).toEqual(1);

            var i = moduleLayout.getTileListIndex({x:2, y:1});
            expect(i).toEqual(0);

            var i = moduleLayout.getTileListIndex({x:2, y:0});
            expect(i).toEqual(3);
        });
});
