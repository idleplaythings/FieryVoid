model.StarFieldFactory = function StarFieldFactory(gameScene, count)
{
    this.gameScene = gameScene;
    this.count = count;

    this.particles = [];
    this.emitter = null;

    this.starField = null;
};

model.StarFieldFactory.prototype.create = function()
{
    this.emitter = new model.ParticleEmitter(
        this.getParticles(),
        {
            vertexShader: this.vertexShader,
            fragmentShader: this.fragmentShader,
            attributes: {
                customVisible:	{ type: 'f',  value: [] },
                customAngle:	{ type: 'f',  value: [] },
                customSize:		{ type: 'f',  value: [] },
                customColor:	{ type: 'c',  value: [] },
                customOpacity:	{ type: 'f',  value: [] },
                parallaxFactor: { type: 'f',  value: [] }
            },
            uniforms:{
                texture: THREE.ImageUtils.loadTexture( "/terrain/star1.png" )
            }
        }
    );

    this.starField = this.emitter.getObject3d();
    this.starField.position = new THREE.Vector3(0,0, -10);
    this.gameScene.scene.add(this.starField);
};

model.StarFieldFactory.prototype.animate = function()
{
    this.emitter.animate();
};

model.StarFieldFactory.prototype.getParticles = function()
{
    if (this.particles.length == 0)
    {
        var starCount = this.count + (Math.floor(Math.random()*(this.count/2))-(this.count/4));
        while(starCount--)
        {
            var color = new THREE.Color();
            color.setHSL(0.6, 1, (0.825 + (Math.random()*0.2)));
            //color.setRGB(0.65, 0.79, 1);
            //console.log(color.getHSL());

            var x = (Math.random() * 3) -1.5;
            var y = (Math.random() * 3) -1.5;

            //var x = (Math.random() * window.innerWidth);
            //var y = (Math.random() * window.innerHeight);


            var scale = Math.random()*0.6;
            if (scale < 0.3)
                scale = 0.3;

            //var twinkle = Math.random() > 0.2 ? Math.floor(Math.random()*400) : 0;
            var twinkle = Math.floor(Math.random()*20+10);
            var twinkleVariance = Math.random()*0.5;

            var star = new model.Star({
                parallaxFactor: Math.random() * 0.00001,
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


model.StarFieldFactory.prototype.vertexShader =
    [
        "attribute float parallaxFactor;",
        "attribute vec3  customColor;",
        "attribute float customOpacity;",
        "attribute float customSize;",
        "attribute float customAngle;",
        "attribute float customVisible;",  // float used as boolean (0 = false, 1 = true)
        "varying vec4  vColor;",
        "varying float vAngle;",
        "void main()",
        "{",
        "if ( customVisible > 0.5 )", 				// true
        "vColor = vec4( customColor, customOpacity );", //     set color associated to vertex; use later in fragment shader.
        "else",							// false
        "vColor = vec4(0.0, 0.0, 0.0, 0.0);", 		//     make particle invisible.

        "vAngle = customAngle;",
        "vec4 modPos = vec4( position.x - (cameraPosition.x * parallaxFactor), position.y - (cameraPosition.y * parallaxFactor), position.z, 1.0 );",
        "gl_PointSize = customSize;",
        //"gl_Position = vec4( position, 1.0 );",
        "gl_Position = modPos;",
        "}"
    ].join("\n");

model.StarFieldFactory.prototype.fragmentShader =
    [
        "uniform sampler2D texture;",
        "varying vec4 vColor;",
        "varying float vAngle;",
        "void main()",
        "{",
        "gl_FragColor = vColor;",

        "float c = cos(vAngle);",
        "float s = sin(vAngle);",
        "vec2 rotatedUV = vec2(c * (gl_PointCoord.x - 0.5) + s * (gl_PointCoord.y - 0.5) + 0.5,",
        "c * (gl_PointCoord.y - 0.5) - s * (gl_PointCoord.x - 0.5) + 0.5);",  // rotate UV coordinates to rotate texture
        "vec4 rotatedTexture = texture2D( texture,  rotatedUV );",
        "gl_FragColor = gl_FragColor * rotatedTexture;",    // sets an otherwise white particle texture to desired color
        "}"
    ].join("\n");