model.AsteroidBelt = function AsteroidBelt(asteroids)
{
    this.asteroids = asteroids;
    this.material = null;
    this.geometry = null;
    this.mesh = null;
};

model.AsteroidBelt.prototype.create = function()
{
    this._createMaterial();
    this._createGeometry();
    this._createMesh();

    return this;
}

model.AsteroidBelt.prototype.animate = function()
{
    this.material.uniforms.time.value += 0.001;
}

model.AsteroidBelt.prototype._createMaterial = function()
{
    var attributes = {
        rotationOffset: {
            type: 'f',
            value: []
        },
        rotationCoefficient: {
            type: 'f',
            value: []
        },
        positionX: {
            type: 'f',
            value: []
        },
        positionY: {
            type: 'f',
            value: []
        }
    };

    var uniforms = {
        map: {
            type: 't',
            value: THREE.ImageUtils.loadTexture("/terrain/asteroid_4096.png")
        },
        time: {
            type: 'f',
            value: 0
        }
    };

    this.material = new THREE.ShaderMaterial({
        attributes: attributes,
        uniforms: uniforms,
        vertexShader: this.vertexShader,
        fragmentShader: this.fragmentShader,
        transparent: true
    });

    this.asteroids.forEach(function(asteroid) {
        for (var i=0; i<4; i++) {
            this.material.attributes.rotationCoefficient.value.push(asteroid.rotationCoefficient);
            this.material.attributes.rotationOffset.value.push(asteroid.rotationOffset);
            this.material.attributes.positionX.value.push(asteroid.position.x);
            this.material.attributes.positionY.value.push(asteroid.position.y);
        }
    }.bind(this));
}

model.AsteroidBelt.prototype._createGeometry = function()
{
    this.geometry = new THREE.Geometry();

    var textureUvMaps = getUvMap(4);

    this.asteroids.forEach(function(asteroid, index) {
        this.geometry.vertices.push(
            new THREE.Vector3(asteroid.position.x - asteroid.radius, asteroid.position.y - asteroid.radius, 0),
            new THREE.Vector3(asteroid.position.x + asteroid.radius, asteroid.position.y - asteroid.radius, 0),
            new THREE.Vector3(asteroid.position.x + asteroid.radius, asteroid.position.y + asteroid.radius, 0),
            new THREE.Vector3(asteroid.position.x - asteroid.radius, asteroid.position.y + asteroid.radius, 0)
        );

        this.geometry.faces.push(
            new THREE.Face4(index * 4 + 0, index * 4 + 1, index * 4 + 2, index * 4 + 3)
        );

        this.geometry.faceVertexUvs[0].push(
            textureUvMaps[Math.floor(textureUvMaps.length * Math.random())]
        );
    }.bind(this));
}

model.AsteroidBelt.prototype._createMesh = function()
{
    this.mesh = new THREE.Mesh(this.geometry, this.material);
}

model.AsteroidBelt.prototype.vertexShader = [
    "uniform float time;",
    "attribute float rotationCoefficient;",
    "attribute float rotationOffset;",
    "attribute float positionX;",
    "attribute float positionY;",
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
        "vec3 mid = vec3(positionX, positionY, 0.0);",
        "vec3 rpos = rotateAngleAxis(time * rotationCoefficient + rotationOffset, vec3(0.0, 0.0, 1.0), mid - position) + mid;",
        "vec4 fpos = vec4(rpos, 1.0);",
        "vec4 mvPosition = modelViewMatrix * fpos;",

        "vUv = uv;",
        "gl_Position = projectionMatrix * mvPosition;",
    "}"
].join("\n");

model.AsteroidBelt.prototype.fragmentShader = [
    "varying vec2 vUv;",
    "uniform sampler2D map;",

    "void main() {",
        "gl_FragColor = texture2D(map, vUv);",
    "}"
].join("\n");