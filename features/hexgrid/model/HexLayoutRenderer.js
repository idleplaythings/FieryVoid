model.HexLayoutRenderer = function HexLayoutRenderer(canvas)
{
    this._canvas = canvas[0];
    this._context = this._canvas.getContext('2d');

    this._scale = 1;
    this._precision = 2;
    this._offset = { left: 0, top: 0 }
}

model.HexLayoutRenderer.prototype.render = function(hexLayout)
{
    this._clear();

    hexLayout.getHexes().every(this._renderHex.bind(this));
}

model.HexLayoutRenderer.prototype.getCanvas = function()
{
    return this._canvas;
}

model.HexLayoutRenderer.prototype._renderHex = function(hex) {
    var i, current, next;

    this._context.fillStyle = '#fff';
    this._context.beginPath();
    this._context.moveTo(
        this._adjustXCoordinate(hex.corners[0].x),
        this._adjustYCoordinate(hex.corners[0].y)
    );

    for (i=1; i<6; i++) {
      next = hex.corners[i];

      if (!next) {
        next = hex.corners[0]
      }

      this._context.lineTo(this._adjustXCoordinate(next.x), this._adjustYCoordinate(next.y));
    }

    this._context.closePath();
}

model.HexLayoutRenderer.prototype._adjustXCoordinate = function(x) {
    return parseFloat(((x + this._offset.left) * this._scale).toFixed(this._precision));
}

model.HexLayoutRenderer.prototype._adjustYCoordinate = function(y) {
    return parseFloat(((y + this._offset.top) * this._scale).toFixed(this._precision));
}

model.HexLayoutRenderer.prototype._clear = function() {
    this._context.save();
    this._context.setTransform(1, 0, 0, 1, 0, 0);
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._context.restore();
}

