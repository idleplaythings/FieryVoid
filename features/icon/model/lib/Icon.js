if ( typeof model === 'undefined')
    model = {};

model.Icon = function Icon(gameScene, dispatcher)
{
    this.ThreeIconGroup = null;
    this.iconObject = null;
    this.width = null;
    this.height = null;
    this.sprites = {};

    this.gameScene = gameScene;
    this.dispatcher = dispatcher;
};

model.Icon.prototype.create = function(iconObject, width, height)
{
    this.width = width;
    this.height = height;

    this.iconObject = iconObject;
    this.getThreeObject();
    this.createOrUpdateSprites();
    
    this.gameScene.addToScene(this.getThreeObject());

    return this;
};

model.Icon.prototype.addObject = function(obj)
{
    this.ThreeIconGroup.add(obj.getObject3d());
};

model.Icon.prototype.removeObject = function(obj)
{
    this.ThreeIconGroup.remove(obj);
};

model.Icon.prototype.getThreeObject = function()
{
    if ( ! this.ThreeIconGroup)
    {
        this.ThreeIconGroup = new THREE.Object3D();
        this.ThreeIconGroup.position = new THREE.Vector3(0, 0, 1);
        this.ThreeIconGroup.renderDepth = 10;
    }

    return this.ThreeIconGroup;
};

model.Icon.prototype.destroy = function(){
    this.gameScene.removeFromScene(this.getThreeObject());
};

model.Icon.prototype.hide = function()
{
    for (var i in this.sprites)
        this.sprites[i].hide();

    this.hidden = true;
};

model.Icon.prototype.show = function()
{
    console.log("showing");
    for (var i in this.sprites)
        this.sprites[i].show();

    this.hidden = false;
};

model.Icon.prototype.setPosition = function(pos)
{
	var newPos = new THREE.Vector3(pos.x, pos.y, 0);
    this.getThreeObject().position = new THREE.Vector3(pos.x, pos.y, 0);;

	Object.keys(this.sprites).forEach(function(key){
		var sprite = this.sprites[key];
		if (sprite.uniforms && sprite.uniforms.worldPosition)
			sprite.uniforms.worldPosition.value = new THREE.Vector3(pos.x, -pos.y, 0);;
	}, this);
	
    if (this.hidden)
        this.show();

    return this;
};

model.Icon.prototype.getPosition = function()
{
    return this.getThreeObject().position;
};

model.Icon.prototype.createOrUpdateSprites = function()
{
    if (this.created)
        this.updateSprites();
    else
        this.createSprites();
};

model.Icon.prototype.updateSprites = function()
{
 
};

model.Icon.prototype.getAzimuth = function()
{
    var rotation = MathLib.radianToDegree(this.getThreeObject().rotation.z);
    return MathLib.addToAzimuth(360, - rotation);
};
