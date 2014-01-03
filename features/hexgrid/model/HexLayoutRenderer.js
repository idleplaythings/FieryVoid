model.HexLayoutRenderer = function HexLayoutRenderer(hexRenderer)
{
    if (Meteor.isClient === false) {
        return
    }

    this._hexRenderer = hexRenderer;

    // @todo
    var canvas = $('<canvas width="512" height="512"></canvas>').css({
        position: 'absolute',
        top: '100px',
        left: '100px',
        border: '2px solid red',
        zIndex: 1000,
        backgroundColor: 'black'
        ,display: 'none'
    });
//    $(document.body).append(canvas);
    this._canvas = canvas[0];
    this._context = this._canvas.getContext('2d');
}

model.HexLayoutRenderer.prototype.render = function(hexLayout, scale)
{
    this._clear();

    this._context.scale(scale.x, scale.y);

    // @todo
    this._context.translate(0, -147.8);


    hexLayout.getHexes().forEach(function(hex) {
        this._hexRenderer.renderHex(this._context, hex);
    }, this);
}

model.HexLayoutRenderer.prototype.getCanvas = function()
{
    return this._canvas;
}

model.HexLayoutRenderer.prototype._clear = function() {
    this._context.save();
    this._context.setTransform(1, 0, 0, 1, 0, 0);
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._context.restore();
}

