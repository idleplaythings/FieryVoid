model.SpriteEffectThrusterGlow = function SpriteEffectThrusterGlow(module, args)
{
    if ( ! args)
        args = {};

    this.module = module;
    this.object3d = null;
    this.z = args.z || 10;
    this.offset = args.offset || 13;
    this.position = {x:0, y:0};
    this.sprite1 = null;
    this.sprite2 = null;
    this.animationTick = 1;
    this.animationStep = 1;
    this.width = 200;
    this.height = 0;
};

//this.position = this.shipDesign.getPositionInIconRelativeFromCenter(
//    this.module.getCenterPosition());

model.SpriteEffectThrusterGlow.prototype.init = function()
{
    this.module.ship.getIcon().addObject(this.getObject3d());
};

model.SpriteEffectThrusterGlow.prototype.animate = function(gameTime)
{
    var gameTime = gameTime / 1000;
    var last = this.module.thruster.getTotalThrusterUsageAtTime(Math.floor(gameTime))
    var next = this.module.thruster.getTotalThrusterUsageAtTime(Math.ceil(gameTime))

    if (last == 0 && next == 0)
    {
        this.sprite1.visible = false;
        this.sprite2.visible = false;
    }
    else
    {
        this.sprite1.visible = true;
        this.sprite2.visible = true;
    }

    var perc = gameTime % 1;

    if (this.animationTick >= 20 || this.animationTick <= 0)
    {
        this.animationStep *= -1;
    }

    this.animationTick += this.animationStep;

    var w = this.width;
    //for lasers!
    //w *= this.module.thruster.maxChannel / (((next * perc) + (last * (1-perc)))/2);
    w *= (((next * perc) + (last * (1-perc)))/2);

    var v = this.width/200;
    w += this.animationTick*v;

    this.sprite1.material.opacity = 0.5;
    this.sprite1.position.x = w/2 + this.offset;
    this.sprite1.scale.x = w;
    this.sprite1.scale.y = this.height*2;

    w = w*0.4;
    this.sprite2.position.x = w/2 + this.offset;
    this.sprite2.scale.x = w;
    this.sprite2.scale.y = this.height*0.6;
};

model.SpriteEffectThrusterGlow.prototype.getObject3d = function()
{
    if ( ! this.object3d)
    {
        this.object3d = new THREE.Object3D();
        this.sprite1 = this.createObject3d(1, {r:170/255, g:235/255, b:255/255}, 'thrusterglow2.png');
        this.sprite2 = this.createObject3d(2, {r:230/255, g:255/255, b:255/255}, 'thrusterglow2.png');
        this.object3d.add(this.sprite1);
        this.object3d.add(this.sprite2);

        this.position = this.module.ship.shipDesign.getPositionInIconRelativeFromCenter(
            this.module.getCenterPosition());

        this.object3d.position = new THREE.Vector3(this.position.x, this.position.y, this.z);

        this.height = this.module.height * this.module.ship.shipDesign.hullLayout.tileScale;

        var rotation = this.module.getRotation();
        this.object3d.rotation.z = MathLib.degreeToRadian(MathLib.addToAzimuth(360, -rotation));
    }

    return this.object3d;
};

model.SpriteEffectThrusterGlow.prototype.createObject3d = function(z, color, file)
{
    var geometry = new THREE.PlaneGeometry(1,1,1,1);

    var map = THREE.ImageUtils.loadTexture( "/effect/"+file);
    var material = new THREE.MeshBasicMaterial(
        {
            map: map,
            transparent: true
        });

    material.color.setRGB(color.r, color.g, color.b);
    var mesh = new THREE.Mesh(
        geometry,
        material);

    mesh.position = new THREE.Vector3(0, 0, z);
    return mesh;
};
