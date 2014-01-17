model.HexGridCoordinateResolver = {}

model.HexGridCoordinateResolver.gameCoordinatesToCubeCoordinates = function(gameCoordinates, hexSize)
{
    var q = (1/3 * Math.sqrt(3) * gameCoordinates.x - 1/3 * gameCoordinates.y) / hexSize;
    var r = 2/3 * gameCoordinates.y / hexSize;

    var x = q;
    var z = r;
    var y = -x - z

    return new model.hexagon.coordinate.Cube(x, y, z).toEvenR();
}
