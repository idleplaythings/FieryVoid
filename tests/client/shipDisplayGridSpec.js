describe("Ship display grid", function() {

    var noop = function(){};

    beforeEach(function() {

    });

    it("Ship display should calculate the grid scaling correctly",
        function() {

        var mockTarget = jQuery('<canvas width="1000" height="500"></canvas>');
        var grid = new model.ShipDisplayGrid(mockTarget, "test");
        grid.ship = {hullLayout:{width:25, height:25, tileScale:20}};
        grid.getDimensions = function()
        {
            console.log("hi");
            return {width:1000, height:500};
        }

        var tileScale = grid.calculateZoomForFit();
        expect(tileScale).toEqual(1);
    });
});
