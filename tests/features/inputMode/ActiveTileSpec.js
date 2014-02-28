describe("ActiveTile", function() {

    var eventDispatcherMock;

    beforeEach(function() {
        eventDispatcherMock = jasmine.createSpyObj('Dispatcher', [ 'dispatch' ]);
    });

    it("should dispatch TileActivatedEvent", function() {

        var activeTile = new model.ActiveTile(eventDispatcherMock);
        activeTile.activateTile(1);

        expect(eventDispatcherMock.dispatch.mostRecentCall.args[0].tile).toEqual(1);
        expect(eventDispatcherMock.dispatch.mostRecentCall.args[0].name).toEqual('TileActivatedEvent');
    });

    it("should dispatch TileDeactivatedEvent", function() {

        var activeTile = new model.ActiveTile(eventDispatcherMock);
        activeTile.activateTile(3);
        activeTile.activateTile(1);

        expect(eventDispatcherMock.dispatch.calls[0].args[0].tile).toEqual(3);
        expect(eventDispatcherMock.dispatch.calls[0].args[0].name).toEqual('TileActivatedEvent');
        expect(eventDispatcherMock.dispatch.calls[1].args[0].tile).toEqual(3);
        expect(eventDispatcherMock.dispatch.calls[1].args[0].name).toEqual('TileDeactivatedEvent');
        expect(eventDispatcherMock.dispatch.calls[2].args[0].tile).toEqual(1);
        expect(eventDispatcherMock.dispatch.calls[2].args[0].name).toEqual('TileActivatedEvent');
    });
});
