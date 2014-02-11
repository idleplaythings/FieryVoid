model.ParticlePath = function ParticlePath(path, color, dispatcher)
{
    if (typeof color === 'undefined') {
        color = 0x0000ff;
    }

    var geometry = path.getSpacedGeometry(5);

    this._object3d = this.createEmitter(geometry, dispatcher, color);
};

model.ParticlePath.prototype.get = function()
{
    return this._object3d;
};

model.ParticlePath.prototype.createEmitter = function(geometry, dispatcher, color)
{
    var attributes = {
        customAngle:    { type: 'f',  value: [] },
        customSize:     { type: 'f',  value: [] },
        customColor:    { type: 'c',  value: [] },
        customOpacity:  { type: 'f',  value: [] }
    };

    var color = new THREE.Color(color);
    for (var i in geometry.vertices)
    {
        attributes.customAngle.value[i] = 0;
        attributes.customSize.value[i] = 64;
        attributes.customColor.value[i] = color;
        attributes.customOpacity.value[i] = 1;
    }

    var texture = THREE.ImageUtils.loadTexture("/misc/hull.png");

    return new model.ParticlePathEmitter(geometry, attributes, texture).observeZoomLevelChange(dispatcher).getObject3d();
};