model.EffectParticleEmitter = function EffectParticleEmitter(particles)
{
    this.particles = particles;
    this.free = particles.slice();

    var attributes = {
        alive:					{ type: 'f',  value: [] },
        angle:					{ type: 'f',  value: [] },
        angleChange:			{ type: 'f',  value: [] },
        size:					{ type: 'f',  value: [] },
        color:					{ type: 'c',  value: [] },
        opacity:				{ type: 'f',  value: [] },
        fadeInTime:				{ type: 'f',  value: [] },
        fadeInSpeed:			{ type: 'f',  value: [] },
        fadeOutTime:			{ type: 'f',  value: [] },
        fadeOutSpeed:			{ type: 'f',  value: [] },
        activationGameTime: 	{ type: 'f',  value: [] },
        velocity: 				{type: 'v3', value: []},
        acceleration: 			{type: 'v3', value: []},
    };

    var uniforms = {
		gameTime: {type: 'f', value: 0},
		zoomLevel: { type: 'f', value:  1 },
		texture:   { type: 't', value: THREE.ImageUtils.loadTexture("/effect/effectTextures1024.png")}
    };

    this.particleGeometry = new THREE.Geometry();
    this.particleGeometry.dynamic = true;
    this.particleMaterial = new THREE.ShaderMaterial(
        {
            uniforms: uniforms,
            attributes: attributes,
            vertexShader:   this.vertexShader,
            fragmentShader: this.fragmentShader,
            transparent: true,
            alphaTest: 0.5, // if having transparency issues, try including: alphaTest: 0.5,
            blending: THREE.AdditiveBlending, depthTest: true
        });
        
	for (var i = 0; i < this.particles.length; i++)
	{
		var particle = this.particles[i];
		particle.material = this.particleMaterial;
		particle.materialIndex = i;
	}
	
    this.getObject3d();
};

model.EffectParticleEmitter.prototype =  Object.create(model.ParticleEmitter.prototype);

model.EffectParticleEmitter.prototype.getObject3d = function()
{
    if ( ! this.particleMesh)
    {
        for (var i = 0; i < this.particles.length; i++)
        {
            var particle = this.particles[i];

            this.particleGeometry.vertices[i] = particle.position;
            particle.setInitialValues();
        }

        this.particleMesh = new THREE.ParticleSystem( this.particleGeometry, this.particleMaterial );
        this.particleMesh.position = new THREE.Vector3(0, 0, 10);
        //this.particleMesh.dynamic = true;
        //this.particleMesh.sortParticles = true;
    }

    return this.particleMesh;
};

model.EffectParticleEmitter.prototype.getFreeParticle = function()
{
    return this.free.pop();
};

model.EffectParticleEmitter.prototype.animate = function(gameTime)
{
	this.particleMaterial.uniforms.gameTime.value = gameTime;
	
    //for (var i = 0; i < this.particles.length; i++)
    //{
        //var particle = this.particles[i].animate(gameTime);
    //}
    //this.particleGeometry.verticesNeedUpdate = true;
};

//x = v0t + ½at2
model.EffectParticleEmitter.prototype.vertexShader =
    [
        "attribute vec3  color;",
        "attribute float opacity;",
        "attribute float fadeInTime;",
        "attribute float fadeInSpeed;",
        "attribute float fadeOutTime;",
        "attribute float fadeOutSpeed;",
        "attribute float size;",
        "attribute float angle;",
        "attribute float angleChange;",
        "attribute vec3 velocity;",
        "attribute vec3 acceleration;", 
        "attribute float alive;",  // float used as boolean (0 = false, 1 = true)
        "attribute float activationGameTime;", 
        "uniform float zoomLevel;",
        "uniform float gameTime;",
        "varying vec4  vColor;",
        "varying float vAngle;",
        "void main()",
        "{",
        
        "float currentOpacity = 0.0;",
        "if (fadeInSpeed == 0.0) currentOpacity = opacity;",
        
        "float elapsedTime = gameTime - activationGameTime;",
        
        
        "if (fadeInSpeed > 0.0 && gameTime > fadeInTime)",
		"{",
			"float fadeIn = (gameTime - fadeInTime) / fadeInSpeed;",
			"if (fadeIn > 1.0) fadeIn = 1.0;",
			"currentOpacity =  opacity * fadeIn;",
		"}",
			
		"if (fadeOutSpeed > 0.0 && gameTime > fadeOutTime)",
		"{",
			"float fadeOut = (gameTime - fadeOutTime) / fadeOutSpeed;",
			"if (fadeOut > 1.0) fadeOut = 1.0;",
			"currentOpacity =  currentOpacity *  (1.0 - fadeOut);",
		"}",
        
        "if ( alive > 0.5 && currentOpacity > 0.0 && elapsedTime >= 0.0)", 				// true
			"vColor = vec4( color, currentOpacity );", //     set color associated to vertex; use later in fragment shader.
        "else",							// false
			"vColor = vec4(0.0, 0.0, 0.0, 0.0);", 		//     make particle invisible.

        "vAngle = angle + angleChange * elapsedTime;",
        
        "vec3 displacement = velocity * elapsedTime;",
        "vec3 accelerationDisplacement  = elapsedTime * elapsedTime * 0.5 * acceleration;",
  
        "vec3 modPos = position + displacement + accelerationDisplacement;",
        

        "gl_PointSize = size * zoomLevel;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( modPos, 1.0 );",
        "}"
    ].join("\n");

model.EffectParticleEmitter.prototype.fragmentShader =
    [
        "uniform sampler2D texture;",
        "varying vec4 vColor;",
        "varying float vAngle;",
        "void main()",
        "{",
        "gl_FragColor = vColor;",

        "float c = cos(vAngle) * 0.125;",
        "float s = sin(vAngle) * 0.125;",
        
        "vec2 position = gl_PointCoord * 0.125;",
        
        "vec2 rotatedUV = vec2(c * (position.x - 0.0625) + s * (position.y - 0.0625) + 0.0625,",
        "c * (position.y - 0.0625) - s * (position.x - 0.0625) + 0.0625);",  // rotate UV coordinates to rotate texture
        "vec4 rotatedTexture = texture2D( texture,  rotatedUV );",
        "gl_FragColor = gl_FragColor * rotatedTexture;",    // sets an otherwise white particle texture to desired color
        "}"
	].join("\n");

    
