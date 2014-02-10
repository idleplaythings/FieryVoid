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

    var geometry = new THREE.Geometry();

    points.forEach(function(point) {
        geometry.vertices.push(new THREE.Vector3(point.x, point.y, 10))
    });

    this.line = new THREE.Line(geometry, material);
};

model.Curve.prototype.get = function()
{
    return this.line;
};