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
		tileDimensions: { type: 'v2',	value: new THREE.Vector2(1, 1)},
		damageLookup:	{ type: 't',	value: new THREE.DataTexture(null, 0, 0)},
		damageLookup2:	{ type: 't',	value: new THREE.DataTexture(null, 0, 0)},
		damageBrushes:  { type: 't', 	value: THREE.ImageUtils.loadTexture("/misc/damageBrushes.png")},
		damageNormalMap:{ type: 't', 	value: THREE.ImageUtils.loadTexture("/misc/damageBrushes-normal.png")},
		normalMap:		{ type: 't', 	value: new THREE.DataTexture(null, 0, 0)},
		worldPosition:	{ type: 'v3',	value: new THREE.Vector3(0, 0, 0)},
		scale:			{ type: 'v2',	value: new THREE.Vector2(1, 1)},
		flatLight:		{ type: 'f',	value: 1.0}
    }; 
    
    //this.uniforms.damageBrushes.value.generateMipmaps = false;
	this.uniforms.damageBrushes.value.magFilter = THREE.LinearFilter;
	this.uniforms.damageBrushes.value.minFilter = THREE.LinearFilter;
	this.uniforms.damageNormalMap.value.magFilter = THREE.LinearFilter;
	this.uniforms.damageNormalMap.value.minFilter = THREE.LinearFilter;
	
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
            vertexShader:   model.ShipSpriteShader.getVertexShader(),
            fragmentShader: model.ShipSpriteShader.getFragmentShader(), //this.fragmentShader,
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


model.ShipSprite.prototype.setDamageOverlay = function(data, data2)
{
    var tileSize = 30;
    var width = data.width;
    var height = data.height;
    var scale = this.object3d.scale;
   
	this.uniforms.tileDimensions.value = new THREE.Vector2(
		1 / width,
		1 / height
	);

	this.uniforms.damageLookup.value = this.createTexture(
		{data: data}, true);
		
	this.uniforms.damageLookup2.value = this.createTexture(
		{data: data2}, true);
};


model.ShipSprite.prototype.scale = function(width, height)
{
    this.object3d.scale.set(
    	width,
    	height,
    	1
	);
	
	this.uniforms.scale.value = new THREE.Vector2(width, height);
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

model.ShipSprite.prototype.receiveNormalMapData = function(data)
{
    this.uniforms.normalMap.value = this.createTexture(data);
    this.uniforms.flatLight.value = 0.0;
};
