model.Asteroid = function Asteroid(args)
{
    this._id = args._id || null;
    this.position = args.position || null;
    this.radius = args.radius || null;
    this.mass = args.mass || null;
    this.scale = args.scale || null;
    this.icon = null;
};

model.Asteroid.prototype = Object.create(model.Sprite.prototype);

model.Asteroid.prototype.subscribeToScene = function(gameScene, eventDispatcher)
{
    var texture = THREE.ImageUtils.loadTexture("/terrain/asteroid1.png");
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

