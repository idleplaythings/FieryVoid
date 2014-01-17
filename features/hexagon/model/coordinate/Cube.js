model.hexagon = {};
model.hexagon.coordinate = {};
model.hexagon.coordinate.Cube = function Cube(x, y, z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

model.hexagon.coordinate.Cube.prototype.neighbours = [
    { x:  1, y: -1, z: 0 }, { x:  1, y:  0, z: -1 }, { x:  0, y:  1, z: -1 },
    { x: -1, y:  1, z: 0 }, { x: -1, y:  0, z:  1 }, { x:  0, y: -1, z:  1 }
];

model.hexagon.coordinate.Cube.prototype.direction = function(direction)
{
    return this.add(this.neighbours[direction]);
}

model.hexagon.coordinate.Cube.prototype.add = function(cube)
{
    return new model.hexagon.coordinate.Cube(this.x + cube.x, this.y + cube.y, this.z + cube.z);
}