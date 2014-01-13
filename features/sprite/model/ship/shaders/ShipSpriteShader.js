model.ShipSpriteShader = {
	
	getFragmentShader: function()
	{
		return fragmentShader;
	},
	
	getVertexShader: function()
	{
		return vertexShader;
	},
	
}

normalMapping = [

		"vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {",

			"vec3 q0 = dFdx( eye_pos.xyz );",
			"vec3 q1 = dFdy( eye_pos.xyz );",
			"vec2 st0 = dFdx( uv.st );",
			"vec2 st1 = dFdy( uv.st );",

			"vec3 S = normalize(  q0 * st1.t - q1 * st0.t );",
			"vec3 T = normalize( -q0 * st1.s + q1 * st0.s );",
			"vec3 N = normalize( surf_norm );",

			"vec3 mapN = texture2D( normalMap, uv ).xyz * 2.0 - 1.0;",
			"if (damageNormal.a > 0.0)",
				"mapN = mapN * (1.0 - damageNormal.a ) + (damageNormal.xyz * 2.0 - 1.0) * damageNormal.a;",
				
			"mat3 tsn = mat3( S, T, N );",
			"return normalize( tsn * mapN );",

		"}",

		"vec3 lightPosition = vec3(0.0, 0.0, 0.0);",
		"vec4 ambientColor = vec4(1.0, 1.0, 1.0, 1.0);",
		"vec4 diffuseColor = vec4(1.0, 1.0, 1.0, 1.0);",
		//"vec4 diffuseColor = vec4(1.0, 0.9, 0.4, 1.0);",
		"float ambientIntensity = 0.0;",

		"vec4 calculateLight(vec2 uv, vec4 color){",
		
			"vec3 viewPosition = normalize( vViewPosition );",
			"vec3 normal = perturbNormal2Arb(-vViewPosition, vec3(0.0, 0.0, 0.1), uv);",
			
			"vec4 lPosition = viewMatrix * vec4( lightPosition, 1.0 );",
			"vec3 light = normalize(lPosition.xyz + vViewPosition.xyz);",
			"float diffuseIntensity = clamp(dot(light, normal), 0.0, 1.0) * 0.8;",
			
			"vec3 directionalLight = vec3(0.0, 0.0, 0.6);",
			"float directionalIntensity = clamp(dot(directionalLight, normal), 0.0, 1.0) * 1.0;",
	
			"vec4 directional = vec4(diffuseColor.rgb * directionalIntensity, 1.0);",
			"vec4 diffuse = vec4(diffuseColor.rgb * diffuseIntensity, 1.0);",
			"vec4 ambient = vec4(ambientColor.rgb * ambientIntensity, 1.0);",
			
			
			"return (ambient + diffuse + directional) * color;",
		"}"
		
		
		
].join("\n");

vertexShader =
    [
		"uniform sampler2D texture;",
		
		"uniform sampler2D normalMap;",
		
		"uniform sampler2D damageLookup;",
		"uniform sampler2D damageLookup2;",
		"uniform sampler2D damageBrushes;",
		"uniform sampler2D damageNormalMap;",
		
		"uniform float opacity;",
		"uniform vec2 tileDimensions;",
		"uniform vec2 scale;",
		
		"varying vec3 vViewPosition;",
		"varying vec2 vUv;",
		"varying mat4 vNormalMatrix;",
    
        "void main()",
        "{", 
			"vUv = uv;",
			//"mat4 mvp = modelMatrix * projectionMatrix * viewMatrix;",
			//"mat3 normalMatrix2 = mat3(mvp);",
			//"vNormalMatrix = inverse(modelViewMatrix);",
			//f_normal = normalize(normal * normalMatrix);

			"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
			"vViewPosition = -mvPosition.xyz;",
			"gl_Position = projectionMatrix * mvPosition;",
        "}"
    ].join("\n");

