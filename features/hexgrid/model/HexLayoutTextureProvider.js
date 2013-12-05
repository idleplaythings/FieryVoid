model.HexLayoutTextureProvider = function HexLayoutTextureProvider(layoutRenderer)
{
    this._layoutRenderer = layoutRenderer;
};

model.HexLayoutTextureProvider.prototype.getTexture = function(gridWidth, gridHeight)
{
    this._layoutRenderer.render(this._getLayout(), this._getScale());

    var texture = this._createTextureFromCanvas(this._layoutRenderer.getCanvas());

    texture.needsUpdate = true;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    texture.repeat.set(
        this._getHorizontalRepeat(gridWidth),
        this._getVerticalRepeat(gridHeight)
    );

    texture.offset.set(
        this._getXOffset(),
        this._getYOffset()
    );

    return texture;
}

model.HexLayoutTextureProvider.prototype._getLayout = function()
{
    // @todo
    return new model.HexLayout(2, 3, 147.8, model.HexLayout.EVEN_ROW);
}

model.HexLayoutTextureProvider.prototype._getScale = function()
{
    return { x: 1, y: 1.155 };
}

model.HexLayoutTextureProvider.prototype._getHorizontalRepeat = function(hexagons)
{
    return 3/4 + (hexagons - 1) * 2/4;
}

model.HexLayoutTextureProvider.prototype._getVerticalRepeat = function(hexagons)
{
    return 4/6 + (hexagons - 1) * 3/6;
}

model.HexLayoutTextureProvider.prototype._getXOffset = function()
{
    return 0;
}

model.HexLayoutTextureProvider.prototype._getYOffset = function()
{
    return 0.16666;
}

model.HexLayoutTextureProvider.prototype._createTextureFromCanvas = function(canvas)
{
    return new THREE.Texture(canvas);
}

