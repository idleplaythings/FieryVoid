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

model.GridService.prototype.getPrototypeHex = function()
{
    return new model.Hex(
        null,
        this._hexSize,
        model.Hex.HORIZONTAL
    );
}

model.GridService.prototype.resolveGameCoordinates = function(gridCoordinates)
{
    var hex = this._grid.getHexForGridCoordinates(gridCoordinates);
    return { x: hex.centrePoint.x, y: hex.centrePoint.y };
}

model.GridService.prototype.resolveGridCoordinates = function(gameCoordinates)
{
    return this._coordinateResolver.gameCoordinatesToOffsetCoordinates(gameCoordinates, this._hexSize);
}

model.GridService.prototype.rayTrace = function(start, end)
{
    start = start.toCube();
    end = end.toCube();

    var delta = end.subtract(start);
    var distance = start.distanceTo(end);
    var path = [];

    for (var i=0; i<=distance; i++) {
        path.push(start.add(delta.scale(i/distance)).round().toOddR());
    }

    return path;
}

model.GridService.prototype.findPath = function(
    start, end, pathCost, heuristicCost, movementCost, debugClosed
)
{
    start = start.toCube();
    end = end.toCube();

    var filterByNodeAndCost = function(needle, cost) {
        return function(node, index, arr) {
            if (node.equals(needle) && cost < node.cost) {
                return false;
            }

            return true;
        }
    }

    var findNode = function(needle) {
        return function(node) {
            return node.equals(needle);
        }
    }

    start.cost = 0;
    start.rank = Infinity;
    start.parent = null;

    var open = [ start ];
    var closed = [];

    while (open[0].equals(end) === false) {
        current = open.shift();
        closed.push(current);

        current.getNeighbours().forEach(function(neighbour) {
            var cost = pathCost(start, current) + movementCost(current, neighbour);

            // Remove equal nodes with worse costs from open array
            open = open.filter(filterByNodeAndCost(neighbour, cost));

            // Remove equal nodes with worse costs from closed array
            closed = closed.filter(filterByNodeAndCost(neighbour, cost));

            if (!open.find(findNode(neighbour)) && !closed.find(findNode(neighbour))) {
                neighbour.cost = cost;
                neighbour.rank = cost + heuristicCost(neighbour, end);
                neighbour.parent = current;
                open.push(neighbour);
            }
        });

        open.sort(function(a, b) {
            return a.rank - b.rank;
        })
    };

    var path = [];
    var current = open[0];

    while (current !== null) {
        console.log(current)
        path.push(current.toOddR());
        current = current.parent;
    }

    if (debugClosed instanceof Array) {
        closed.forEach(function(closed) {
            debugClosed.push(closed.toOddR());
        });
    }

    return path;
}

model.GridService.prototype.traverse = function(start, range, validate)
{
    var fringes = [[ start ]];
    var visits = {};

    for (var i=1; i<=range; i++) {
        fringes[i] = [];
        fringes[i-1].forEach(function(coordinate) {
            coordinate.getNeighbours().forEach(function(neighbour) {
                if (visits[neighbour.q + ',' + neighbour.r] === true) {
                    return;
                }

                if (validate(neighbour) === false) {
                    return;
                }

                visits[neighbour.q + ',' + neighbour.r] = true;
                fringes[i].push(neighbour);
            });
        });
    }

    return fringes;
}

// http://www.redblobgames.com/grids/hexagons/#range
model.GridService.prototype.getRange = function(gridCoordinates, range)
{
    var gridCube = gridCoordinates.toCube();
    var results = [];
    var N = range;

    for (var x=-N; x<= N; x++) {
        var low = Math.max(-N, -x-N);
        var high = Math.min(N, -x+N);

        for (var y=low; y<=high; y++) {
            var z = -x - y;

            var cube = new model.hexagon.coordinate.Cube(x, y, z);
            var result = cube.add(gridCube);
            var offset = result.toOddR();

            results.push(offset);
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
    var hexes = this._getHexesForGridCoordinates(gridCoordinates);

    if (gridCoordinates instanceof Array) {
        hexes.forEach(function(hex, index) {
            // hex.opacity = gridCoordinates[index].opacity;
            hex.opacity = 0.5;
        });
    } else {
        hexes[0].opacity = gridCoordinates.opacity;
    }

    highlighter.clearHighlights();
    highlighter.highlight(hexes);
}

model.GridService.prototype._getHexesForGridCoordinates = function(gridCoordinates)
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