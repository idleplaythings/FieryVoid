model.Arc = function Arc(center, radius, angle1, angle2)
{
	if (typeof color === 'undefined') {
        color = 0x0000ff;
    }

    var material = new THREE.MeshBasicMaterial({
        color: color,
        opacity: 0.2,
        transparent:true
    });

    //var point1 = MathLib.getPointInDirectionInvertY(radius, angle1, center.x, center.y);
    //var point2 = MathLib.getPointInDirectionInvertY(radius, angle2, center.x, center.y);

    var shape = new THREE.Shape();

    shape.moveTo(0, 0);

	var segmentCount = 32
	var totalDelta = MathLib.distanceBetweenAngles(angle1, angle2).cw;

	//console.log("start", angle1, "end", angle2, "total", totalDelta)

	for (var i = 0; i <= segmentCount; i++) {
		//console.log("start angle", angle1, "delta", ((i / segmentCount) * totalDelta), "sum", MathLib.addToAzimuth(((i / segmentCount) * totalDelta), angle1));
	    var theta = MathLib.degreeToRadian(MathLib.addToAzimuth(((i / segmentCount) * totalDelta), angle1));
    	shape.lineTo(0 + Math.cos(theta) * radius, 0 - Math.sin(theta) * radius);    
	}

	shape.lineTo(0, 0); 


	var geometry = new THREE.ShapeGeometry( shape );

	//this.arc = THREE.SceneUtils.createMultiMaterialObject( geometry, [ new THREE.MeshLambertMaterial( { color: color } ), new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, transparent: true } ) ] );
	this.arc = new THREE.Mesh(geometry, material);
	this.arc.position =  new THREE.Vector3(center.x, center.y, 0);

};

model.Arc.prototype.get = function()
{
	return this.arc;
};