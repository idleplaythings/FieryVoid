MathLib =
{
    turnVector: function(vector, angle)
    {
        var vector = new THREE.Vector3(vector.x, vector.y, 0);
        angle = MathLib.degreeToRadian(angle);
        var axis = new THREE.Vector3(0, 0, 1);
        var matrix = new THREE.Matrix4().makeRotationAxis(axis, -1 * angle);
        var rotatedVector = vector.applyMatrix4(matrix);

        return {x:rotatedVector.x, y:rotatedVector.y};
    },

// a: vastakkainen kateetti, b: viereinen kateetti
    calculateAngle: function(a, b)
    {
        return MathLib.radianToDegree(Math.atan(a/b));

    },

    getPointInDirection: function( r, a, cx, cy){
		
        //a = MathLib.addToAzimuth(a, -90);
        x = cx + r * Math.cos(a* Math.PI / 180);
        y = cy + r * Math.sin(a* Math.PI / 180);

        return {x:Math.round(x), y:Math.round(y)};
    },

    addToAzimuth: function(current, add){
        add = add % 360;

        var ret = 0;
        if (current + add > 360){
            ret =  0+(add-(360-current));

        }else if (current + add < 0){
            ret = 360 + (current + add);
        }else{
            ret = current + add;
        }

        return ret;
    },

    distanceBetweenAngles: function(a, b)
    {
        var result = b - a;

        if (result < 0)
        {
            return {cw:(360 + result), ccw:result};
        }
        else
        {
            return {cw:result, ccw:(result - 360)};
        }
    },

    shortestDistanceBetweenAngles: function(a, b)
    {
        var result = MathLib.distanceBetweenAngles(a, b);
        return Math.abs(result.cw) < Math.abs(result.ccw) ? result.cw : result.ccw;
    },

    distance: function(start, end){
        return Math.sqrt((end.x-start.x)*(end.x-start.x) + (end.y-start.y)*(end.y-start.y));
    },

    getAzimuthFromTarget: function(observer, target){
        var dX = target.x - observer.x;
        var dY = -target.y - -observer.y;
        var heading = 0.0;
        //console.log("dX: " +dX+ " dY: " + dY);
        if (dX == 0){
            if (dY>0){
                heading = 180.0;
            }else{
                heading = 0.0;
            }

        }else if (dY == 0){
            if (dX>0){
                heading = 90.0;
            }else{
                heading = 270.0;

            }
        }else if (dX>0 && dY<0 ){
            heading = MathLib.radianToDegree(Math.atan(dX/Math.abs(dY)));
        }else if (dX>0 && dY>0 ){
            heading = MathLib.radianToDegree(Math.atan(dY/dX)) + 90;
        }else if (dX<0 && dY>0){
            heading = MathLib.radianToDegree(Math.atan(Math.abs(dX)/dY)) + 180;
        }else if (dX<0 && dY<0){
            heading = MathLib.radianToDegree(Math.atan(dY/dX)) + 270;
        }

        return MathLib.addToAzimuth(heading, -90);
    },

    radianToDegree: function(angle){
        return angle * (180.0 / Math.PI);
    },

    degreeToRadian: function(angle){
        return (angle / (180.0 / Math.PI));
    },

    getExactPointBetween: function(start, end, percentage){
        var x = start.x + percentage * (end.x - start.x);
        var y = start.y + percentage * (end.y - start.y);

        return {x:x, y:y};
    },

    getPointBetween: function(start, end, percentage){
        var x = Math.floor(start.x + percentage * (end.x - start.x));
        var y = Math.floor(start.y + percentage * (end.y - start.y));

        return {x:x, y:y};
    }
}
