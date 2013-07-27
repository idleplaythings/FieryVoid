model.GameTerrain = function GameTerrain()
{
};

model.GameTerrain.prototype.createRandom = function(container, seed, gameScene)
{
    console.log("seed is: "+seed);
    Math.seedrandom(seed);

    container.css('background-color', '#050d16');
    //container.css('background-image', 'url(/background/bluespace3.jpg)');

    var starCount = 600;
    var starField = new model.StarField(gameScene, seed, starCount);
    starField.create();

    /*
    var starCount = 600 + (Math.floor(Math.random()*400)-200);

    while(starCount--)
    {
        var color = {h:0.54, s:1, l:0.8 + Math.random()*0.2};

        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var scale = Math.random()*0.6;
        if (scale < 0.3)
            scale = 0.3;

        //var twinkle = Math.random() > 0.2 ? Math.floor(Math.random()*400) : 0;
        var twinkle = Math.floor(Math.random()*20+10);
        var twinkleVariance = Math.random()*0.5;

        var star = new model.Star({
            position:{x:x, y:y},
            scale:scale,
            color: color,
            twinkle: twinkle,
            twinkleVariance: twinkleVariance
        });

        if (twinkle)
        {
            gameScene.animators.push(star);
        }

        gameScene.terrainScene.add(star.getSprite());
    }
    */

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
