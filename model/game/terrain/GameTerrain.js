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
        beltCentre: { x: 40000, y: 0 },
        asteroidCount: 20000,
        minAsteroidRadius: 100,
        maxAsteroidRadius: 500,
        beltRadius: 20000,
        beltWidth: 50000
    });
    var asteroids = asteroidFactory.generateAsteroids();

    var v2 = function(x, y) {
        return new THREE.Vector2(x, y);
    }
    var v3 = function(x, y, z) {
        return new THREE.Vector3(x, y, z);
    }

    var textureUvs = [
        [
            v2(0, 0),
            v2(0.25, 0),
            v2(0.25, 0.25),
            v2(0, 0.25)
        ],
        [
            v2(0.25, 0),
            v2(0.5, 0),
            v2(0.5, 0.25),
            v2(0.25, 0.25)
        ],
        [
            v2(0.5, 0),
            v2(0.75, 0),
            v2(0.75, 0.25),
            v2(0.5, 0.25)
        ]
    ];

    var asteroidBeltGeometry = new THREE.Geometry();

    asteroids.forEach(function(asteroid, index) {
        asteroidBeltGeometry.vertices.push(
            v3(asteroid.position.x - asteroid.radius, asteroid.position.y - asteroid.radius, 0),
            v3(asteroid.position.x + asteroid.radius, asteroid.position.y - asteroid.radius, 0),
            v3(asteroid.position.x + asteroid.radius, asteroid.position.y + asteroid.radius, 0),
            v3(asteroid.position.x - asteroid.radius, asteroid.position.y + asteroid.radius, 0)

        );

        var face = new THREE.Face4(index * 4 + 0, index * 4 + 1, index * 4 + 2, index * 4 + 3);
        asteroidBeltGeometry.faces.push(face);

        asteroidBeltGeometry.faceVertexUvs[0].push(textureUvs[Math.floor(textureUvs.length * Math.random())]);
    });

    var uniforms = {
        map: {
            type: 't',
            value: THREE.ImageUtils.loadTexture("/terrain/asteroid_512.png")
        }
    };

    var testMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true
    });
    var asteroidBeltMesh = new THREE.Mesh(asteroidBeltGeometry, testMaterial);

    gameScene.scene.add(asteroidBeltMesh);

    return this;
}

var vertexShader =
    [
        "varying vec2 vUv;",

        "void main() {",
            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
        "}"
    ].join("\n");

var fragmentShader =
    [
        "varying vec2 vUv;",
        "uniform sampler2D map;",

        "void main() {",
            "gl_FragColor = texture2D(map, vUv);",
        "}"
    ].join("\n");