model.Asteroid = function Asteroid(args)
{
    this._id = args._id || null;
    this.position = args.position || null;
    this.radius = args.radius || null;
    this.mass = args.mass || null;
    this.scale = args.scale || null;
    this.icon = null;
};

model.Asteroid.prototype.subscribeToScene = function(gameScene)
{
    var texture = THREE.ImageUtils.loadTexture("/terrain/asteroid1.png");
//    var texture = model.Asteroid.getTexture();
    this.mesh = this.createObject3d(texture);
    this.mesh.scale.set(this.radius, this.radius, 1);
    this.mesh.position = new THREE.Vector3(this.position.x, this.position.y, 0);
    gameScene.scene.add(this.mesh);

}

model.Asteroid.prototype.setPosition = function(position)
{
    this.position = position;
    this.mesh.position = new THREE.Vector3(position.x, position.y, 0);
}

model.Asteroid.texture = null;
model.Asteroid.getTexture = function() {
    if (model.Asteroid.texture === null) {
        model.Asteroid.texture = THREE.ImageUtils.loadTexture("/terrain/asteroid1.png");
    }

    return model.Asteroid.texture;
}
