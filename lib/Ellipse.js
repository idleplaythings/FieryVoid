model.Ellipse = function Ellipse(center, x, y, angle, color, opacity, z)
{
	if (! color ) {
    color = 0x0000ff;
  }

  this.z = z || 10;
  this.opacity = opacity || 1.0;

  this.material = new THREE.MeshBasicMaterial({
    shading: THREE.SmoothShading,
    color: color,
    opacity: this.opacity,
    transparent: true
  });

	var shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.ellipse(0, 0, x, y, 0, 2.087 * Math.PI, false );

  this.geometry = new THREE.ShapeGeometry( shape );
  this.mesh = new THREE.Mesh(
    this.geometry,
    this.material
  );

  this.mesh.position =  new THREE.Vector3(center.x, center.y, this.z);
  this.mesh.rotation.z = MathLib.degreeToRadian(MathLib.addToAzimuth(360, - angle));
};

model.Ellipse.prototype.get = function()
{
	return this.mesh;
};
