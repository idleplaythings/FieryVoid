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

model.GridService.prototype.resolveGridCoordinates = function(gameCoordinates)
{
    return this._coordinateResolver.gameCoordinatesToGridCoordinates(gameCoordinates, this._hexSize);
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