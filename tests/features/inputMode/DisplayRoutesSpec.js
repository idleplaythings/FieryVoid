describe("DisplayRoutes", function() {
    var shipAnimationService;

    beforeEach(function() {
        shipAnimationService = jasmine.createSpyObj('ShipAnimationService', [ 'showAllRoutes' ]);
    });

    it("should display all routes", function() {
        var displayRoutes = new model.inputAction.DisplayRoutes(shipAnimationService);
        displayRoutes.onActivation();

        expect(shipAnimationService.showAllRoutes).toHaveBeenCalled();
    });
});
