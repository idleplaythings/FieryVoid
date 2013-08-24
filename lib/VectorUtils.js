model.VectorUtils = {};

/**
 * Fits vector to a callback function.
 *
 * Will recursively scale the given vector with given factor until the callback
 * function returns boolean true. The scaled vector is passed as an argument to
 * the callback function.
 *
 * Returns a scaled clone of the argument vector.
 *
 * @param vector
 * @param factor
 * @param callback
 * @return {THREE.Vector3}
 */
model.VectorUtils.fitVector = function(vector, factor, callback)
{
    vector = vector.clone();

    do {
        vector.multiplyScalar(factor);
    } while (callback(vector) !== true);

    return vector;
}

/**
 * Rotates given vector by the radian amount passed as an argument around origo.
 *
 * Returns a rotated clone of the argument vector.
 *
 * @param vector
 * @param angle
 * @return {THREE.Vector3}
 */
model.VectorUtils.rotateVectorAroundOrigin = function(vector, angle)
{
    var rotationAxis = new THREE.Vector3(0, 0, 1);
    var rotationMatrix = new THREE.Matrix4().makeRotationAxis(rotationAxis, angle);
    return vector.clone().applyMatrix4(rotationMatrix);
}

/**
 * Creates an arrow helper out of given vector, position and color.
 *
 * Valid keys for params object: position, color.
 *
 * @param params object
 * @returns {THREE.ArrowHelper}
 */
model.VectorUtils.createArrowHelper = function(params)
{
    params.position = params.position || new THREE.Vector3(0, 0, 0);
    params.color = params.color || '#ffffff';

    return new THREE.ArrowHelper(
        params.vector.clone().normalize(),
        params.position,
        params.vector.length(),
        params.color
    );
}

/**
 * Returns the angle of a vector relative x-axis. Positive angles rotate counter-clockwise.
 *
 * @param vector
 * @returns {number}
 */
model.VectorUtils.getVectorAngle = function(vector)
{
    var vectorNormalized = vector.clone().normalize();
    var angle = Math.acos(vectorNormalized.dot(new THREE.Vector3(1, 0)));

    if (vectorNormalized.y < 0) {
        angle *= -1;
    }

    return angle;
}
