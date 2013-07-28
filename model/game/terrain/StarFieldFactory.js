model.StarFieldFactory = function StarFieldFactory(gameScene, count)
{
    this.gameScene = gameScene;
    this.count = count;

    this.particles = [];
    this.emitter = null;
};

model.StarFieldFactory.prototype.create = function()
{
    this.emitter = new model.ParticleEmitter(
        this.getParticles(),
        {
            texture: THREE.ImageUtils.loadTexture( "/terrain/star1.png" )
        }
    );

    this.gameScene.terrainScene.add(this.emitter.getObject3d());
};

model.StarFieldFactory.prototype.animate = function()
{
    this.emitter.animate();
};


model.StarFieldFactory.prototype.getParticles = function()
{
    if (this.particles.length == 0)
    {
        var starCount = 600 + (Math.floor(Math.random()*400)-200);
        while(starCount--)
        {
            var color = new THREE.Color();
            color.setHSL(0.6, 1, (0.825 + (Math.random()*0.2)));
            //color.setRGB(0.65, 0.79, 1);
            //console.log(color.getHSL());

            var x = (Math.random() * 2) -1;
            var y = (Math.random() * 2) -1;
            var scale = Math.random()*0.6;
            if (scale < 0.3)
                scale = 0.3;

            //var twinkle = Math.random() > 0.2 ? Math.floor(Math.random()*400) : 0;
            var twinkle = Math.floor(Math.random()*20+10);
            var twinkleVariance = Math.random()*0.5;

            var star = new model.Star({
                position: new THREE.Vector3(x,y,0),
                size:16*scale,
                color: color,
                twinkle: twinkle,
                twinkleVariance: twinkleVariance,
                alive: 1.0
            });

            /*
            star = new model.Particle({
                alive:1.0,
                position: new THREE.Vector3(0,0,0)
            });
            */


            this.particles.push(star);
        }
    }

    return this.particles;
};