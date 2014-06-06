describe("DisplayRoutes", function() {
    var shipAnimationService, gameStatus;

    beforeEach(function() {
        shipAnimationService = jasmine.createSpyObj('ShipAnimationService', [ 'showAllRoutes' ]);
        gameState = jasmine.createSpyObj('GameState', [ 'getTurn' ]);
    });

    it("should display all routes", function() {
        var displayRoutes = new model.inputAction.DisplayRoutes(shipAnimationService, gameState);
        displayRoutes.onActivation();

        expect(shipAnimationService.showAllRoutes).toHaveBeenCalled();
        expect(gameState.getTurn).toHaveBeenCalled();
    });
});
