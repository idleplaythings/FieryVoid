model.Arc = function Arc(center, point1, point2)
{
	if (typeof color === 'undefined') {
        color = 0x0000ff;
    }

    var material = new THREE.LineBasicMaterial({
        color: color,
        opacity: 1
    });

	var path = new THREE.Path();

	path.moveTo(center.x, center.y);
	path.lineTo(point1.x, point1.y);

	var control = {
		x:(point1.x + point2.x) / 2,
		y:(point1.y + point2.y) / 2
	};
	
	path.quadraticCurveTo(control.x, control.y, point2.x, point2.y);
	//path.quadraticCurveTo(point2.x, point2.y, (point1.x + point2.x / 2), (point1.y + point2.y / 2));
	//path.lineTo(point2.x, point2.y);
	path.lineTo(center.x, center.y);

	var geometry = path.createPointsGeometry(100); //createSpacedPointsGeometry
	geometry.computeTangents();

	this.arc = new THREE.Line(geometry, material);
	this.arc.position =  new THREE.Vector3(0, 0, 10);
};

model.Arc.prototype.get = function()
{
	return this.arc;
};