model.ParticleEmitter = function ParticleEmitter(particles, settings)
{
    this.particles = particles;
    this.particleGeometry = new THREE.Geometry();
    this.particleMaterial = new THREE.ShaderMaterial(
        {
            uniforms:
            {
                texture:   { type: "t", value: settings.texture }
            },
            attributes:
            {
                customVisible:	{ type: 'f',  value: [] },
                customAngle:	{ type: 'f',  value: [] },
                customSize:		{ type: 'f',  value: [] },
                customColor:	{ type: 'c',  value: [] },
                customOpacity:	{ type: 'f',  value: [] }
            },
            vertexShader:   this.particleVertexShader,
            fragmentShader: this.particleFragmentShader,
            transparent: true,  alphaTest: 0.5, // if having transparency issues, try including: alphaTest: 0.5,
            blending: THREE.NormalBlending, depthTest: true
        });

    this.particleMesh = null;
};

model.ParticleEmitter.prototype.animate = function()
{
    for (var i = 0; i < this.particles.length; i++)
    {
        var particle = this.particles[i];
        if ( particle.alive )
        {
            particle.animate(1);
            this.updateParticleMaterial(particle, i);
        }
    }
};

model.ParticleEmitter.prototype.updateParticleMaterial = function(particle, i)
{
    this.particleMaterial.attributes.customVisible.value[i] = particle.alive;
    this.particleMaterial.attributes.customColor.value[i]   = particle.color;
    this.particleMaterial.attributes.customOpacity.value[i] = particle.opacity;
    this.particleMaterial.attributes.customSize.value[i]    = particle.size;
    this.particleMaterial.attributes.customAngle.value[i]   = particle.angle;
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
        "varying vec4  vColor;",
        "varying float vAngle;",
        "void main()",
        "{",
        "if ( customVisible > 0.5 )", 				// true
        "vColor = vec4( customColor, customOpacity );", //     set color associated to vertex; use later in fragment shader.
        "else",							// false
        "vColor = vec4(0.0, 0.0, 0.0, 0.0);", 		//     make particle invisible.

        "vAngle = customAngle;",

        "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
        "gl_PointSize = customSize;", // * ( 300.0 / length( mvPosition.xyz ) );",
        // scale particles as objects in 3D space
        "//gl_Position = projectionMatrix * mvPosition;",
        "gl_Position = vec4( position, 1.0 );",
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