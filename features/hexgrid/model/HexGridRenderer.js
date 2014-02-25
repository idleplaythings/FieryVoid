model.HexGridRenderer = function HexGridRenderer(textureProvider)
{
    this._scene = null;
    this._textureProvider = textureProvider;
};

model.HexGridRenderer.prototype.setScene= function(scene)
{
    this._scene = scene;
}

model.HexGridRenderer.prototype.renderGrid = function(hexGrid)
{
    var geometry = this._initGeometry(hexGrid.getWidth(), hexGrid.getHeight());
    var texture = this._textureProvider.getTexture(hexGrid.getGridWidth(), hexGrid.getGridHeight());
    var material = this._initMaterial(texture);
    var mesh = this._initMesh(geometry, material);
    mesh.position = this._getMeshPosition(hexGrid);
    this._render(mesh);
};

model.HexGridRenderer.prototype._initGeometry = function(width, height)
{
    return new THREE.PlaneGeometry(width, height, 1, 1);
};

model.HexGridRenderer.prototype._initMaterial = function(texture)
{
    return new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.5 });
};

model.HexGridRenderer.prototype._initMesh = function(geometry, material)
{
    return new THREE.Mesh(geometry, material);
};

model.HexGridRenderer.prototype._getMeshPosition = function(hexGrid)
{
    return {
        x: hexGrid.getWidth() / 2 - hexGrid.getHexPrototype().width / 2,
        y: hexGrid.getHeight() / 2 - hexGrid.getHexPrototype().height / 2,
        z: 0
    }
}

model.HexGridRenderer.prototype._render = function(mesh)
{
    this._scene.addToScene(mesh);
};
