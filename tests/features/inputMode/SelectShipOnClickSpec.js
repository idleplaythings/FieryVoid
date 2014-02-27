describe("SelectShipOnClick", function() {

    var shipService, selectedShip;

    beforeEach(function() {
        selectedShip = jasmine.createSpyObj(
            'selectedShip',
            ['selectShip' ]
        );

    });

    it("should select closest ship", function() {
        shipService = {getShipOnScenePosition: function(){}};
        spyOn(shipService, 'getShipOnScenePosition').andReturn(1);

        var event = {game: 2, stopped: false};

        var selectAction = new model.inputAction.SelectShipOnClick(shipService, selectedShip);
        selectAction.onClick(event);

        expect(selectedShip.selectShip).toHaveBeenCalledWith(1);
        expect(event.stopped).toBe(true);
    });

    it("should not select ship if no ship found", function() {
        shipService = {getShipOnScenePosition: function(){}};
        spyOn(shipService, 'getShipOnScenePosition').andReturn(null);

        var event = {game: 2, stopped: false};

        var selectAction = new model.inputAction.SelectShipOnClick(shipService, selectedShip);
        selectAction.onClick(event);

        expect(selectedShip.selectShip).not.toHaveBeenCalled();
        expect(event.stopped).toBe(false);
    });

});
