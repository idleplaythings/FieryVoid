if ( typeof model === 'undefined')
    model = {};

model.SpritePhong = function SpritePhong(z, bumpScale)
{
	this.bumpScale = bumpScale || 2; 
	model.Sprite.call(this, z);
};

model.SpritePhong.prototype =  Object.create(model.Sprite.prototype);

model.SpritePhong.prototype.createObject3d = function(texture)
{
    var geometry = new THREE.PlaneGeometry(1,1,1,1);

    if (! texture)
        texture = new THREE.DataTexture(null, 0, 0);

    var material = new THREE.MeshPhongMaterial(
        {
            map: texture,
            bumpMap: texture,
            bumpScale: this.bumpScale,
            transparent: true
        });

    var mesh = new THREE.Mesh(
        geometry,
        material);

    mesh.position = new THREE.Vector3(0, 0, this.z);
    return mesh;
};

model.SpritePhong.prototype.receiveBumpMapData = function(data)
{
    this.object3d.material.bumpMap = this.createTexture(data);
};