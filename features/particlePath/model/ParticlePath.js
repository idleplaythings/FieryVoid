model.ParticlePath = function ParticlePath(path, color, dispatcher)
{
    if (typeof color === 'undefined') {
        color = 0x0000ff;
    }

    var geometry = path.getSpacedGeometry(1);

    this._path = path;
    this._emitter = this.createEmitter(geometry, dispatcher, color);
    this._animationPosition = 0;
    this._animationPositions = {};
};

model.ParticlePath.prototype.get = function()
{
    return this._emitter.getObject3d();
};

model.ParticlePath.prototype.animate = function()
{
    this._advanceAnimationPosition();


    if (this._animationPositions[this._animationPosition] == undefined) {
        this._animationPositions[this._animationPosition] =
            this._path.get().getPointAt(this._animationPosition);
    }

    this._emitter.setParticlePosition(this._animationPositions[this._animationPosition]);
}

model.ParticlePath.prototype._advanceAnimationPosition = function()
{
    this._animationPosition += 0.02;

    if (this._animationPosition > 1) {
        this._animationPosition = 0;
    }
}

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

    return new model.ParticlePathEmitter(geometry, attributes, texture).observeZoomLevelChange(dispatcher);
};