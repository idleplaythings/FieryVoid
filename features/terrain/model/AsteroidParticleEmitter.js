model.AsteroidParticleEmitter = function AsteroidParticleEmitter()
{
    arguments[1].uniforms = {
        zoomLevel: { type: 'f', value: 1 },
        texture:   { type: 't', value: arguments[1].texture },
        detailLevel: { type: 'f', value: 1.0 }
    };
    arguments[1].attributes = {
        customVisible:	{ type: 'f',  value: [] },
        customAngle:	{ type: 'f',  value: [] },
        customSize:		{ type: 'f',  value: [] },
        customColor:	{ type: 'c',  value: [] },
        customOpacity:	{ type: 'f',  value: [] },
        textureOffset: { type: 'f',  value: [] },
        textureCount: { type: 'f',  value: [] }
    };
    console.log(arguments)
    model.ParticleEmitter.apply(this, arguments);
}

model.AsteroidParticleEmitter.prototype = Object.create(model.ParticleEmitter.prototype);

model.AsteroidParticleEmitter.prototype.setZoomLevel = function(zoomLevel)
{
    if (zoomLevel < 0.1) {
        this.particleMaterial.uniforms.detailLevel.value = 3.0;
    } else if (zoomLevel < 0.3) {
        this.particleMaterial.uniforms.detailLevel.value = 2.0;
    } else {
        this.particleMaterial.uniforms.detailLevel.value = 1.0;
    }
    this.particleMaterial.uniforms.zoomLevel.value = zoomLevel;
}

model.AsteroidParticleEmitter.prototype.particleVertexShader =
    [
        "attribute vec3  customColor;",
        "attribute float customOpacity;",
        "attribute float customSize;",
        "attribute float customAngle;",
        "attribute float customVisible;",  // float used as boolean (0 = false, 1 = true)
        "attribute float textureOffset;",
        "attribute float textureCount;",
        "uniform float zoomLevel;",
        "uniform float detailLevel;",
        "varying vec4  vColor;",
        "varying float vAngle;",
        "varying float vTextureOffset;",
        "varying float vTextureCount;",

        "void main()",
            "{",
            "if ( customVisible > 0.5 )", 				// true
            "vColor = vec4( customColor, customOpacity );", //     set color associated to vertex; use later in fragment shader.
            "else",							// false
            "vColor = vec4(0.0, 0.0, 0.0, 0.0);", 		//     make particle invisible.

            "vAngle = customAngle;",
            "vTextureOffset = textureOffset;",
            "vTextureCount = textureCount;",

            "gl_PointSize = customSize * zoomLevel;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        "}"
    ].join("\n");

model.AsteroidParticleEmitter.prototype.particleFragmentShader =
    [
        "uniform sampler2D texture;",
        "uniform float detailLevel;",
        "varying vec4 vColor;",
        "varying float vAngle;",
        "varying float vTextureOffset;",
        "varying float vTextureCount;",

        "void getTextureX(in float pointCoord_x, out float x) {",
            "x = pointCoord_x / pow(2.0, detailLevel);",
            "x += 1.0 - 1.0 / pow(2.0, detailLevel - 1.0);",
        "}",

        "void getTextureY(in float pointCoord_y, out float y) {",
            "y = pointCoord_y / pow(2.0, detailLevel);",
            "y += 1.0 / vTextureCount * vTextureOffset;",
        "}",

        "void main()",
        "{",
            "gl_FragColor = vColor;",

            "float c = cos(vAngle);",
            "float s = sin(vAngle);",
            "vec2 rotatedUV = vec2(c * (gl_PointCoord.x - 0.5) + s * (gl_PointCoord.y - 0.5) + 0.5,",
            "c * (gl_PointCoord.y - 0.5) - s * (gl_PointCoord.x - 0.5) + 0.5);",  // rotate UV coordinates to rotate texture

//            "vec4 rotatedTexture = texture2D( texture,  vec2(gl_PointCoord.x / 2.0, gl_PointCoord.y / 2.0 + 0.5));",
            "float x = 0.0;",
            "float y = 0.0;",
            "getTextureX(gl_PointCoord.x, x);",
            "getTextureY(gl_PointCoord.y, y);",

            "vec4 rotatedTexture = texture2D( texture,  vec2(x, y));",

            "gl_FragColor = gl_FragColor * rotatedTexture;",    // sets an otherwise white particle texture to desired color
        "}"
    ].join("\n");