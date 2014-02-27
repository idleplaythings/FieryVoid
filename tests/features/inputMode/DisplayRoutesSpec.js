describe("DisplayRoutes", function() {

    var shipAnimationService;

    beforeEach(function() {
        shipAnimationService = jasmine.createSpyObj('ShipAnimationService', [ 'getShipAnimations' ]);
    });

    createAnimations = function() {
        var animations = []

        for (var i=0; i<3; i++) {
            animations.push(
                jasmine.createSpyObj('model.movement.ShipAnimationDetails', [ 'showRoute' ])
            );
        }

        return animations;
    }

    it("should display all routes", function() {
        animations = createAnimations();

        shipAnimationService.getShipAnimations.andReturn(animations);

        var displayRoutes = new model.inputAction.DisplayRoutes(shipAnimationService);
        displayRoutes.onActivation();

        animations.forEach(function(animation) {
            expect(animation.showRoute).toHaveBeenCalled();
        });
    });
});
