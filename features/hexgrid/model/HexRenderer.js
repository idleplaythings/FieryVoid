model.HexRenderer = function HexRenderer(args) {
    if (typeof args === 'undefined') {
        args = {};
    }

    this._scale = 1;
    this._precision = 2;
    this._offset = { left: 0, top: 0 }
    this._fillStyle = args.fillStyle || null;
    this._strokeStyle = args.strokeStyle || '#fff';
    this._lineWidth = args.lineWidth || 3;
}

model.HexRenderer.prototype.setFillStyle = function(fillStyle)
{
    this._fillStyle = fillStyle;
}

model.HexRenderer.prototype.setStrokeStyle = function(strokeStyle)
{
    this._strokeStyle = strokeStyle;
}

model.HexRenderer.prototype.setLineWidth = function(lineWidth)
{
    this._lineWidth = lineWidth;
}

model.HexRenderer.prototype.renderHex = function(context, hex)
{
    var i, current, next;

    context.fillStyle = this._fillStyle;
    context.strokeStyle = this._strokeStyle;
    context.lineWidth = this._lineWidth;
    context.beginPath();
    context.moveTo(
        this._adjustXCoordinate(hex.corners[0].x),
        this._adjustYCoordinate(hex.corners[0].y)
    );

    for (i=1; i<6; i++) {
      next = hex.corners[i];

      if (!next) {
        next = hex.corners[0]
      }

      context.lineTo(this._adjustXCoordinate(next.x), this._adjustYCoordinate(next.y));
    }

    context.closePath();

    if (this._fillStyle) {
        context.fill();
    }

    if (this._strokeStyle) {
        context.stroke();
    }
}

model.HexRenderer.prototype._adjustXCoordinate = function(x) {
    return parseFloat(((x + this._offset.left) * this._scale).toFixed(this._precision));
}

model.HexRenderer.prototype._adjustYCoordinate = function(y) {
    return parseFloat(((y + this._offset.top) * this._scale).toFixed(this._precision));
}

