model.Line = function Line(start, end, color)
{
    if (typeof color === 'undefined') {
        color = 0x0000ff;
    }

	var material = new THREE.LineBasicMaterial({
        color: color,
        linewidht: 1
    });

	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(start.x, start.y, 10));
	geometry.vertices.push(new THREE.Vector3(end.x, end.y, 10));

	this.line = new THREE.Line(geometry, material);
};

model.Line.prototype.get = function()
{
	return this.line;
};