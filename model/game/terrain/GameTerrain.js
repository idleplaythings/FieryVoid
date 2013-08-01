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

    var asteroidBeltFactory = new model.AsteroidBeltFactory({
        beltCentre: { x: 0, y: 0 },
        asteroidCount: 10000,
//        asteroidCount: 1,
        minAsteroidRadius: 100,
        maxAsteroidRadius: 500,
        beltRadius: 20000,
        beltWidth: 5000
    });
    asteroidBelt = asteroidBeltFactory.create();
//    var asteroids = asteroidBeltFactory.create();

    var v2 = function(x, y) {
        return new THREE.Vector2(x, y);
    }
    var v3 = function(x, y, z) {
        return new THREE.Vector3(x, y, z);
    }

    var textureUvs = [
//        [
//            v2(0, 0),
//            v2(0.25, 0),
//            v2(0.25, 0.25),
//            v2(0, 0.25)
//        ],
//        [
//            v2(0.25, 0),
//            v2(0.5, 0),
//            v2(0.5, 0.25),
//            v2(0.25, 0.25)
//        ],
        [
            v2(0.5, 0),
            v2(0.75, 0),
            v2(0.75, 0.25),
            v2(0.5, 0.25)
        ]
    ];

    var attributes = {
        rotation: {
            type: 'f',
            value: []
        },
        asteroidX: {
            type: 'f',
            value: []
        },
        asteroidY: {
            type: 'f',
            value: []
        }
    };

    var uniforms = {
        map: {
            type: 't',
            value: THREE.ImageUtils.loadTexture("/terrain/asteroid_512.png")
        }
    };

    testMaterial = new THREE.ShaderMaterial({
        attributes: attributes,
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        transparent: true
    });

    var asteroidBeltGeometry = new THREE.Geometry();

    asteroidBelt.asteroids.forEach(function(asteroid, index) {
        asteroidBeltGeometry.vertices.push(
            v3(asteroid.position.x - asteroid.radius, asteroid.position.y - asteroid.radius, 0),
            v3(asteroid.position.x + asteroid.radius, asteroid.position.y - asteroid.radius, 0),
            v3(asteroid.position.x + asteroid.radius, asteroid.position.y + asteroid.radius, 0),
            v3(asteroid.position.x - asteroid.radius, asteroid.position.y + asteroid.radius, 0)
        );

        var face = new THREE.Face4(index * 4 + 0, index * 4 + 1, index * 4 + 2, index * 4 + 3);
        asteroidBeltGeometry.faces.push(face);

        asteroidBeltGeometry.faceVertexUvs[0].push(textureUvs[Math.floor(textureUvs.length * Math.random())]);

        testMaterial.attributes.rotation.value.push(asteroid.rotation);
        testMaterial.attributes.rotation.value.push(asteroid.rotation);
        testMaterial.attributes.rotation.value.push(asteroid.rotation);
        testMaterial.attributes.rotation.value.push(asteroid.rotation);
        testMaterial.attributes.asteroidX.value.push(asteroid.position.x);
        testMaterial.attributes.asteroidX.value.push(asteroid.position.x);
        testMaterial.attributes.asteroidX.value.push(asteroid.position.x);
        testMaterial.attributes.asteroidX.value.push(asteroid.position.x);
        testMaterial.attributes.asteroidY.value.push(asteroid.position.y);
        testMaterial.attributes.asteroidY.value.push(asteroid.position.y);
        testMaterial.attributes.asteroidY.value.push(asteroid.position.y);
        testMaterial.attributes.asteroidY.value.push(asteroid.position.y);
    });

    var asteroidBeltMesh = new THREE.Mesh(asteroidBeltGeometry, testMaterial);
    asteroidBeltMesh.dynamic = true;

    var foo = 5;
    gameScene.scene.add(asteroidBeltMesh);
    gameScene.animators.push({
        animate: function() {
            asteroidBelt.asteroids.forEach(function(asteroid, index) {
                asteroid.animate();

                testMaterial.attributes.rotation.value[index * 4] = asteroid.rotation;
                testMaterial.attributes.rotation.value[index * 4 + 1] = asteroid.rotation;
                testMaterial.attributes.rotation.value[index * 4 + 2] = asteroid.rotation;
                testMaterial.attributes.rotation.value[index * 4 + 3] = asteroid.rotation;
            });

            testMaterial.attributes.rotation.needsUpdate = true;
        }
    });

    return this;
}

var vertexShader =
    [
        "attribute float rotation;",
        "attribute float asteroidX;",
        "attribute float asteroidY;",
        "varying vec2 vUv;",

        "mat3 rotateAngleAxisMatrix(float angle, vec3 axis) {",
            "float c = cos(angle);",
            "float s = sin(angle);",
            "float t = 1.0 - c;",
            "axis = normalize(axis);",
            "float x = axis.x, y = axis.y, z = axis.z;",
            "return mat3(",
                "t*x*x + c,    t*x*y + s*z,  t*x*z - s*y,",
                "t*x*y - s*z,  t*y*y + c,    t*y*z + s*x,",
                "t*x*z + s*y,  t*y*z - s*x,  t*z*z + c",
            ");",
        "}",

        "vec3 rotateAngleAxis(float angle, vec3 axis, vec3 v) {",
            "return rotateAngleAxisMatrix(angle, axis) * v;",
        "}",


        "void main() {",
            "vec3 mid = vec3(asteroidX, asteroidY, 0.0);",
            "vec3 rpos = rotateAngleAxis(rotation, vec3(0.0, 0.0, 1.0), mid - position) + mid;",
            "vec4 fpos = vec4(rpos, 1.0);",
            "vec4 mvPosition = modelViewMatrix * fpos;",

            "vUv = uv;",
//            "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
            "gl_Position = projectionMatrix * mvPosition;",
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