model.GameTerrain = function GameTerrain()
{
};

model.GameTerrain.prototype.createRandom = function(container, seed, gameScene)
{
    console.log("seed is: "+seed);
    Math.seedrandom(seed);

    container.css('background-color', '#050d16');
    //container.css('background-image', 'linear-gradient(to top right, #000000 0%, #1F093D 100%)');

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
            gameScene: gameScene,
            twinkle: twinkle,
            twinkleVariance: twinkleVariance
        });

        gameScene.terrainScene.add(star.getSprite());
    }


    return this;
}