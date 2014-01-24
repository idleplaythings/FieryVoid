if ( typeof model === 'undefined')
    model = {};

if ( typeof model.hexagon === 'undefined')
    model.hexagon = {};

if ( typeof model.hexagon.coordinate === 'undefined')
    model.hexagon.coordinate = {};

model.hexagon.coordinate = {};
model.hexagon.coordinate.Cube = function Cube(x, y, z)
{
    if (typeof x === 'object') {
        var cube = x;
        this.x = this._formatNumber(cube.x);
        this.y = this._formatNumber(cube.y);
        this.z = this._formatNumber(cube.z);
    } else {
        this.x = this._formatNumber(x);
        this.y = this._formatNumber(y);
        this.z = this._formatNumber(z);
    }

    this._validate();
}

model.hexagon.coordinate.Cube.PRECISION = 4;

model.hexagon.coordinate.Cube.prototype.round = function()
{
    if (this.x % 1 === 0 && this.y % 1 === 0 && this.z % 1 === 0) {
        return this;
    }

    rx = Math.round(this.x);
    ry = Math.round(this.y);
    rz = Math.round(this.z);

    x_diff = Math.abs(rx - this.x);
    y_diff = Math.abs(ry - this.y);
    z_diff = Math.abs(rz - this.z);

    if (x_diff > y_diff && x_diff > z_diff) {
        rx = -ry - rz;
    } else if (y_diff > z_diff) {
        ry = -rx - rz;
    } else {
        rz = -rx - ry;
    }

    return new model.hexagon.coordinate.Cube(rx, ry, rz);
}

model.hexagon.coordinate.Cube.prototype._validate = function()
{
    if (Math.abs(this.x + this.y + this.z) > 0.001) {
        throw new Error(
            "Invalid Cube coordinates: (" + this.x + ", " + this.y + ", " + this.z + ")"
        );
    }
}

model.hexagon.coordinate.Cube.prototype.neighbours = [
    { x:  1, y: -1, z: 0 }, { x:  1, y:  0, z: -1 }, { x:  0, y:  1, z: -1 },
    { x: -1, y:  1, z: 0 }, { x: -1, y:  0, z:  1 }, { x:  0, y: -1, z:  1 }
];

model.hexagon.coordinate.Cube.prototype.getNeighbours = function()
{
    var neighbours = [];

    this.neighbours.forEach(function(neighbour) {
        neighbours.push(this.add(neighbour));
    }, this);

    return neighbours;
}

model.hexagon.coordinate.Cube.prototype.moveToDirection = function(direction)
{
    return this.add(this.neighbours[direction]);
}

model.hexagon.coordinate.Cube.prototype.add = function(cube)
{
    return new model.hexagon.coordinate.Cube(this.x + cube.x, this.y + cube.y, this.z + cube.z);
}

model.hexagon.coordinate.Cube.prototype.subtract = function(cube)
{
    return new model.hexagon.coordinate.Cube(this.x - cube.x, this.y - cube.y, this.z - cube.z);
}

model.hexagon.coordinate.Cube.prototype.scale = function(scale)
{
    return new model.hexagon.coordinate.Cube(this.x * scale, this.y * scale, this.z * scale);
}

model.hexagon.coordinate.Cube.prototype.distanceTo = function(cube)
{
    return Math.max(
        Math.abs(this.x - cube.x),
        Math.abs(this.y - cube.y),
        Math.abs(this.z - cube.z)
    );
}

model.hexagon.coordinate.Cube.prototype.toEvenR = function()
{
    var q = this.x + (this.z + (this.z & 1)) / 2;
    var r = this.z;

    var Offset = model.hexagon.coordinate.Offset;

    return new Offset(q, r, Offset.EVEN_R);
}

model.hexagon.coordinate.Cube.prototype.toOddR = function()
{
    var q = this.x + (this.z - (this.z & 1)) / 2;
    var r = this.z;

    var Offset = model.hexagon.coordinate.Offset;

    return new Offset(q, r, Offset.ODD_R);
}

model.hexagon.coordinate.Cube.prototype._formatNumber = function(number) {
    return parseFloat(number.toFixed(model.hexagon.coordinate.Cube.PRECISION));
}
