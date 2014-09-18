describe("SelectShipOnClick", function() {

    var shipService, selectedShip, event, selectAction;

    beforeEach(function() {
        shipService = { getShipOnScenePosition: function() {} };
        selectedShip = jasmine.createSpyObj('selectedShip', [ 'selectShip' ]);
        event = {game: 2, stopped: false};

        selectAction = new model.inputAction.SelectShipOnClick(shipService, selectedShip);
    });

    it("should select closest ship", function() {
        var ship = {isOwnedBy: function(){return true;}};
        spyOn(shipService, 'getShipOnScenePosition').andReturn(ship);

        selectAction.onClick(event);

        expect(selectedShip.selectShip).toHaveBeenCalledWith(ship);
        expect(event.stopped).toBe(true);
    });

    it("should not select ship if no ship found", function() {
        spyOn(shipService, 'getShipOnScenePosition').andReturn(null);

        selectAction.onClick(event);

        expect(selectedShip.selectShip).not.toHaveBeenCalled();
        expect(event.stopped).toBe(false);
    });
});
