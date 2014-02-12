model.Ellipse = function Ellipse(center, x, y, angle)
{
	if (typeof color === 'undefined') {
        color = 0x0000ff;
    }

    var material = new THREE.LineBasicMaterial({
        color: color,
        opacity: 1
    });

	var ellipse = new THREE.EllipseCurve(0, 0, x, y, 0, 2.0 * Math.PI, false);
	var ellipsePath = new THREE.CurvePath();
	ellipsePath.add(ellipse);
	var ellipseGeometry = ellipsePath.createPointsGeometry(100);
	ellipseGeometry.computeTangents();

	this.line = new THREE.Line(ellipseGeometry, material);
	this.line.position =  new THREE.Vector3(center.x, center.y, 10);
	this.line.rotation.z = MathLib.degreeToRadian(MathLib.addToAzimuth(360, - angle));
};

model.Ellipse.prototype.get = function()
{
	return this.line;
};
