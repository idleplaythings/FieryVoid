model.Curve = function Curve(start, control, end, color)
{
    if (typeof color === 'undefined') {
        color = 0x0000ff;
    }

    var material = new THREE.LineBasicMaterial({
        color: color
    });

    var bezier = new THREE.QuadraticBezierCurve(start, control, end);
    var points = bezier.getPoints(10);

    points = points.map(function(point) {
       return new THREE.Vector3(point.x, point.y, 10);
    })

    // console.log(points)

    var shape = new THREE.SplineCurve3(points);

    // var extrudeSettings = { amount: 20 };
    // bevelSegments: 2, steps: 2 , bevelSegments: 5, bevelSize: 8, bevelThickness:5
    // var geometry = new THREE.LatheGeometry(shape, 12);
    var mesh = new THREE.Mesh(
        new THREE.TubeGeometry(shape, 10, 30, 6),
        // TubeGeometry(path, segments, radius, radiusSegments, closed, debug)
        new THREE.MeshBasicMaterial({
            color: color,
            side: THREE.DoubleSide // ??
        })
    );

    this.line = mesh;


    // var geometry = new THREE.Geometry();

    // points.forEach(function(point) {
    //     geometry.vertices.push(new THREE.Vector3(point.x, point.y, 10))
    // });

    // this.line = new THREE.Line(geometry, material);
};

model.Curve.prototype.get = function()
{
    return this.line;
};