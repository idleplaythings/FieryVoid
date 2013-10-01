model.ShipSpriteSelected = function ShipSpriteSelected(shipDesign)
{
    model.ShipSprite.call(this, shipDesign);
    this.z = -1;

    this.circle = null;
    this.arrow = null;
};

model.ShipSpriteSelected.prototype =  Object.create(model.ShipSprite.prototype);

model.ShipSpriteSelected.prototype.animate = function()
{
    this.circle.rotation.z -= Math.PI/180;
};

model.ShipSpriteSelected.prototype.getObject3d = function()
{
    if ( ! this.object3d)
    {
        var size = this.getSize();
        var r = size / 2;
        var r1 = r * 0.6;
        var r2 = r * 0.75;
        var segments = 6;
        var gapratio = 0.2;

        this.object3d = new THREE.Object3D();

        this.circle = this.getCircle(size, r, r1, r2, segments, gapratio);
        this.circle.scale.set(size, size, 1);
        this.object3d.add(this.circle);

        this.arrow = this.getArrow(size);
        this.arrow.scale.set(size, size, 1);
        this.object3d.add(this.arrow);

        //TODO: correct way to expose gamescene animators to this
        //this.ship.gameScene.animators.push(this);
    }

    return this.object3d;
};

model.ShipSpriteSelected.prototype.getSize = function()
{
    var width = this.shipDesign.hullLayout.width;
    var height = this.shipDesign.hullLayout.height;
    var scale = this.shipDesign.hullLayout.tileScale;

    var larger = (width > height) ? width : height;
    larger *= scale*1.2;
    return larger;
};
