describe("SelectedShip", function() {

    var eventDispatcherMock, ship;

    beforeEach(function() {
        eventDispatcherMock = jasmine.createSpyObj('Dispatcher', ['dispatch' ]);
        Meteor = {userId: function(){return "userId"}};
        
    });

    it("should dispatch SelectedShipEvent", function() {

        var selectedShip = new model.SelectedShip(eventDispatcherMock);
        selectedShip.selectShip(getShip("ship", "userId"));

        expect(eventDispatcherMock.dispatch.mostRecentCall.args[0].ship.shipId).toEqual("ship");
        expect(eventDispatcherMock.dispatch.mostRecentCall.args[0].name).toEqual('ShipSelectedEvent');
    });

    it("should dispatch ShipDeselectedEvent", function() {

        var selectedShip = new model.SelectedShip(eventDispatcherMock);
        selectedShip.selectShip(getShip("ship3", "userId"));
        selectedShip.selectShip(getShip("ship1", "userId"));

        expect(eventDispatcherMock.dispatch.calls[0].args[0].ship.shipId).toEqual("ship3")
        expect(eventDispatcherMock.dispatch.calls[0].args[0].name).toEqual('ShipSelectedEvent');
        expect(eventDispatcherMock.dispatch.calls[1].args[0].ship.shipId).toEqual("ship3")
        expect(eventDispatcherMock.dispatch.calls[1].args[0].name).toEqual('ShipDeselectedEvent');
        expect(eventDispatcherMock.dispatch.calls[2].args[0].ship.shipId).toEqual("ship1")
        expect(eventDispatcherMock.dispatch.calls[2].args[0].name).toEqual('ShipSelectedEvent');
    });

    var getShip = function(shipId, ownerId){
        return {
            shipId: shipId,
            ownerId: ownerId,
            isOwnedBy: function(id)
            {
                return id == ownerId;
            }
        };
    }

});
