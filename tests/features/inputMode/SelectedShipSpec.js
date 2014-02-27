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

    it("should dispatch ShipDeselectedEvent", function() {

        var selectedShip = new model.SelectedShip(eventDispatcherMock);
        selectedShip.selectShip(3);
        selectedShip.selectShip(1);

        expect(eventDispatcherMock.dispatch.calls[0].args[0].ship).toEqual(3);
        expect(eventDispatcherMock.dispatch.calls[0].args[0].name).toEqual('ShipSelectedEvent');
        expect(eventDispatcherMock.dispatch.calls[1].args[0].ship).toEqual(3);
        expect(eventDispatcherMock.dispatch.calls[1].args[0].name).toEqual('ShipDeselectedEvent');
        expect(eventDispatcherMock.dispatch.calls[2].args[0].ship).toEqual(1);
        expect(eventDispatcherMock.dispatch.calls[2].args[0].name).toEqual('ShipSelectedEvent');
    });

});
