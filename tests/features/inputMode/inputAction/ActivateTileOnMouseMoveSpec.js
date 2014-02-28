describe("ActivateTileOnMouseMove", function() {
    // var shipAnimationService;
    var gridService, activeTile, activateTile;

    beforeEach(function() {
        gridService = jasmine.createSpyObj('GridService', [ 'resolveGridCoordinates' ]);
        activeTile = jasmine.createSpyObj('ActiveTile', [ 'getTile', 'activateTile' ]);

        activateTile = new model.inputAction.ActivateTileOnMouseMove(gridService, activeTile);
    });

    it("should activate tile on mouse move", function() {
        var coordinates = new model.hexagon.coordinate.Offset(10, 10);

        gridService.resolveGridCoordinates.andReturn(coordinates);

        activateTile.onMouseMove({ game: { x: 100, y: 100 }});

        expect(gridService.resolveGridCoordinates).toHaveBeenCalledWith({ x: 100, y: 100 });
        expect(activeTile.activateTile).toHaveBeenCalledWith(coordinates);
    });

    it("should activate tile only if it changes", function() {
        gridService.resolveGridCoordinates.andCallFake(function(coordinates) {
            if (coordinates.x === 200 && coordinates.y === 200) {
                return new model.hexagon.coordinate.Offset(20, 20);
            } else {
                return new model.hexagon.coordinate.Offset(10, 10);
            }
        });

        activateTile.onMouseMove({ game: { x: 100, y: 100 }});
        activateTile.onMouseMove({ game: { x: 150, y: 150 }});
        activateTile.onMouseMove({ game: { x: 200, y: 200 }});

        expect(activeTile.activateTile.calls.length).toBe(2);
    });
});
