model.GridService = function GridService(
    grid, renderer, highlighter, selector, eventDispathcer, coordinateResolver
)
{
    this._grid = grid;
    this._renderer = renderer;
    this._highlighter = highlighter;
    this._selector = selector;
    this._eventDispatcher = eventDispathcer;
    this._coordinateResolver = coordinateResolver;
}

model.GridService.prototype.init = function(width, height, hexSize)
{
    this._gridWidth = width;
    this._gridHeight = height;
    this._hexSize = hexSize;
    this._grid.init({
        gridWidth: width,
        gridHeight: height,
        hexSize: hexSize
    });

    this._eventDispatcher.attach('scene.init', this.onSceneInit.bind(this));
};

model.GridService.prototype.onSceneInit = function(event)
{
    this._renderer.setScene(event.scene);
    this._selector.setScene(event.scene);
    this._highlighter.setScene(event.scene);

    this._renderer.renderGrid(this._grid);
};

model.GridService.prototype.resolveGameCoordinates = function(gridCoordinates)
{
    var hex = this._grid.getHexForGridCoordinates(gridCoordinates);
    return { x: hex.centrePoint.x, y: hex.centrePoint.y };
}

model.GridService.prototype.resolveGridCoordinates = function(gameCoordinates)
{
    return this._coordinateResolver.gameCoordinatesToGridCoordinates(gameCoordinates, this._hexSize);
}

// http://www.redblobgames.com/grids/hexagons/#range
model.GridService.prototype.getRange = function(gridCoordinates, range)
{
    var results = [];

    var N = range;
    for (var x=-N; x<= N; x++) {
        var low = Math.max(-N, -x-N);
        var high = Math.min(N, -x+N);

        for (var y=low; y<=high; y++) {
            var z = -x - y;

            // cube(x, y, z).toEvenQ ...
            var result = this._coordinateResolver.cubeToEvenQOffset({ x: x, y: y, z: z });

            // Abstracted to EvenQ...
            if (gridCoordinates.y&1) {
                results.push({
                    x: gridCoordinates.x + result.x + (result.y&1),
                    y: gridCoordinates.y + result.y
                });
            } else {
                results.push({
                    x: gridCoordinates.x + result.x,
                    y: gridCoordinates.y + result.y
                });
            }
        }
    }

    return results;
}

model.GridService.prototype.highlightHexAt = function(gameCoordinates)
{
    this.highlight(this.resolveGridCoordinates(gameCoordinates));
}

model.GridService.prototype.selectHexAt = function(gameCoordinates)
{
    this.select(this.resolveGridCoordinates(gameCoordinates));
}

model.GridService.prototype.select = function(gridCoordinates)
{
    this._highlight(this._selector, gridCoordinates);
}

model.GridService.prototype.highlight = function(gridCoordinates)
{
    this._highlight(this._highlighter, gridCoordinates);
}

model.GridService.prototype._highlight = function(highlighter, gridCoordinates)
{
    var hexes = this._getHexCoordinatesForGridCoordinates(gridCoordinates);

    highlighter.clearHighlights();
    highlighter.highlight(hexes);
}

model.GridService.prototype._getHexCoordinatesForGridCoordinates = function(gridCoordinates)
{
    if (gridCoordinates instanceof Array === false) {
        gridCoordinates = [gridCoordinates];
    }

    var hexes = [];

    gridCoordinates.forEach(function(coordinates) {
        hexes.push(this._grid.getHexForGridCoordinates(coordinates));
    }, this);

    return hexes;
}