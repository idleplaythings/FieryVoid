model.Hex = function Hex(centrePoint, size, orientation) {
    this.width = null;
    this.height = null;
    this.centrePoint = null;
    this.size = null;
    this.orientation = null;
    this.corners = [];

    this.setCentrePoint(centrePoint || null);
    this.setSize(size || null);
    this.setOrientation(orientation || null);
}

// Hex orientations. Vertical means flat side up.
model.Hex.VERTICAL = 1;
model.Hex.HORIZONTAL = 2;

// Number format precision for centre point and corner coordinates
model.Hex.PRECISION = 2;

model.Hex.prototype.setCentrePoint = function(centrePoint) {
    if (centrePoint) {
        this.centrePoint = {
            x: this._formatNumber(centrePoint.x),
            y: this._formatNumber(centrePoint.y)
        }
    }
    this.calculate();
}

model.Hex.prototype.setSize = function(size) {
    this.size = size;
    this.calculate();
}

model.Hex.prototype.setOrientation = function(orientation) {
    this.orientation = orientation;
    this.calculate();
}

model.Hex.prototype.calculate = function() {
    if (this._canCalculateDimensions()) {
        this._calculateDimensions();
    }

    if (this._canCalculateCorners()) {
        this._calculateCorners();
    }

    return this;
}

model.Hex.prototype._canCalculateDimensions = function() {
    if (this.size && this.orientation) {
        return true;
    }

    return false;
}

model.Hex.prototype._canCalculateCorners = function() {
    if (this.centrePoint && this.size && this.orientation) {
        return true;
    }

    return false;
}

/**
 * @see http://www.redblobgames.com/grids/hexagons/
 */
model.Hex.prototype._calculateDimensions = function() {
    this.width = null;
    this.height = null;

    var longSide = this._formatNumber(2 * this.size);
    var shortSide = this._formatNumber(Math.sqrt(3) / 2 * this.size * 2);

    switch (this.orientation) {
        case model.Hex.VERTICAL:
            this.width = longSide;
            this.height = shortSide;
            break;
        case model.Hex.HORIZONTAL:
            this.width = shortSide;
            this.height = longSide;
            break;
        default:
            throw 'Unknown orientation: "' + this.orientation + '"';
    }
}

/**
 * @see http://www.redblobgames.com/grids/hexagons/
 */
model.Hex.prototype._calculateCorners = function() {
    var i, angle, corner;

    this.corners = [];

    for (var i=0; i<6; i++) {
        if (this.orientation === model.Hex.HORIZONTAL) {
            angle = 2 * Math.PI / 6 * (i + 0.5);
        } else {
            angle = 2 * Math.PI / 6 * i;
        }

        corner = {
            x: this._formatNumber(this.centrePoint.x + this.size * Math.cos(angle)),
            y: this._formatNumber(this.centrePoint.y + this.size * Math.sin(angle))
        };

        this.corners.push(corner);
    }
}

model.Hex.prototype._formatNumber = function(number) {
    return parseFloat(number.toFixed(model.Hex.PRECISION));
}

