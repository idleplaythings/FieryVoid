if ( typeof model === 'undefined')
    model = {};

model.ShipSprite = function ShipSprite(hullLayout, z)
{
    model.Sprite.call(this, z);
    this.hullLayout = hullLayout;
    this.object3d = null;
    this.tileSize = 30;
    this.uniforms = {
		texture:		{ type: 't',	value: new THREE.DataTexture(null, 0, 0)},
		opacity:		{ type: 'f',	value: 1.0},
		tileDimensions: { type: 'v4',	value: new THREE.Vector2(1, 1, 0, 0)},
		damageLookup:	{ type: 't',	value: new THREE.DataTexture(null, 0, 0)},
		damageBrushes:  { type: 't', value: THREE.ImageUtils.loadTexture("/misc/damageBrushes.png")}
    }; 
    
    //this.uniforms.damageBrushes.value.generateMipmaps = false;
	this.uniforms.damageBrushes.value.magFilter = THREE.LinearFilter;
	this.uniforms.damageBrushes.value.minFilter = THREE.LinearFilter;
	
    this.material = null;
};

model.ShipSprite.prototype =  Object.create(model.Sprite.prototype);


model.ShipSprite.prototype.createObject3d = function(texture)
{
    var geometry = new THREE.PlaneGeometry(1,1,1,1);

	var attributes = {};
	
	if (texture)
		this.uniforms.texture.value = texture;
	
	this.material = new THREE.ShaderMaterial(
        {
            uniforms: this.uniforms,
            attributes: attributes,
            vertexShader:   this.vertexShader,
            fragmentShader: this.fragmentShader,
            transparent: true
        });

    var mesh = new THREE.Mesh(
        geometry,
        this.material);

    mesh.position = new THREE.Vector3(0, 0, this.z);
    return mesh;
};

model.ShipSprite.prototype.requestImageDataToCallback = function()
{

};

model.ShipSprite.prototype.update = function(shipDesign)
{
    this.hullLayout = shipDesign.hullLayout;
    this.setInitialScale();
};


model.ShipSprite.prototype.setDamageOverlay = function(imageData)
{
	console.log(imageData);
    var tileSize = 30;
    var width = imageData.width;
    var height = imageData.height;
    var scale = this.object3d.scale;
   
   console.log("scale", scale.x, scale.y);
	
	
	var tileSizeInTex = {
		x: tileSize / scale.x,
		y: tileSize / scale.y
	}

	var offset = {
		x: (1 - tileSizeInTex.x * width) / 2,
		y: (1 - tileSizeInTex.y * height) / 2
	}
	
	this.uniforms.tileDimensions.value = new THREE.Vector4(
		1 / width,
		1 / height,
		offset.x,
		offset.y
	);

	this.uniforms.damageLookup.value = this.createTexture(
		{data: imageData}, true);
	
	
	//	(width % tileSize / 2) / width,
	//	(height % tileSize / 2) / height
	
    //this.uniforms.opacity.value.y =  0.5;
    console.log(this.uniforms);
};


model.ShipSprite.prototype.scale = function(width, height)
{
    this.object3d.scale.set(
    	width,
    	height,
    	1
	);
};

model.ShipSprite.prototype.setInitialScale = function()
{
    var width = this.hullLayout.width;
    var height = this.hullLayout.height;
    var scale = this.tileSize;

    this.scale(width*scale, height*scale, 1);
};

model.ShipSprite.prototype.receiveImageData = function(data)
{
	this.uniforms.texture.value = this.createTexture(data);
    this.setInitialScale(data);
};

model.ShipSprite.prototype.receiveDamageData = function(data)
{
	this.uniforms.damageLookup.value = this.createTexture(data);
};

model.ShipSprite.prototype.receiveBumpMapData = function(data)
{
    //TODO: Bump mapping
};

model.ShipSprite.prototype.vertexShader =
    [
		"uniform sampler2D texture;",
		"uniform sampler2D damageLookup;",
		"uniform sampler2D damageBrushes;",
		"uniform float opacity;",
		"uniform vec4 tileDimensions;",
		
		 "varying vec2 vUv;",
    
        "void main()",
        "{",
			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        "}"
    ].join("\n");

