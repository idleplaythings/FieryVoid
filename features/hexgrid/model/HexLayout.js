model.HexLayout = function HexLayout(width, height, hexSize, layout) {
    this.width = null;
    this.height = null;
    this.hexSize = null;
    this.layout = null;
    this.hexes = [];

    this.setDimensions(width || null, height || null);
    this.setHexSize(hexSize || null);
    this.setLayout(layout || null);
}

model.HexLayout.ODD_ROW = 1;
model.HexLayout.EVEN_ROW = 2;
model.HexLayout.ODD_COLUMN = 3;
model.HexLayout.EVEN_COLUMN = 4;

model.HexLayout.prototype.setDimensions = function(width, height)
{
    this.width = width;
    this.height = height;
    this.populate();
}

model.HexLayout.prototype.setHexSize = function(hexSize)
{
    this.hexSize = hexSize;
    this.populate();
}

model.HexLayout.prototype.setLayout = function(layout)
{
    this.layout = layout;
    this.populate();
}

model.HexLayout.prototype.populate = function()
{
    if (this._canPopulate() === false) {
         return this;
    }

    this._populateHexes();
}

model.HexLayout.prototype._canPopulate = function()
{
    if (this.width && this.height && this.hexSize && this.layout) {
         return true;
    }

    return false;
}

model.HexLayout.prototype._populateHexes = function()
{
    var row, column, hex, width, height, xOffset, yOffset, centrePoint;

    this.hexes = [];

    for (row=0; row<this.height; row++) {
        for (column=0; column<this.width; column++) {
            hex = new model.Hex(null, this.hexSize, this._getHexOrientation());
            hex.x = column;
            hex.y = row;

            hex.setCentrePoint(this._calculateHexCentrePoint(hex));

            this.hexes.push(hex);
        }
    }

    return this;
}

model.HexLayout.prototype._getHexOrientation = function()
{
    if (this.layout == model.HexLayout.ODD_ROW || this.layout == model.HexLayout.EVEN_ROW) {
        return model.Hex.HORIZONTAL;
    } else {
        return model.Hex.VERTICAL;
    }
}

/**
 * @see http://www.redblobgames.com/grids/hexagons/
 */
model.HexLayout.prototype._calculateHexCentrePoint = function(hex)
{
    var centrePoint = null;

    switch (this.layout) {
        case model.HexLayout.ODD_ROW:
            if (hex.y % 2 === 0) {
                xOffset = 0;
                yOffset = 0;
            } else {
                xOffset = hex.width / 2;
                yOffset = 0;
            }

            centrePoint = {
                x: hex.x * hex.width + hex.width / 2 + xOffset,
                y: hex.y * (3/4) * hex.height + hex.size + yOffset,
            };
            break;
        case model.HexLayout.EVEN_ROW:
            if (hex.y % 2 === 0) {
                xOffset = hex.width / 2;
                yOffset = 0;
            } else {
                xOffset = 0;
                yOffset = 0;
            }

            centrePoint = {
                x: hex.x * hex.width + hex.width / 2 + xOffset,
                y: hex.y * (3/4) * hex.height + hex.size + yOffset,
            };
            break;
        case model.HexLayout.ODD_COLUMN:
            if (hex.x % 2 === 0) {
                xOffset = 0;
                yOffset = 0;
            } else {
                xOffset = 0;
                yOffset = hex.height / 2;
            }

            centrePoint = {
                x: hex.x * (3/4) * hex.width + hex.size + xOffset,
                y: hex.y * hex.height + hex.height / 2 + yOffset
            };
            break;
        case model.HexLayout.EVEN_COLUMN:
            if (hex.x % 2 === 0) {
                xOffset = 0;
                yOffset = hex.height / 2;
            } else {
                xOffset = 0;
                yOffset = 0;
            }

            centrePoint = {
                x: hex.x * (3/4) * hex.width + hex.size + xOffset,
                y: hex.y * hex.height + hex.height / 2 + yOffset
            };
            break;
    }

    return centrePoint;
}

model.HexLayout.prototype.getHexes = function()
{
    return this.hexes;
}

