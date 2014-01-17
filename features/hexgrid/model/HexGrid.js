model.HexGrid = function HexGrid()
{
    this._gridWidth = null;
    this._gridHeight = null;
    this._hexOrientation = null;
    this._hexSize = null;
    this._hexPrototype = null;
};

model.HexGrid.prototype.init = function(args)
{
    if (typeof args === 'undefined') {
        args = {};
    }

    this._gridWidth = args.gridWidth || 10;
    this._gridHeight = args.gridHeight || 10;
    this._hexSize = args.hexSize || 450;
    this._hexOrientation = args.hexOrientation || model.Hex.HORIZONTAL;
}

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

model.HexGrid.prototype.getHexForGridCoordinates = function(gridCoordinates)
{
    var centrePoint = {};

    centrePoint.x = gridCoordinates.q * this._getHorizontalDistance();

    if (gridCoordinates.r % 2 != 0) {
        centrePoint.x += this._getHorizontalDistance() / 2;
    }

    centrePoint.y = gridCoordinates.r * this._getVerticalDistance();

    return new model.Hex(centrePoint, this._hexSize, this._hexOrientation);
}

model.HexGrid.prototype._getHorizontalDistance = function()
{
    return this.getHexPrototype().width;
}

model.HexGrid.prototype._getVerticalDistance = function()
{
    return this.getHexPrototype().height * 3/4;
}

