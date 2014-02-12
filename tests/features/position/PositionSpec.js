describe("ShipDesignPositionService", function() {

    var positionService;

    beforeEach(function() {
        var shipDesign = {hullLayout: {
            getWidth: function(){return 0},
            getHeight: function(){return 0}
        }}
        positionService = new model.ShipDesignPositionService(shipDesign);
     
    });

    it("calculates clicked center tile on even width/height grid correctly", function() {
        positionService._width = 4;
        positionService._height = 4;

        expect(positionService.getTileOnPosition({x:0, y:0})).toEqual({x:2, y:2});
    });

    it("calculates clicked center tile on odd width/height grid correctly", function() {
        positionService._width = 3;
        positionService._height = 3;

        expect(positionService.getTileOnPosition({x:0, y:0})).toEqual({x:1, y:1});
    });

    it("calculates clicked tile on even width/height grid correctly", function() {
        positionService._width = 4;
        positionService._height = 4;

        expect(positionService.getTileOnPosition({x: -40, y: -40})).toEqual({x:0, y:0});
    });

    it("calculates clicked tile on odd width/height grid correctly", function() {
        positionService._width = 3;
        positionService._height = 3;

        expect(positionService.getTileOnPosition({x: -16, y: -16})).toEqual({x:0, y:0});
        expect(positionService.getTileOnPosition({x: -10, y: -10})).toEqual({x:1, y:1});
        expect(positionService.getTileOnPosition({x: 31, y: 0})).toEqual({x:2, y:1});
    });

    it("finds current tile position correctly on even width/height grid", function() {
        positionService._width = 4;
        positionService._height = 4;

        expect(positionService.getClosestTilePositionInScene({x: -16, y: -16})).toEqual({x:-30, y:-30});
    });

    it("finds current tile position correctly on odd width/height grid", function() {
        positionService._width = 3;
        positionService._height = 3;

        expect(positionService.getClosestTilePositionInScene({x: -10, y: -10})).toEqual({x:-15, y:-15});
        expect(positionService.getClosestTilePositionInScene({x: 16, y: 16})).toEqual({x:15, y:15});
        expect(positionService.getClosestTilePositionInScene({x: 31, y: 0})).toEqual({x:15, y:-15});
        expect(positionService.getClosestTilePositionInScene({x: 0, y: 31})).toEqual({x:-15, y:15});
    });
});