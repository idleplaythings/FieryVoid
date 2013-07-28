model.GameTerrain = function GameTerrain()
{
};

model.GameTerrain.prototype.createRandom = function(container, seed, gameScene, dispatcher)
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
        minAsteroidRadius: 30,
        maxAsteroidRadius: 100,
        beltRadius: 20000,
        beltWidth: 50000
    });
    var asteroids = asteroidFactory.generateAsteroids();

    asteroids = asteroids.map(function(asteroid) {
        return new model.AsteroidParticle(asteroid);
    });


    var asteroidParticleEmitter = new model.ParticleEmitter(
        asteroids,
        {
            zoomLevel: gameScene.zoom,
            texture: THREE.ImageUtils.loadTexture("/terrain/asteroid1.png")
        }
    );

    asteroidParticleEmitter.observeZoomLevelChange(dispatcher);

    var asteroidBelt = asteroidParticleEmitter.getObject3d();
    asteroidBelt.position = new THREE.Vector3(0, 0, 0);
    gameScene.scene.add(asteroidBelt);
    gameScene.animators.push(asteroidParticleEmitter);

    return this;
}
