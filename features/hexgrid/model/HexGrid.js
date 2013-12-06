model.HexGrid = function HexGrid(width, height, renderer, eventDispatcher)
{
    this._gridWidth = width;
    this._gridHeight = height;
    this._renderer = renderer;
    this._eventDispatcher = eventDispatcher;

    this._hexOrientation = model.Hex.HORIZONTAL;
    this._hexSize = 450;
    this._hexPrototype = null;
};

model.HexGrid.prototype.init = function()
{
    this._eventDispatcher.attach('scene.init', this.onSceneInit.bind(this));
};

model.HexGrid.prototype.onSceneInit = function(event)
{
    this._renderer.renderGrid(event.scene, this);
};

model.HexGrid.prototype.getHexPrototype = function()
{
    if (this._hexPrototype) {
        return this._hexPrototype;
    }

    this._hexPrototype = new model.Hex({ x: 0, y: 0 }, this._hexSize, this._hexOrientation);
    this._hexPrototype.calculate();

    return this._hexPrototype;
}

model.HexGrid.prototype.getGridWidth = function()
{
    return this._gridWidth;
}

model.HexGrid.prototype.getGridHeight = function()
{
    return this._gridHeight;
}

model.HexGrid.prototype.getWidth = function()
{
    return this._gridWidth * this.getHexPrototype().width + 0.5 * this.getHexPrototype().width;
}

model.HexGrid.prototype.getHeight = function()
{
    return this._gridHeight * 3/4 * this.getHexPrototype().height + 1/4 * this.getHexPrototype().height;
}

model.HexGrid.prototype._initHexPrototype = function()
{
    if (this._hexPrototype) {
        return this._hexPrototype;
    }

    this._hexPrototype = new model.Hex(null, this._hexSize, this._hexOrientation);
    this._hexPrototype.calculate();

    return this._hexPrototype;
}

model.HexGrid.prototype.onSceneInit = function(event)
{
    this._renderer.renderGrid(event.scene, this);
};
