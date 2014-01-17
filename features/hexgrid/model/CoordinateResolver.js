model.HexGridCoordinateResolver = {}

model.HexGridCoordinateResolver.gameCoordinatesToGridCoordinates = function(gameCoordinates, hexSize)
{
    var q = (1/3 * Math.sqrt(3) * gameCoordinates.x - 1/3 * gameCoordinates.y) / hexSize;
    var r = 2/3 * gameCoordinates.y / hexSize;

    var cube = {};
    cube.x = q;
    cube.z = r;
    cube.y = -cube.x - cube.z

    var round = function(cube) {
        rx = Math.round(cube.x);
        ry = Math.round(cube.y);
        rz = Math.round(cube.z);

        x_diff = Math.abs(rx - cube.x);
        y_diff = Math.abs(ry - cube.y);
        z_diff = Math.abs(rz - cube.z);

        if (x_diff > y_diff && x_diff > z_diff) {
            rx = -ry - rz;
        } else if (y_diff > z_diff) {
            ry = -rx - rz;
        } else {
            rz = -rx - ry;
        }

        return { x: rx, y: ry, z: rz };
    }

    cube = round(cube);

    return this.cubeToEvenQOffset(cube);
}

model.HexGridCoordinateResolver.cubeToEvenQOffset = function(cube)
{
    var q = cube.x + (cube.z - (cube.z & 1)) / 2;
    var r = cube.z;

    return { x: q, y: r };
}

model.HexGridCoordinateResolver.evenQToCube = function(gridCoordinates)
{
    var x = gridCoordinates.x;
    var z = gridCoordinates.y - (gridCoordinates.x + (gridCoordinates.x & 1)) / 2;
    var y = -x - z;

    return {
        x: x,
        y: y,
        z: z
    }
}
