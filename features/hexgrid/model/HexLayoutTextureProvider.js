model.HexLayoutTextureProvider = function HexLayoutTextureProvider(layoutRenderer)
{
    this._layoutRenderer = layoutRenderer;
};

model.HexLayoutTextureProvider.prototype.getTexture = function()
{
    this._layoutRenderer.render(this._getLayout());

    var texture = this._createTextureFromCanvas(this._layoutRenderer.getCanvas());

    texture.needsUpdate = true;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    texture.repeat.set(150, 600);

    return texture;
}

model.HexLayoutTextureProvider.prototype._getLayout = function()
{
    return new model.HexLayout(15, 13, 97.52, model.HexLayout.ODD_COLUMN);
}

model.HexLayoutTextureProvider.prototype._createTextureFromCanvas = function(canvas)
{
    return new THREE.Texture(canvas);
}

