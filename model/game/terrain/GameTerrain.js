model.GameTerrain = function GameTerrain()
{
};

model.GameTerrain.prototype.createRandom = function(container, seed, gameScene)
{
    console.log("seed is: "+seed);
    Math.seedrandom(seed);

    container.css('background-color', 'black');
    container.css('background-image', 'url(/background/bluespace3.jpg)');

    var starField = new model.StarFieldFactory(gameScene, 1000);
    starField.create();


    gameScene.animators.push(starField);


    var asteroidFactory = new model.AsteroidBeltFactory({
        asteroidCount: 10000,
        minAsteroidRadius: 400,
        maxAsteroidRadius: 1000,
        beltRadius: 1,
        beltWidth: 500
    });
    var asteroids = asteroidFactory.generateAsteroids();

    asteroids = asteroids.map(function(asteroid) {
        return new model.AsteroidParticle(asteroid);
    });


    var asteroidParticleEmitter = new model.ParticleEmitter(
        asteroids,
        {
            texture: THREE.ImageUtils.loadTexture("/terrain/asteroid1.png")
        }
    );

    console.log(asteroidParticleEmitter)

    var asteroidBelt = asteroidParticleEmitter.getObject3d();
    asteroidBelt.position = new THREE.Vector3(0, 0, 0);
    gameScene.scene.add(asteroidBelt);

    return this;
}
