describe("UiEventManager", function() {

    var eventDispatcherMock;
    var coordinateConverter = {
        fromViewPortToGame: function(pos)
        {
            return {x:pos.x*2, y:pos.y*2};
        }
    };

    beforeEach(function() {
        eventDispatcherMock = jasmine.createSpyObj(
            'Dispatcher',
            [ 'attach', 'dispatch' ]
        );

    });

    it("should capture a click", function() {

        var resolver = new model.UiEventManager(null, coordinateConverter, eventDispatcherMock);
        resolver._getMousePositionInObservedElement = function(e){return {x:100, y:100};};


        resolver.mouseDown(getMockEvent());
        resolver.mouseUp(getMockEvent());

        expect(eventDispatcherMock.dispatch.mostRecentCall.args[0].view).toEqual({ x : 100, y : 100 });
        expect(eventDispatcherMock.dispatch.mostRecentCall.args[0].name).toEqual('ClickEvent');
    });

    it("should consider a mouseUp a click if moved less than threshold", function() {

        var resolver = new model.UiEventManager(null, coordinateConverter, eventDispatcherMock);

        var i = -1;
        var positions = [{x:100, y:100}, {x:105, y:105}, {x:106, y:106}];
        resolver._getMousePositionInObservedElement = function(e){
            i++;
            return positions[i];
        };
       
        resolver.mouseDown(getMockEvent());
        resolver.mouseMove(getMockEvent());
        resolver.mouseUp(getMockEvent());

        expect(eventDispatcherMock.dispatch.calls[0].args[0].name).toEqual('DragEvent');
        expect(eventDispatcherMock.dispatch.calls[1].args[0].name).toEqual('MouseMoveEvent');
        expect(eventDispatcherMock.dispatch.calls[2].args[0].name).toEqual('ClickEvent');
    });

    it("should consider mouseUp a drag when moved more than threshold", function() {
        
        var eventDispatcherMock = {attach: function(){}, dispatch: function(){}};

        var resolver = new model.UiEventManager(null, coordinateConverter, eventDispatcherMock);

        var listener = function(payload){
            if (! payload.release)
                actual = payload;
        };

        spyOn(eventDispatcherMock, 'dispatch').andCallFake(function(event) {
            if (event.capture)
                event.capture(listener);
        });


        var i = -1;
        var positions = [{x:100, y:100}, {x:120, y:120}];
        resolver._getMousePositionInObservedElement = function(e){
            i++;
            return positions[i];
        };

        var actual = null;


        resolver.mouseDown(getMockEvent());
        resolver.mouseMove(getMockEvent());
        resolver.mouseUp(getMockEvent());

        expect(eventDispatcherMock.dispatch.calls[0].args[0].name).toEqual('DragEvent');

        expect(actual.current.view).toEqual({ x : 120, y : 120 });
    });

    function getMockEvent()
    {
        return {
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false
        };
    }
});
