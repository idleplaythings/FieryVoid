model.ParticlePath = function ParticlePath(path, color, facingOffset /*, dispatcher */, offset, length)
{
    if (typeof color === 'undefined') {
        color = 0x0000ff;
    }

    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0, 0, 0));

    this._path = path;
    this._facingOffset = facingOffset;
    this._emitter = this.createEmitter(geometry, /* dispatcher, */ color);
    this._animationPosition = 0;
    this._offset = offset;
    this._length = length;
};

model.ParticlePath.prototype.get = function()
{
    return this._emitter.getObject3d();
};

model.ParticlePath.prototype.animate = function(turn, shipAnimationDetails)
{
    this._advanceAnimationPosition();
    var position = this._animationPosition/this._length + this._offset*100;

    var parameters = shipAnimationDetails.getShipPositionAndFacing(turn, position);
    this._emitter.setParticleParameters({
        position: parameters.position,
        rotation: MathLib.degreeToRadian(parameters.rotation)
    });
}

model.ParticlePath.prototype._advanceAnimationPosition = function()
{
    this._animationPosition += 2;

    if (this._animationPosition >= 100) {
        this._animationPosition = 0;
    }
}

model.ParticlePath.prototype.createEmitter = function(geometry, /* dispatcher, */ color)
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

    return new model.ParticlePathEmitter(geometry, attributes, texture);
};

model.ParticlePath.prototype.setZoomLevel = function(zoomLevel)
{
    this._emitter.setZoomLevel(zoomLevel);
}