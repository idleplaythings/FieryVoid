describe("DisplayRoutes", function() {
    var shipAnimationService, gameStatus, dispatcher;

    beforeEach(function() {
        shipAnimationService = jasmine.createSpyObj('ShipAnimationService', [ 'showAllRoutes' ]);
        gameState = jasmine.createSpyObj('GameState', [ 'getTurn' ]);
        dispatcher = jasmine.createSpyObj('Dispatcher', ['attach']);
    });

    it("should display all routes", function() {
        var displayRoutes = new model.inputAction.DisplayRoutes(shipAnimationService, gameState, dispatcher);
        displayRoutes.onActivation();

        expect(shipAnimationService.showAllRoutes).toHaveBeenCalled();
        expect(gameState.getTurn).toHaveBeenCalled();
    });
});
