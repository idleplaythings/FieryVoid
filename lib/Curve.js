model.Curve = function Curve(path, color)
{
    if (typeof color === 'undefined') {
        color = 0x0000ff;
    }

    var material = new THREE.LineBasicMaterial({
        color: color
    });

    var shape = new THREE.SplineCurve3(path.getSpacedGeometry(10).vertices);

    var mesh = new THREE.Mesh(
        new THREE.TubeGeometry(shape, 10, 30, 10),
        new THREE.MeshBasicMaterial({
            color: color,
            side: THREE.DoubleSide // ??
        })
    );

    mesh.position.z = 10;

    this.line = mesh;
};

model.Curve.prototype.get = function()
{
    return this.line;
};