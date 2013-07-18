model.ShipSprite = function ShipSprite(shipDesign)
{
    this.shipDesign = shipDesign;
    this.object3d = null;
    this.initialScale = null;
    this.z = 0;
};

model.ShipSprite.prototype =  Object.create(model.Sprite.prototype);

model.ShipSprite.prototype.getObject3d = function()
{
    this.object3d = this.createObject3d();
    this.setInitialScale();
    this.requestImageDataToCallback();

    return this.object3d;
};

model.ShipSprite.prototype.requestImageDataToCallback = function()
{

};

model.ShipSprite.prototype.setZoom = function(zoom)
{
    return;
    var scale = this.getIconScale();
    zoom = zoom * scale;

    this.object3d.scale.set(
        this.initialScale * zoom,
        1 * zoom,
        1);
};

model.ShipSprite.prototype.setInitialScale = function()
{
    var width = this.shipDesign.hullLayout.width;
    var height = this.shipDesign.hullLayout.height;
    var scale = this.shipDesign.hullLayout.tileScale;

    this.object3d.scale.set(width*scale, height*scale, 1);
};

model.ShipSprite.prototype.receiveImageData = function(data)
{
    this.object3d.material.map = this.createTexture(data);
};

model.ShipSprite.prototype.createObject3d = function()
{
    var geometry = new THREE.PlaneGeometry(1,1,1,1);

    var tex = new THREE.DataTexture(null, 0, 0);
    var material = new THREE.MeshBasicMaterial(
        {
            map: tex,
            transparent: true
        });

    var mesh = new THREE.Mesh(
        geometry,
        material);

    mesh.position = new THREE.Vector3(0, 0, this.z);
    return mesh;
}

model.ShipSprite.prototype.createTexture = function(image)
{
    var texturedata = {
        data : new Uint8Array(
            image.data.data.buffer),
        height: image.data.height,
        width: image.data.width
    };

    var tex = new THREE.DataTexture(null, image.data.width, image.data.height);
    tex.magFilter = THREE.LinearFilter; //THREE.NearestFilter;
    tex.minFilter = THREE.LinearFilter; //THREE.NearestMipMapNearestFilter;
    tex.image = texturedata;
    tex.needsUpdate = true;

    return tex;
}