fragmentShader =
    [
		"#extension GL_OES_standard_derivatives : enable",
		
        "uniform sampler2D texture;",
        
        "uniform sampler2D normalMap;",
        "uniform float flatLight;",
        
        "uniform sampler2D damageLookup;",
        "uniform sampler2D damageLookup2;",
        "uniform sampler2D damageBrushes;",
        "uniform sampler2D damageNormalMap;",
        "uniform float opacity;",
        "uniform vec2 tileDimensions;",
        "uniform vec2 scale;",
        
        "varying vec2 vUv;",
        "varying vec3 vViewPosition;",
        "varying mat4 vNormalMatrix;",
        
        "float globalAlpha = 0.0;",
        
        "vec4 damageNormal = vec4(0.0, 0.0, 0.0, 0.0);",
        
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
        
        "vec4 lookUpDamage(vec2 tileUv, vec2 damageUv) {",
   
			"vec4 finalColor = vec4(0.0);",
			
			
			"for (float x = -1.0; x <= 1.0; x += 1.0) {",
				"for (float y = -1.0; y <= 1.0; y += 1.0) {",
					"vec4 dd = texture2D(damageLookup, damageUv + vec2(tileDimensions.x * x, tileDimensions.y * y));",
					
					"if (dd.r == 0.0)",
						"continue;",
					
					"vec4 dd2 = texture2D(damageLookup2, damageUv + vec2(tileDimensions.x * x, tileDimensions.y * y));",
					
					"float holeScale = dd2.b;",
					
					"if (holeScale > 0.0) {",
					
					"vec2 samplePointHole = (tileUv * holeScale + (1.0 - holeScale) * 0.5) + vec2(x, y) * -holeScale;",
					
					"float alpha =  1.0 - sampleTile(damageBrushes, floor(dd.g * 255.0), 4.0, clamp(samplePointHole, 0.0, 1.0)).a;",
					"globalAlpha = globalAlpha > alpha ? alpha : globalAlpha;",
					
					"}",
					
					"if (globalAlpha == 0.0)",
						"continue;",
					
					"float scale = dd2.r;",
					"float opacity = dd2.g;",
				
					"vec2 samplePoint = (tileUv * scale + (1.0 - scale) * 0.5) + vec2(x, y) * -scale;",
					//"vec2 samplePoint = clamp(tileUv * 0.5 + 0.25 + vec2(x, y) * -0.5, 0.0, 1.0);",
					"vec4 color = sampleTile(damageBrushes, floor(dd.g * 255.0), 4.0, clamp(samplePoint, 0.0, 1.0));",
					
					"if (color.a > 0.0) {",
						"vec4 damageNormalColor = sampleTile(damageNormalMap, floor(dd.g * 255.0), 4.0, clamp(samplePoint, 0.0, 1.0));",
						"damageNormalColor.a = color.a;",
						"damageNormal = damageNormal.a == 0.0 ? damageNormalColor : damageNormal;",
					"}",
					
					"color.a *= opacity;",
					"finalColor = combineColors(finalColor, color);", //color);",
				"}",
			"}",
			
			/*
			"vec4 dd = texture2D(damageLookup, damageUv + vec2(tileDimensions.x * 0.0, tileDimensions.y * 0.0));",
				
			"if (dd.r == 0.0)",
				"return vec4(0.0);",
				
			"float zoom = 0.25;",
				
			"vec2 samplePoint = (tileUv * zoom + (1.0 - zoom) * 0.5) + vec2(-1.0, 0.0) * -zoom;", //clamp(tileUv * 0.5 + 0.25 + vec2(0.0, 0.0) * -0.5, 0.0, 1.0);",
			"return sampleTile(damageBrushes, floor(dd.g * 255.0), 4.0, clamp(samplePoint, 0.0, 1.0));",
			
			*/
			"return finalColor;",
        "}",
        
        "vec2 getTileUv(vec4 damageDetail, vec2 pos) {",
			"vec2 botLeft = damageDetail.ba * 255.0 * tileDimensions.xy;",
			"vec2 tileUv = pos - botLeft;",
			"return clamp(tileUv / tileDimensions.xy, 0.0, 1.0);",
			
            // "return mod(pos, (1.0 / tileDimensions.xy)) / (1.0 / tileDimensions.xy);",
        "}",
        
        "vec4 getDamage() {",
				
			"vec4 damageDetail = texture2D( damageLookup, vUv);",
			
			"vec2 tileUv = getTileUv(damageDetail, vUv);",
			//"return vec4(tileUv, 0.0, 1.0);",
			
			"return lookUpDamage(tileUv, vUv);",
			
        "}",
        
        normalMapping, 
        
        "void main()",
        "{",
			"damageNormal = vec4(0.0, 0.0, 0.0, 0.0);",
			"globalAlpha = 1.0;",
			//"gl_FragColor = vec4(vUv, 0.0, 1.0);",
			//"return;",
			"vec4 textureColor = texture2D( texture, vUv);",
			
			"if (textureColor.a == 0.0)",
				"discard;",
			
			"vec4 damageColor = getDamage();",
			//"vec4 damageColor = vec4(0.0);",
			
			"if (flatLight == 0.0)",
				"textureColor = calculateLight(vUv, textureColor);",
				
			"float alpha = textureColor.a;",
			"float da = damageColor.a;",
		
			"gl_FragColor = (textureColor * (1.0 - da)) + (damageColor * da);",
			"gl_FragColor.a = alpha * globalAlpha * opacity;",
        "}"
	].join("\n");
