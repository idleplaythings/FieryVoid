if ( typeof model.movement === 'undefined')
    model.movement = {};

model.movement.PositionHelper = function PositionHelper()
{
};

model.movement.PositionHelper.prototype.getDistanceBetweenPositions = function(positionA, positionB)
{
    return positionA.getPosition().distanceTo(positionB.getPosition());
}

model.movement.PositionHelper.prototype.getAngleBetweenPositions = function(positionA, positionB)
{
    var h = 2;
    var dv = 3/4 * h;

    var w = Math.sqrt(3) / 2 * h;
    var dh = w;

    var x = new THREE.Vector2(w/2, dv);
    var y = new THREE.Vector2(-w/2, dv);
    var z = new THREE.Vector2(w, 0);

    var axis = null;
    var normal = null;

    switch (positionA.getFacing()) {
        case 0:
            axis = z;
            break;
        case 1:
            axis = x;
            break;
        case 2:
            axis = y;
            break;
        case 3:
            axis = z.clone().multiplyScalar(-1);
            break;
        case 4:
            axis = x.clone().multiplyScalar(-1);
            break;
        case 5:
            axis = y.clone().multiplyScalar(-1)
;            break;
    }

    var startPosition = positionA.getPosition();
    var targetPosition = positionB.getPosition();


    var start = x.clone().multiplyScalar(startPosition.x).add(y.clone().multiplyScalar(startPosition.y));
    var target = x.clone().multiplyScalar(targetPosition.x).add(y.clone().multiplyScalar(targetPosition.y));
    var result = target.sub(start);

    var dot = result.clone().normalize().dot(axis.clone().normalize());
    var angle = Math.acos(dot);


    var cross = new THREE.Vector3(result.x, result.y, 0).cross(new THREE.Vector3(axis.x, axis.y, 0));

    if (cross.z < 0) {
        angle *= -1;
    }

    angle = angle * 180 / Math.PI;
    angle = angle.toFixed(2);

    return parseFloat(angle);
}