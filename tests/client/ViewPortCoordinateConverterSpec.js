describe("Viewport Coordinate converter spec", function() {

    it("Zoom 1, Clicked point corresponds directly to game location",
        function()
    {
        var cameraPos = {x:500, y:-500};
        var zoom = 1;

        window.innerWidth  = 1000;
        window.innerHeight = 1000;

        var clickPosition = {x:100, y:100};

        var converter = new model.CoordinateConverterViewPort(
            {camera: {position: cameraPos}, zoom: zoom}
        );

        var pos = converter.fromViewPortToGame(clickPosition);
        expect(pos).toEqual({x:100, y:-100});
    });

    it("Zoom 2, Clicked point should correspond a location half as far from camera than normal",
        function()
        {
            /*
            Explanation. This is x axis. | is edge of viewPort, x is click location and c is camera
             |  x          c
            With zoom 2 the situation is actually something like this
             |  x     c
             The click is half as far from the camera, because one pixel is twice as big
             So, if 1 zoom the 100 is 400 pixels from camera position.
             With zoom 2 it is only 200 pixels from camera position
             If camera position is 500, the clicked position is 300 (500 - 200)

             Also, the y axis is inverted compared to viewport
             */
            var cameraPos = {x:500, y:-500};
            var zoom = 2;

            window.innerWidth  = 1000;
            window.innerHeight = 1000;

            var clickPosition = {x:100, y:100};

            var converter = new model.CoordinateConverterViewPort(
                {camera: {position: cameraPos}, zoom: zoom}
            );

            var pos = converter.fromViewPortToGame(clickPosition);
            expect(pos).toEqual({x:300, y:-300});
        });

    it("Zoom 1, Camera is moved far from origo",
        function()
        {
            var cameraPos = {x:5000, y:-5000};
            var zoom = 1;

            window.innerWidth  = 1000;
            window.innerHeight = 1000;

            var clickPosition = {x:100, y:100};

            var converter = new model.CoordinateConverterViewPort(
                {camera: {position: cameraPos}, zoom: zoom}
            );

            var pos = converter.fromViewPortToGame(clickPosition);
            expect(pos).toEqual({x:4600, y:-4600});
        });

    it("Zoom 0.5. Things twice as far from camera",
        function()
        {
            //Zoom 1 is 400 from camera, so this is 800. 500- 800 is -300
            var cameraPos = {x:500, y:-500};
            var zoom = 0.5;

            window.innerWidth  = 1000;
            window.innerHeight = 1000;

            var clickPosition = {x:100, y:100};

            var converter = new model.CoordinateConverterViewPort(
                {camera: {position: cameraPos}, zoom: zoom}
            );

            var pos = converter.fromViewPortToGame(clickPosition);
            expect(pos).toEqual({x:-300, y:300});
        });

    it("Zoom 1. X and Y not the same",
        function()
        {
            //Zoom 1 is 400 from camera, so this is 800. 500- 800 is -300
            var cameraPos = {x:500, y:-500};
            var zoom = 1;

            window.innerWidth  = 1000;
            window.innerHeight = 1000;

            var clickPosition = {x:50, y:100};

            var converter = new model.CoordinateConverterViewPort(
                {camera: {position: cameraPos}, zoom: zoom}
            );

            var pos = converter.fromViewPortToGame(clickPosition);
            expect(pos).toEqual({x:50, y:-100});
        });

    it("should return game position as viewport position with no zoom or scroll",
        function()
        {
            //Zoom 1 is 400 from camera, so this is 800. 500- 800 is -300
            var cameraPos = {x:500, y:-500};
            var zoom = 1;

            window.innerWidth  = 1000;
            window.innerHeight = 1000;

            var gamePosition = {x:100, y:-100};

            var converter = new model.CoordinateConverterViewPort(
                {camera: {position: cameraPos}, zoom: zoom}
            );

            var pos = converter.fromGameToViewPort(gamePosition);
            expect(pos).toEqual({x:100, y:100});
        });

    it("should return game position as viewport position with 0.5 zoom or scroll",
        function()
        {
            //Zoom 1 is 400 from camera, so this is 800. 500- 800 is -300
            var cameraPos = {x:500, y:-500};
            var zoom = 0.5;

            window.innerWidth  = 1000;
            window.innerHeight = 1000;

            var gamePosition = {x:100, y:-100};

            var converter = new model.CoordinateConverterViewPort(
                {camera: {position: cameraPos}, zoom: zoom}
            );

            var pos = converter.fromGameToViewPort(gamePosition);
            expect(pos).toEqual({x:300, y:300});
        });
});
