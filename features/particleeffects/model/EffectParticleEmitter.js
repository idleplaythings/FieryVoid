model.EffectParticleEmitter = 
	 function EffectParticleEmitter(particleCount, gameScene, blending)
{
	if ( ! blending )
		blending = THREE.NormalBlending;
		
	this.particleCount = particleCount;
    
    this.free = [];
    for ( var i = 0; i<particleCount; i++)
    {
		this.free.push(i);
	}
   
    this.effects = 0;
    this.gameScene = gameScene;

    var attributes = {
        alive:					{ type: 'f',  value: [] }, //unneccessary
        angle:					{ type: 'f',  value: [] }, //pack
        angleChange:			{ type: 'f',  value: [] }, //pack
        size:					{ type: 'f',  value: [] }, //pack
        sizeChange:				{ type: 'f',  value: [] }, //pack
        color:					{ type: 'c',  value: [] },
        opacity:				{ type: 'f',  value: [] }, //pack
        fadeInTime:				{ type: 'f',  value: [] },
        fadeInSpeed:			{ type: 'f',  value: [] },
        fadeOutTime:			{ type: 'f',  value: [] },
        fadeOutSpeed:			{ type: 'f',  value: [] },
        activationGameTime: 	{ type: 'f',  value: [] }, //unneccessary
        velocity: 				{ type: 'v3', value: [] },
        acceleration: 			{ type: 'v3', value: [] },
        textureNumber: 			{ type: 'f',  value: [] },
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
            blending: blending, depthTest: true
        });
        
	/*
	THREE.NormalBlending = 0;
	THREE.AdditiveBlending = 1;
	THREE.SubtractiveBlending = 2;
	THREE.MultiplyBlending = 3;
	THREE.AdditiveAlphaBlending = 4;
	*/
        
    this.flyParticle = new model.EffectParticle(
		this.particleMaterial, this.particleGeometry);
	
    this.particleMesh = this.getObject3d(particleCount);
    
    this.needsUpdate = false;
    
    gameScene.scene.add(this.particleMesh); 
    gameScene.animators.push(this);
};

model.EffectParticleEmitter.prototype =  Object.create(model.ParticleEmitter.prototype);

model.EffectParticleEmitter.prototype.getObject3d = function(particleCount)
{
	while(particleCount--)
	{
		this.particleGeometry.vertices[particleCount] = new THREE.Vector3();
		this.flyParticle.create(particleCount).setInitialValues();
	}

	var particleMesh = new THREE.ParticleSystem( this.particleGeometry, this.particleMaterial );
	particleMesh.position = new THREE.Vector3(0, 0, 10);
	//this.particleMesh.dynamic = true;
	//this.particleMesh.sortParticles = true;
    

    return particleMesh;
};

model.EffectParticleEmitter.prototype.register = function()
{
	this.needsUpdate = true;
	this.effects++;
};

model.EffectParticleEmitter.prototype.unregister = function()
{
	this.effects--;
};

model.EffectParticleEmitter.prototype.update = function()
{
	if ( ! this.needsUpdate)
		return;
		
	Object.keys(this.particleMaterial.attributes).forEach(function(key){
		this.particleMaterial.attributes[key].needsUpdate = true;
	}, this);
	this.particleGeometry.verticesNeedUpdate = true;
};

model.EffectParticleEmitter.prototype.getFreeParticle = function()
{
	var i = this.free.pop();
		
	return this.flyParticle.create(i);
};

model.EffectParticleEmitter.prototype.freeParticles = function(particleIndices)
{
	this.free = this.free.concat(particleIndices);
};

model.EffectParticleEmitter.prototype.animate = function(gameTime)
{
	this.particleMaterial.uniforms.gameTime.value = gameTime;
};

model.EffectParticleEmitter.prototype.vertexShader =
    [
        "attribute vec3  color;",
        "attribute float opacity;",
        "attribute float fadeInTime;",
        "attribute float fadeInSpeed;",
        "attribute float fadeOutTime;",
        "attribute float fadeOutSpeed;",
        "attribute float size;",
        "attribute float sizeChange;",
        "attribute float angle;",
        "attribute float angleChange;",
        "attribute vec3 velocity;",
        "attribute vec3 acceleration;", 
        "attribute float alive;",  // float used as boolean (0 = false, 1 = true)
        "attribute float activationGameTime;", 
        "attribute float textureNumber;",
        "uniform float zoomLevel;",
        "uniform float gameTime;",
        "varying vec4  vColor;",
        "varying float vAngle;",
        "varying float textureN;",
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
        "textureN = textureNumber;",
        
        "vec3 displacement = velocity * elapsedTime;",
        "vec3 accelerationDisplacement  = elapsedTime * elapsedTime * 0.5 * acceleration;",
  
        "vec3 modPos = position + displacement + accelerationDisplacement;",
        

        "gl_PointSize = clamp(size + (sizeChange * elapsedTime), 0.0, 128.0) * zoomLevel;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( modPos, 1.0 );",
        "}"
    ].join("\n");

//xRot = xCenter + cos(Angle) * (x - xCenter) - sin(Angle) * (y - yCenter)
//yRot = yCenter + sin(Angle) * (x - xCenter) + cos(Angle) * (y - yCenter)
model.EffectParticleEmitter.prototype.fragmentShader =
    [
        "uniform sampler2D texture;",
        "varying vec4 vColor;",
        "varying float vAngle;",
        "varying float textureN;",
        "void main()",
        "{",
        "gl_FragColor = vColor;",
        "if (gl_FragColor.a == 0.0)",
			"return;",

        "float c = cos(vAngle);",
        "float s = sin(vAngle);",
        "float textureAmount = 8.0;",,
        "vec2 tPos = vec2((mod(textureN, textureAmount) * (1.0 / textureAmount)), (floor(textureN / textureAmount) * (1.0 / textureAmount)));",
        //"vec2 tCen = vec2((0.5 / textureAmount) , 1.0 - (0.5 / textureAmount));",//(1.0 / textureAmount);",
        //"vec2 pos = vec2(",
		//	"gl_PointCoord.x / textureAmount,",
		//	"1.0 - (gl_PointCoord.y / textureAmount));",
		
		"vec2 pos = vec2(gl_PointCoord.x, gl_PointCoord.y);",
		"vec2 tCen = vec2(0.5, 0.5);",//(1.0 / textureAmount);",
		
        "vec2 rPos = vec2(",
			"tCen.x + c * (pos.x - tCen.x) - s * (pos.y - tCen.y),",
			"tCen.y + s * (pos.x - tCen.x) + c * (pos.y - tCen.y));",
			
		"rPos = clamp(rPos, 0.0, 1.0);", 
		
		"vec2 finalPos = vec2(",
			"(rPos.x / textureAmount + tPos.x),",
			"1.0 - (rPos.y / textureAmount + tPos.y));",
		
        "vec4 rotatedTexture = texture2D( texture, finalPos);", //rotatedUV );",
        "gl_FragColor = gl_FragColor * rotatedTexture;", 
        "}"
	].join("\n");

    
