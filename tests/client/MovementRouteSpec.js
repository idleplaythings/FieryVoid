describe("Movement route", function() {

    it("should return route", function() {

        var t = getTimeline();
        var m = new model.MovementRoute(t, 'route');

        expect(m.getRoute()
            .filter(function(wp){return wp})
            .map(function(wp){return wp.time}))
            .toEqual([0, 10, 20, 30]);
    });

    it("should return last", function() {

        var t = getTimeline();
        var m = new model.MovementRoute(t, 'route');

        expect(m.getLast().time).toEqual(30);
    });

    it("should return first", function() {

        var t = getTimeline();
        var m = new model.MovementRoute(t, 'route');

        expect(m.getFirst().time).toEqual(0);
    });

    it("should return first unresolved", function() {

        var t = getTimeline();
        var m = new model.MovementRoute(t, 'route');

        expect(m.getNextUnresolved().time).toEqual(10);
    });

    function getTimeline()
    {
        return new model.Timeline(null, null, null, null, [
            {time:20, name:'route', entry:getWaypoitObject(20, false)},
            {time:0, name:'route', entry:getWaypoitObject(0, true)},
            {time:30, name:'route', entry:getWaypoitObject(30, false)},
            {time:10, name:'route', entry:getWaypoitObject(10, false)},
        ], []);
    }

    function getWaypoitObject(time, resolved)
    {
        if ( ! resolved)
            resolved = false;

        return {
            time:time,
            position:{x:1, y:2},
            routeResolved: resolved
        };
    }
});
