model.ParticlePath = function ParticlePath(path, color)
{
    if (typeof color === 'undefined') {
        color = 0x0000ff;
    }

    var geometry = path.getSpacedGeometry(10);

    this._object3d = new THREE.ParticleSystem(
        geometry,
        new THREE.ParticleBasicMaterial({
            color: color,
            size: 5,
            opacity: 0.5
        })
    );
};

model.ParticlePath.prototype.get = function()
{
    return this._object3d;
};