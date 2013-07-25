model.GameTerrain = function GameTerrain()
{
};

model.GameTerrain.prototype.createRandom = function(container, seed, gameScene)
{
    console.log("seed is: "+seed);
    Math.seedrandom(seed);

    container.css('background-color', '#050d16');
    container.css('background-image', 'url(/background/bluespace3.jpg)');

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

    var asteroidFactory = new model.AsteroidBeltFactory({
        asteroidCount: 100,
        beltRadius: 1500,
        beltWidth: 500
    });
    var asteroids = asteroidFactory.generateAsteroids();

    asteroids.forEach(function(asteroid) { asteroid.subscribeToScene(gameScene); });

    return this;
}

model.AsteroidBeltFactory = function AsteroidBeltFactory(args)
{
    this.beltCentre = args.beltCentre || { x: 0, y: 0 };
    this.beltRadius = args.beltRadius || 300;
    this.beltWidth = args.beltWidth || 100;
    this.asteroidCount = args.asteroidCount || 100;
    this.asteroidMinRadius = args.asteroidMinRadius || 200;
    this.asteroidMaxRadius = args.asteroidMaxRadius || 200;
}

model.AsteroidBeltFactory.prototype.generateAsteroids = function()
{
    var segments = 8;
    var segmentAngle = Math.PI * 2 / segments;
    var asteroidsPerSegment = this.asteroidCount / segments;

    var asteroids = [];

    for (var i=0; i<segments; i++) {
        var startAngle = i * segmentAngle;

        for (var j=0; j<asteroidsPerSegment; j++) {
            var angle = startAngle + Math.random() * segmentAngle;
            var distance = this.beltRadius + Math.random() * this.beltWidth;
            var radius = this.asteroidMinRadius + Math.random() * (this.asteroidMaxRadius - this.asteroidMinRadius);

            var asteroid = new model.Asteroid({
                position: {
                    x: this.beltCentre.x + distance * Math.cos(angle),
                    y: this.beltCentre.y + distance * Math.sin(angle)
                },
                radius: radius
            });

            asteroids.push(asteroid);
        }
    }

    return asteroids;
}
