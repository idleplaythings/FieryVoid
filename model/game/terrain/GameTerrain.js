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
        asteroidCount: 500,
        minAsteroidRadius: 400,
        maxAsteroidRadius: 1000,
        beltRadius: 50000,
        beltWidth: 20000
    });
    var asteroids = asteroidFactory.generateAsteroids();

    asteroids.forEach(function(asteroid) { asteroid.subscribeToScene(gameScene); });

    return this;
}
