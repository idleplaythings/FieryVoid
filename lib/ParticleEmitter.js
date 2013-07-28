model.ParticleEmitter = function ParticleEmitter(particles, settings)
{
    this.particles = particles;
    this.freeParticles = particles.keys;

    var attributes = settings.attributes || {
        customVisible:	{ type: 'f',  value: [] },
        customAngle:	{ type: 'f',  value: [] },
        customSize:		{ type: 'f',  value: [] },
        customColor:	{ type: 'c',  value: [] },
        customOpacity:	{ type: 'f',  value: [] }
    };

    var uniforms = settings.uniforms || {
        zoomLevel: { type: 'f', value: settings.zoomLevel || 1 },
        texture:   { type: 't', value: settings.texture }
    };

    this.particleGeometry = new THREE.Geometry();
    this.particleMaterial = new THREE.ShaderMaterial(
        {
            uniforms: uniforms,
            attributes: attributes,
            vertexShader:   settings.vertexShader || this.particleVertexShader,
            fragmentShader: settings.fragmentShader || this.particleFragmentShader,
            transparent: true,
            alphaTest: 0.5, // if having transparency issues, try including: alphaTest: 0.5,
            blending: THREE.NormalBlending, depthTest: true
        });

    this.particleMesh = null;
};

model.ParticleEmitter.prototype.observeZoomLevelChange = function(dispatcher)
{
    dispatcher.attach({
        handle: function(event) {
            this.setZoomLevel(event.zoom)
        }.bind(this)
    }, 'ZoomEvent');
}

model.ParticleEmitter.prototype.setZoomLevel = function(zoomLevel)
{
    this.particleMaterial.uniforms.zoomLevel.value = zoomLevel;
}

model.ParticleEmitter.prototype.getFreeParticle = function()
{
    if ( this.freeParticles.length == 0)
        return null;

    return this.particles[this.freeParticles.pop()];
};

model.ParticleEmitter.prototype.animate = function()
{
    for (var i = 0; i < this.particles.length; i++)
    {
        var particle = this.particles[i];
        if ( particle.alive )
        {
            particle.animate(0.01);
            this.updateParticleMaterial(particle, i);

            if ( ! particle.alive)
                this.freeParticles.push(i);
        }
    }
};

model.ParticleEmitter.prototype.updateParticleMaterial = function(particle, i)
{
    particle.updateMaterial(this.particleMaterial, i);
};

model.ParticleEmitter.prototype.getObject3d = function()
{
    if ( ! this.particleMesh)
    {
        for (var i = 0; i < this.particles.length; i++)
        {
            var particle = this.particles[i];

            this.particleGeometry.vertices[i] = particle.position;
            this.updateParticleMaterial(particle, i);
        }

        this.particleMesh = new THREE.ParticleSystem( this.particleGeometry, this.particleMaterial );
        this.particleMesh.dynamic = true;
        this.particleMesh.sortParticles = true;
    }

    return this.particleMesh;
};

model.ParticleEmitter.prototype.particleVertexShader =
    [
        "attribute vec3  customColor;",
        "attribute float customOpacity;",
        "attribute float customSize;",
        "attribute float customAngle;",
        "attribute float customVisible;",  // float used as boolean (0 = false, 1 = true)
        "uniform float zoomLevel;",
        "varying vec4  vColor;",
        "varying float vAngle;",
        "void main()",
        "{",
        "if ( customVisible > 0.5 )", 				// true
        "vColor = vec4( customColor, customOpacity );", //     set color associated to vertex; use later in fragment shader.
        "else",							// false
        "vColor = vec4(0.0, 0.0, 0.0, 0.0);", 		//     make particle invisible.

        "vAngle = customAngle;",

        "gl_PointSize = customSize * zoomLevel;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        "}"
    ].join("\n");

model.ParticleEmitter.prototype.particleFragmentShader =
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