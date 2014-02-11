model.ParticlePathEmitter = function ParticlePathEmitter(geometry, attributes, texture)
{
    var uniforms = {
        zoomLevel: { type: 'f', value: 1 },
        texture:   { type: 't', value: texture }
    };

    this.particleGeometry = geometry;
    this.particleGeometry.dynamic = true;
    this.particleMaterial = new THREE.ShaderMaterial(
        {
            uniforms: uniforms,
            attributes: attributes,
            vertexShader:   this.particleVertexShader,
            fragmentShader: this.particleFragmentShader,
            transparent: true,
            alphaTest: 0.5, // if having transparency issues, try including: alphaTest: 0.5,
            blending: THREE.NormalBlending, depthTest: true
        });

    this.particleMesh = null;
};

model.ParticlePathEmitter.prototype.observeZoomLevelChange = function(dispatcher, callback)
{
    if ( ! callback)
        callback = function(event){return event.zoom};

    dispatcher.attach('ZoomEvent', function(event) {
        var zoomLevel = callback(event);
        this.setZoomLevel(zoomLevel)
    }.bind(this));
    
    return this;
}

model.ParticlePathEmitter.prototype.setZoomLevel = function(zoomLevel)
{
    this.particleMaterial.uniforms.zoomLevel.value = zoomLevel;
};

model.ParticlePathEmitter.prototype.getFreeParticle = function()
{
    for (var i in this.particles)
    {
        var particle = this.particles[i];
        if ( ! particle.isActive())
            return particle;
    }
    return null;
};

model.ParticlePathEmitter.prototype.animate = function()
{
    for (var i = 0; i < this.particles.length; i++)
    {
        var particle = this.particles[i];
        particle.animate(0.01);
        particle.updateMaterial(this.particleMaterial, i);
    }
    this.particleGeometry.verticesNeedUpdate = true;
};

model.ParticlePathEmitter.prototype.getObject3d = function()
{
    if ( ! this.particleMesh)
    {
        this.particleMesh = new THREE.ParticleSystem( this.particleGeometry, this.particleMaterial );
        this.particleMesh.position = new THREE.Vector3(0, 0, 10);
    }

    return this.particleMesh;
};

model.ParticlePathEmitter.prototype.particleVertexShader =
    [
        "attribute vec3  customColor;",
        "attribute float customOpacity;",
        "attribute float customSize;",
        "attribute float customAngle;",
        "uniform float zoomLevel;",
        "varying vec4  vColor;",
        "varying float vAngle;",
        "void main()",
        "{",			// true
        "vColor = vec4( customColor, customOpacity );",

        "vAngle = customAngle;",

        "gl_PointSize = customSize * zoomLevel;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        "}"
    ].join("\n");

model.ParticlePathEmitter.prototype.particleFragmentShader =
    [
        "uniform sampler2D texture;",
        "varying vec4 vColor;",
        "varying float vAngle;",
        "void main()",
        "{",
        "gl_FragColor = vColor;",

        "float c = cos(vAngle);",
        "float s = sin(vAngle);",
        "vec2 rotatedUV = vec2(c * (gl_PointCoord.x - 0.5) + s * (gl_PointCoord.y - 0.5) + 0.5,",
        "c * (gl_PointCoord.y - 0.5) - s * (gl_PointCoord.x - 0.5) + 0.5);",  // rotate UV coordinates to rotate texture
        "vec4 rotatedTexture = texture2D( texture,  rotatedUV );",
        "gl_FragColor = gl_FragColor * rotatedTexture;",    // sets an otherwise white particle texture to desired color
        "}"
    ].join("\n");
