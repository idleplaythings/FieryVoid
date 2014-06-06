describe("HighlightActiveRoute", function() {

    var highlightActiveRoute, dispatcher, ship, shipAnimationService, gameState;

    beforeEach(function() {
        this.addMatchers(customMatchers);

        dispatcher = jasmine.createSpyObj('Dispatcher', [ 'attach', 'dispatch' ]);
        gameState = jasmine.createSpyObj('GameState', [ 'getTurn' ]);

        ship = { id: 1 };
        selectedShip = { getShip: function() { }};

        shipAnimationService = jasmine.createSpyObj(
            'ShipAnimationService',
            [
                'highlightRouteFor',
                'clearRouteHighlights'
            ]
        );

        highlightActiveRoute = new model.inputAction.HighlightActiveRoute(
            dispatcher,
            selectedShip,
            shipAnimationService,
            gameState
        );
    });

    it("should attach to relevant events", function() {
        expect(dispatcher).toHaveListenerFor('ShipSelectedEvent');
        expect(dispatcher.attach.calls.length).toBe(1);
    });

    it("should highlight route only for selected ship when it is selected", function() {
        highlightActiveRoute.onShipSelected({ ship: ship });

        expect(shipAnimationService.clearRouteHighlights).toHaveBeenCalledWith();
        expect(shipAnimationService.highlightRouteFor).toHaveBeenCalledWith(ship);
    });

    it("should highlight route only for selected ship on activation", function() {
        spyOn(selectedShip, 'getShip').andReturn(ship);
        gameState.getTurn.andReturn(1);

        highlightActiveRoute.onActivation();

        expect(shipAnimationService.clearRouteHighlights).toHaveBeenCalledWith();
        expect(shipAnimationService.highlightRouteFor).toHaveBeenCalledWith(ship, 1);
        expect(gameState.getTurn).toHaveBeenCalled();
    });

    it("should clear highlights on deactivation", function() {
        highlightActiveRoute.onDeactivation();

        expect(shipAnimationService.clearRouteHighlights).toHaveBeenCalledWith();
    });
});