model.ShipSprite.prototype.fragmentShader =
    [
        "uniform sampler2D texture;",
        "uniform sampler2D damageLookup;",
        "uniform sampler2D damageBrushes;",
        "uniform float opacity;",
        "uniform vec4 tileDimensions;",
        
        "varying vec2 vUv;",
        
        "vec4 combineColors(vec4 c1, vec4 c2) {",
        
			"float alpha = c1.a > c2.a ? c1.a : c2.a;",
			
			"vec4 color = (c1 * (1.0 - c2.a)) + (c2 * c2.a);",
			"color.a = alpha;",
			"return color;",
			
        "}",
        
        "vec4 sampleTile(sampler2D tex, float tileN, float textureAmount, vec2 uv) {",
        
			"vec2 textureLocation = vec2(mod(tileN, textureAmount), floor(tileN / textureAmount)) * (1.0 / textureAmount);",
			"vec2 tileUv = (uv * (1.0 / textureAmount)) + textureLocation;",
			"return texture2D(tex, tileUv);",
			
        "}",
        
        "vec4 lookUpDamage(vec4 damageDetail, vec2 tileUv, vec2 damageUv) {",
   
			"vec4 finalColor = vec4(0.0);",
			
			"for (float x = -1.0; x <= 1.0; x += 1.0) {",
				"for (float y = -1.0; y <= 1.0; y += 1.0) {",
					"vec4 dd = texture2D(damageLookup, damageUv + vec2(tileDimensions.x * x, tileDimensions.y * y));",
					
					"if (dd.r == 0.0)",
						"continue;",
					
					"vec2 samplePoint = clamp(tileUv * 0.5 + 0.25 + vec2(x, y) * -0.5, 0.0, 1.0);",
					"vec4 color = sampleTile(damageBrushes, floor(dd.g * 255.0), 4.0, samplePoint);",
					"finalColor = combineColors(finalColor, color);",
				"}",
			"}",
	
			"return finalColor;",
        "}",
        
        "vec2 getDamageUv() {",
        
			"if (vUv.x < tileDimensions.z || vUv.x > 1.0 - tileDimensions.z)",
				"return vec2(-1.0);",
				
			"if (vUv.y < tileDimensions.w || vUv.y > 1.0 - tileDimensions.w)",
				"return vec2(-1.0);",
			
			"vec2 tilePos = vUv - (vec2(tileDimensions.z, tileDimensions.w));",
			"tilePos = vec2(tilePos.x * (1.0 / (1.0 - tileDimensions.z * 2.0)), tilePos.y * (1.0 / (1.0 - tileDimensions.w * 2.0)));",
            "return tilePos;",
			
        "}",
        
        "vec2 getTileUv(vec4 damageDetail, vec2 pos) {",
			"vec2 botLeft = damageDetail.ba * 255.0 * tileDimensions.xy;",
			"vec2 tileUv = pos - botLeft;",
			"return clamp(tileUv / tileDimensions.xy, 0.0, 1.0);",
			
            // "return mod(pos, (1.0 / tileDimensions.xy)) / (1.0 / tileDimensions.xy);",
        "}",
        
        "vec4 getDamage() {",
			"vec2 damageUv = getDamageUv();",
            
            "if (damageUv.x < 0.0)",
				"return vec4(0.0);",
				
			"vec4 damageDetail = texture2D( damageLookup, damageUv);",
			
			"vec2 tileUv = getTileUv(damageDetail, damageUv);",
			//"return vec4(tileUv, 0.0, 1.0);",
			
			"return lookUpDamage(damageDetail, tileUv, damageUv);",
			
        "}",
        
        "void main()",
        "{",
        
			"vec4 textureColor = texture2D( texture, vUv);",
			"if (textureColor.a == 0.0)",
				"discard;",
			
			"vec4 damageColor = getDamage();",
			"float damageAlpha = 1.0 - getDamage().a;",
				
			"float alpha = textureColor.a;",
			"float da = damageColor.a;",
		
			"gl_FragColor = (textureColor * (1.0 - da)) + (damageColor * da);",
			"gl_FragColor.a = alpha * opacity;",// * damageAlpha;",
			
        "}"
	].join("\n");
