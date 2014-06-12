model.Curve = function Curve(path, color)
{
    this.segments = 10;
    this.radius = 20;
    this.radiussegments = 0;
    this.spacedGeometry = path.getSpacedGeometry(this.segments).vertices;

    if (typeof color === 'undefined') {
        color = new THREE.Color(0x0000ff);
    }

    this.geometry = new THREE.TubeGeometry(
        new THREE.SplineCurve3(this.spacedGeometry),
        this.segments, // segments
        this.radius,
        this.radiussegments
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

    this.mesh.position.z = 10;
};

model.Curve.prototype.pointIsOnCurve = function(scenePosition){
    
    var radius = this.radius * 2;
    for (var i = 1; i < this.spacedGeometry.length; i++){
        var a = this.spacedGeometry[i-1];
        var b = this.spacedGeometry[i];
        if (MathLib.isBetweenPoints(a, b, radius, scenePosition)){
            return true;
        }
    }

    return false;
};

model.Curve.prototype.get = function()
{
    return this.mesh;
};

model.Curve.prototype.hide = function()
{
    this.mesh.traverse(function (object){
        object.visible = false;
    });
};

model.Curve.prototype.show = function()
{
    this.mesh.traverse(function (object){
        object.visible = true;
    });
};