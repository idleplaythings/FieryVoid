describe("UiFocusResolver", function() {

    var coordinateConverter = {
        fromViewPortToGame: function(pos)
        {
            return {x:pos.x*2, y:pos.y*2};
        }
    };

    it("should register listeners in correct order", function() {

        var resolver = new model.UiFocusResolver(coordinateConverter, {attach: function(){}});
        resolver.registerListener('click', function(){return false}, 1);
        resolver.registerListener('click', function(){return false}, 0);
        resolver.registerListener('click', function(){return true}, 5);

        expect(resolver.listeners.click[0].callback()).toBe(true);
    });

    it("should capture a click", function() {

        var resolver = new model.UiFocusResolver(coordinateConverter, {attach: function(){}});

        resolver._getMousePositionInObservedElement = function(e){return {x:100, y:100};};

        var actual = null;

        resolver.registerListener('click', function(payload){actual = payload;}, 1);

        resolver.mouseDown(getMockEvent());
        resolver.mouseUp(getMockEvent());


        expect(actual.view).toEqual({ x : 100, y : 100 });
    });

    it("should consider a mouseUp a click if moved less than threshold", function() {

        var resolver = new model.UiFocusResolver(coordinateConverter, {attach: function(){}});

        var i = -1;
        var positions = [{x:100, y:100}, {x:105, y:105}, {x:106, y:106}];
        resolver._getMousePositionInObservedElement = function(e){
            i++;
            return positions[i];
        };
        var actual = null;
        var notActual = null;

        resolver.registerListener( 'drag', function(payload){notActual = payload;}, 1);
        resolver.registerListener('click', function(payload){actual = payload;}, 1);

        resolver.mouseDown(getMockEvent());
        resolver.mouseMove(getMockEvent());
        resolver.mouseUp(getMockEvent());

        expect(actual.view).toBeTruthy();
    });

    it("should consider mouseUp a drag when moved more than threshold", function() {
        var resolver = new model.UiFocusResolver(coordinateConverter, {attach: function(){}});

        var i = -1;
        var positions = [{x:100, y:100}, {x:120, y:120}];
        resolver._getMousePositionInObservedElement = function(e){
            i++;
            return positions[i];
        };

        var actual = null;
        var notActual = null;


        var listener = function(payload){
            if (! payload.release)
                actual = payload;
        };

        resolver.registerListener('click', function(payload){notActual = payload;}, 1);
        resolver.registerListener('drag', function(payload){
            if (payload.capture)
                payload.capture(listener);
        }, 0);

        resolver.mouseDown(getMockEvent());
        resolver.mouseMove(getMockEvent());
        resolver.mouseUp(getMockEvent());

        expect(actual.current.view).toEqual({ x : 120, y : 120 });
        expect(notActual).toBe(null);
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
