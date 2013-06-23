describe("Ship display grid", function() {

    var noop = function(){};

    beforeEach(function() {

    });

    it("Ship display should calculate the grid scaling correctly",
        function() {

        var  grid = new model.ShipDisplayGrid(
            {width:100, height:50, tileScale:20},
            {getContext: noop}
        );
        console.log(grid);
        grid.getDimensions = function()
        {
            console.log("hi");
            return {width:1000, height:500};
        }

        var tileScale = grid.calculateZoomForFit();
        expect(tileScale).toEqual(0.5);
    });
});
