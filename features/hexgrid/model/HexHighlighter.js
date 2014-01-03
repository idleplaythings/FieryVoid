model.HexHighlighter = function HexHighlighter(hexRenderer)
{
    this._hexRenderer = hexRenderer;
    this._scene = null;

    var canvas = $('<canvas width="512" height="512"></canvas>').css({
        position: 'absolute',
        top: '100px',
        left: '100px',
        border: '2px solid red',
        zIndex: 1000,
        backgroundColor: 'black'
    });

    this._canvas = canvas[0];
    this._context = this._canvas.getContext('2d');

    this._maxHighlights = 3;
}

model.HexHighlighter.prototype._getTexture = function()
{
    var hex = new model.Hex(0, 250, model.Hex.HORIZONTAL);
    hex.calculate();
    hex.setCentrePoint({ x: hex.width / 2 + 3, y: hex.height / 2 + 3 });

    this._context.scale(512 / (hex.width + 6), 512 / (hex.height + 6));


    this._hexRenderer.renderHex(this._context, hex);
    var texture = this._createTextureFromCanvas(this._canvas);
    texture.needsUpdate = true;

    return texture;
}

model.HexHighlighter.prototype._createTextureFromCanvas = function(canvas)
{
    return new THREE.Texture(canvas);
}

model.HexHighlighter.prototype.setScene = function(scene)
{
    this._scene = scene;

    this._createMaterial();
    this._createGeometry();
    this._createMesh();

    this._scene.add(this.mesh);
}

model.HexHighlighter.prototype._createMaterial = function()
{
    var attributes = {
        positionX: {
            type: 'f',
            value: []
        },
        positionY: {
            type: 'f',
            value: []
        }
    }

    var uniforms = {
        map: {
            type: 't',
            value: this._getTexture()
        }
    };

    this.material = new THREE.ShaderMaterial({
        attributes: attributes,
        uniforms: uniforms,
        vertexShader: this.vertexShader,
        fragmentShader: this.fragmentShader,
        transparent: true
    });

    this.material.attributes.positionX.value.push(0);
    this.material.attributes.positionY.value.push(0);
    this.material.attributes.positionX.value.push(0);
    this.material.attributes.positionY.value.push(0);
    this.material.attributes.positionX.value.push(0);
    this.material.attributes.positionY.value.push(0);
    this.material.attributes.positionX.value.push(0);
    this.material.attributes.positionY.value.push(0);

    this.material.side = THREE.DoubleSide;
}

model.HexHighlighter.prototype._createGeometry = function()
{
    this.geometry = new THREE.Geometry();
    this.geometry.dynamic = true;

    var uvMap = getUvMap(1);
    var uv1 = uvMap[0];
    var uv2 = [uv1[2], uv1[3], uv1[0], uv1[1]];

    for (var i = 0; i < this._maxHighlights; i++) {
        this.geometry.vertices.push(new THREE.Vector3(0, 0, 0));
        this.geometry.vertices.push(new THREE.Vector3(0, 0, 0));
        this.geometry.vertices.push(new THREE.Vector3(0, 0, 0));
        this.geometry.vertices.push(new THREE.Vector3(0, 0, 0));

        this.geometry.faces.push(new THREE.Face3(i * 4 + 0, i * 4 + 1, i * 4 + 2));
        this.geometry.faces.push(new THREE.Face3(i * 4 + 2, i * 4 + 3, i * 4 + 0));

        this.geometry.faceVertexUvs[0].push(uv1);
        this.geometry.faceVertexUvs[0].push(uv2);
    }
}

model.HexHighlighter.prototype._createMesh = function()
{
    this.mesh = new THREE.Mesh(this.geometry, this.material);
}

model.HexHighlighter.prototype.clearHighlights = function()
{
}

model.HexHighlighter.prototype.highlight = function(hexes)
{
    if (hexes instanceof Array === false) {
        hexes = [hexes];
    }

    var widthOffset = hexes[0].width / 2;
    var heightOffset = hexes[0].height / 2;
    var hex;

    hexes.slice(0, this._maxHighlights).forEach(function(hex, i) {
        // @todo: For some reason the texture is rendered at 90 degree angle... rotating
        // here manually by just rotating the vertices 90 degrees.
        this.geometry.vertices[i * 4 + 1].x = Math.round(hex.centrePoint.x - widthOffset);
        this.geometry.vertices[i * 4 + 1].y = Math.round(hex.centrePoint.y - heightOffset);

        this.geometry.vertices[i * 4 + 2].x = Math.round(hex.centrePoint.x + widthOffset);
        this.geometry.vertices[i * 4 + 2].y = Math.round(hex.centrePoint.y - heightOffset);

        this.geometry.vertices[i * 4 + 3].x = Math.round(hex.centrePoint.x + widthOffset);
        this.geometry.vertices[i * 4 + 3].y = Math.round(hex.centrePoint.y + heightOffset);

        this.geometry.vertices[i * 4 + 0].x = Math.round(hex.centrePoint.x - widthOffset);
        this.geometry.vertices[i * 4 + 0].y = Math.round(hex.centrePoint.y + heightOffset);
    }, this);

    this.geometry.verticesNeedUpdate = true;
    this.geometry.computeBoundingSphere();
    this.geometry.computeBoundingBox();
}

model.HexHighlighter.prototype.vertexShader = [
    "attribute float positionX;",
    "attribute float positionY;",
    "varying vec2 vUv;",

    "void main() {",
        "vUv = uv;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
    "}"
].join("\n");

model.HexHighlighter.prototype.fragmentShader = [
    "varying vec2 vUv;",
    "uniform sampler2D map;",

    "void main() {",
        "gl_FragColor = texture2D(map, vUv);",
    "}"
].join("\n");
