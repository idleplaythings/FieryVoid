getUvMap = function getUvMap(texturesPerSide)
{
    var step = 1 / texturesPerSide;
    step = parseFloat(step.toFixed(3));

    var i, j, x, y;

    var uvMap = [];

    for (j=0; j<texturesPerSide; j++) {
        for (i=0; i<texturesPerSide; i++) {
            x = step * i;
            y = step * j;
            uvMap.push([
                new THREE.Vector2(x, y + step),
                new THREE.Vector2(x, y),
                new THREE.Vector2(x + step, y),
                new THREE.Vector2(x + step, y + step)
            ]);
        }
    }

    return uvMap;
}
