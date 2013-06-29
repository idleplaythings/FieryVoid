model.ShipSprite = function ShipSprite(shipDesign)
{
    this.shipDesign = shipDesign;
    this.sprite = null;
    this.initialScale = null;
};

model.ShipSprite.prototype.getSprite = function()
{
    this.sprite = this.createSprite();
    this.setZoom(1);

    this.requestImageDataToCallback();

    return this.sprite;
};

model.ShipSprite.prototype.requestImageDataToCallback = function()
{

};

model.ShipSprite.prototype.setZoom = function(zoom)
{
    var scale = this.getIconScale();
    zoom = zoom * scale;

    this.sprite.scale.set(
        this.initialScale * zoom,
        1 * zoom,
        1);
};

model.ShipSprite.prototype.getIconScale = function()
{
    var hullScale = this.shipDesign.hullLayout.tileScale;
    if (window.innerWidth > window.innerHeight)
    {
        return (this.shipDesign.hullLayout.height * hullScale) / window.innerHeight;
    }
    else
    {
        return (this.shipDesign.hullLayout.width * hullScale) / window.innerWidth;
    }
};

model.ShipSprite.prototype.setInitialScale = function(sprite)
{
    var width = this.shipDesign.hullLayout.width;
    var height = this.shipDesign.hullLayout.height;

    this.initialScale = width/height;

    sprite.scale.set(this.initialScale, 1, 1);
};

model.ShipSprite.prototype.receiveImageData = function(data)
{
    this.sprite.material.map = this.createTexture(data);
};

model.ShipSprite.prototype.createSprite = function()
{
    var material =
        new THREE.SpriteMaterial({
            map: null,
            useScreenCoordinates: false,
            scaleByViewport:false
        } );

    var sprite = new THREE.Sprite(material);
    sprite.visible = true;
    sprite.position = new THREE.Vector3(0, 0, 0);
    this.setInitialScale(sprite);

    return sprite;
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