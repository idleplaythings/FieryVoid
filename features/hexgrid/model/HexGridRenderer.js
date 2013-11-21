model.HexGridRenderer = function HexGridRenderer(textureProvider)
{
    this._textureProvider = textureProvider;

    this._geometry = null;
    this._material = null;
    this._texture = null;
    this._mesh = null;
};

model.HexGridRenderer.prototype.renderGrid = function(scene)
{
    this._initGeometry();
    this._initMaterial();
    this._initMesh();
    this._render(scene);
};

model.HexGridRenderer.prototype._initGeometry = function()
{
    if (this._geometry) {
        return;
    }

    this._geometry = new THREE.PlaneGeometry(1000000, 1000000, 1, 1);
};

model.HexGridRenderer.prototype._initMaterial = function()
{
    if (this._material) {
        return;
    }

    this._material = new THREE.MeshBasicMaterial({
        map: this._getTexture(),
        transparent: true,
        opacity: 0.5
    });
};

model.HexGridRenderer.prototype._getTexture = function()
{
    if (this._texture) {
        return this._texture;
    }

    this._texture = this._textureProvider.getTexture();

    return this._texture;
};

model.HexGridRenderer.prototype._initMesh = function()
{
    if (this._mesh) {
        return;
    }

    this._mesh = new THREE.Mesh(this._geometry, this._material);
};

model.HexGridRenderer.prototype._render = function(scene)
{
    scene.add(this._mesh);
};
