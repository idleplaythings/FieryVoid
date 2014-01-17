describe("Icon", function() {

    var icon;

    beforeEach(function() {
        icon = new model.Icon();
        icon.iconObject = {};
        icon.position = {x:0, y:0}
        icon.getThreeObject = function(){
            return {
                position: icon.position,
                rotation: { z: 0 }
            };
        };
    });

    it("calculates clicked center tile on even width/height grid correctly", function() {
        icon.width = 4;
        icon.height = 4;

        expect(icon.getTileOnPosition({x:0, y:0})).toEqual({x:2, y:2});
    });

    it("calculates clicked center tile on odd width/height grid correctly", function() {
        icon.width = 3;
        icon.height = 3;

        expect(icon.getTileOnPosition({x:0, y:0})).toEqual({x:1, y:1});
    });

    it("calculates clicked tile on even width/height grid correctly", function() {
        icon.width = 4;
        icon.height = 4;

        expect(icon.getTileOnPosition({x: -40, y: -40})).toEqual({x:0, y:0});
    });

    it("calculates clicked tile on odd width/height grid correctly", function() {
        icon.width = 3;
        icon.height = 3;

        expect(icon.getTileOnPosition({x: -16, y: -16})).toEqual({x:0, y:0});
        expect(icon.getTileOnPosition({x: -10, y: -10})).toEqual({x:1, y:1});
        expect(icon.getTileOnPosition({x: 31, y: 0})).toEqual({x:2, y:1});
    });

    it("finds current tile position correctly on even width/height grid", function() {
        icon.width = 4;
        icon.height = 4;

        expect(icon.getClosestTilePosition({x: -16, y: -16})).toEqual({x:-30, y:-30});
    });

    it("finds current tile position correctly on odd width/height grid", function() {
        icon.width = 3;
        icon.height = 3;

        expect(icon.getClosestTilePosition({x: -10, y: -10})).toEqual({x:-15, y:-15});
        expect(icon.getClosestTilePosition({x: 16, y: 16})).toEqual({x:15, y:15});
        expect(icon.getClosestTilePosition({x: 31, y: 0})).toEqual({x:15, y:-15});
        expect(icon.getClosestTilePosition({x: 0, y: 31})).toEqual({x:-15, y:15});
    });
});