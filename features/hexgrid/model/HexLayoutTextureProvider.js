model.HexLayoutTextureProvider = function HexLayoutTextureProvider(layoutRenderer)
{
    this._layoutRenderer = layoutRenderer;
};

model.HexLayoutTextureProvider.prototype.getTexture = function()
{
    this._layoutRenderer.render(this._getLayout()); 

    var texture = this._createTextureFromCanvas(this._layoutRenderer.getCanvas());

console.log(texture)
    texture.needsUpdate = true;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 1000, 1000 );

    return texture;
}

model.HexLayoutTextureProvider.prototype._getLayout = function()
{
    return new model.HexLayout(512, 512, 100, model.HexLayout.ODD_ROW);   
}

model.HexLayoutTextureProvider.prototype._createTextureFromCanvas = function(canvas)
{
    return new THREE.Texture(canvas);
}

