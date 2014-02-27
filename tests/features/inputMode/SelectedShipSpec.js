describe("SelectedShip", function() {

    var eventDispatcherMock;

    beforeEach(function() {
        eventDispatcherMock = jasmine.createSpyObj(
            'Dispatcher',
            ['dispatch' ]
        );

    });

    it("should dispatch SelectedShipEvent", function() {

        var selectedShip = new model.SelectedShip(eventDispatcherMock);
        selectedShip.selectShip(1);

        expect(eventDispatcherMock.dispatch.mostRecentCall.args[0].ship).toEqual(1);
        expect(eventDispatcherMock.dispatch.mostRecentCall.args[0].name).toEqual('ShipSelectedEvent');
    });

});
