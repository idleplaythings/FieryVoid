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

    // texture.magFilter = THREE.LinearFilter; //THREE.NearestFilter;
    // texture.minFilter = THREE.LinearFilter; //THREE.NearestMipMapNearestFilter;

    texture.repeat.set(3, 12);

    return texture;
}

model.HexLayoutTextureProvider.prototype._getLayout = function()
{
    return new model.HexLayout(15, 13, 97.52, model.HexLayout.ODD_COLUMN);
}

model.HexLayoutTextureProvider.prototype._createTextureFromCanvas = function(canvas)
{
    console.log(canvas)
    return new THREE.Texture(canvas);
}

