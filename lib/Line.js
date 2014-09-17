model.Line = function Line(start, end, color, radius, opacity, z)
{
  this.segments = 10;
  this.radius = radius || 20;
  this.opacity = opacity || 1.0;
  this.radiussegments = 0;
  this.z = z || 0;

  this._shape = new THREE.Shape();
  this._shape.moveTo(start.x, start.y);
  this._shape.lineTo(end.x, end.y);
  var points = this._shape.getPoints(this.segments);

  if ( ! color) {
      color = new THREE.Color(0x0000ff);
  }

  this.material = new THREE.MeshBasicMaterial({
    shading: THREE.SmoothShading,
    color: color,
    transparent: true,
    overdraw: false,
    opacity: this.opacity
  });

  this.geometry = new THREE.TubeGeometry(
    new THREE.SplineCurve3(this._shape.createGeometry(points).vertices),
    this.segments, // segments
    this.radius,
    this.radiussegments
  );

  this.mesh = new THREE.Mesh(
    this.geometry,
    this.material
  );

  this.mesh.position.z = this.z;
};

model.Line.prototype.get = function()
{
	return this.mesh;
};

model.Line.prototype.hide = function()
{
    this.mesh.traverse(function (object){
        object.visible = false;
    });
};

model.Line.prototype.show = function()
{
    this.mesh.traverse(function (object){
        object.visible = true;
    });
};