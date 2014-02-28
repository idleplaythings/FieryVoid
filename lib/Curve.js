model.Curve = function Curve(path, color)
{
    if (typeof color === 'undefined') {
        color = 0x0000ff;
    }

    this.geometry = new THREE.TubeGeometry(
        new THREE.SplineCurve3(path.getSpacedGeometry(10).vertices),
        10, // segments
        30, // radius
        0   // radiussegments
    );

    this.material = new THREE.MeshBasicMaterial({
        shading: THREE.SmoothShading,
        color: color,
        transparent: true,
        overdraw: false
    });

    this.mesh = new THREE.Mesh(
        this.geometry,
        this.material
    );

    this.mesh.position.z = -30;
};

model.Curve.prototype.get = function()
{
    return this.mesh;
};