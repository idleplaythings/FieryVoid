describe("UiFocusResolver", function() {

    var coordinateConverter = {
        fromViewPortToGame: function(pos)
        {
            return {x:pos.x*2, y:pos.y*2};
        }
    };

    it("should register listeners in correct order", function() {

        var resolver = new model.UiFocusResolver(coordinateConverter);
        resolver.registerListener(true, 1, 'click');
        resolver.registerListener(false, 0, 'click');

        expect(resolver.listeners.click[0].callback).toBe(true);
    });

    it("should capture a click", function() {

        var resolver = new model.UiFocusResolver(coordinateConverter);

        resolver.getMousePositionInObservedElement = function(e){return {x:100, y:100};};

        var actual = null;

        resolver.registerListener(function(payload){actual = payload;}, 1, 'click');

        resolver.mouseDown(null);
        resolver.mouseUp(null);


        expect(actual.view).toEqual({ x : 100, y : 100 });
    });

    it("should consider a mouseUp a click if moved less than threshold", function() {

        var threshold = 10;
        var resolver = new model.UiFocusResolver(coordinateConverter, threshold);

        var i = -1;
        var positions = [{x:100, y:100}, {x:105, y:105}, {x:106, y:106}];
        resolver.getMousePositionInObservedElement = function(e){
            i++;
            return positions[i];
        };
        var actual = null;
        var notActual = null;

        resolver.registerListener(function(payload){notActual = payload;}, 1, 'drag');
        resolver.registerListener(function(payload){actual = payload;}, 1, 'click');

        resolver.mouseDown(null);
        resolver.mouseMove(null);
        resolver.mouseUp(null);

        expect(actual.view).toEqual({ x : 106, y : 106 });
    });

    it("should consider mouseUp a drag when moved more than threshold", function() {

        var threshold = 10;
        var resolver = new model.UiFocusResolver(coordinateConverter, threshold);

        var i = -1;
        var positions = [{x:100, y:100}, {x:120, y:120}];
        resolver.getMousePositionInObservedElement = function(e){
            i++;
            return positions[i];
        };

        var actual = null;
        var notActual = null;

        resolver.registerListener(function(payload){notActual = payload;}, 1, 'click');
        resolver.registerListener(function(payload){actual = payload;}, 0, 'drag');

        resolver.mouseDown(null);
        resolver.mouseMove(null);
        resolver.mouseUp(null);

        expect(actual.start.view).toEqual({ x : 100, y : 100 });
        expect(notActual).toBe(null);
    });
});
