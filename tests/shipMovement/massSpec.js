describe("Ship center of mass", function() {

    it("Ship should be able to calculate it's center of mass",
        function() {

            var mockModule = new ModuleForMassMock({x:0, y:0}, 2, 2, 100);
            var massTool = new model.ShipMass({
                modules:[mockModule]
            });

            var result = massTool.calculateCenterOfMass();
            expect(result).toEqual({x:0, y:0});
        });
});
