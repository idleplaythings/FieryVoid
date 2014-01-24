if ( typeof model === 'undefined')
    model = {};

if ( typeof model.hexagon === 'undefined')
    model.hexagon = {};

if ( typeof model.hexagon.coordinate === 'undefined')
    model.hexagon.coordinate = {};

model.hexagon.coordinate.Offset = function Offset(q, r, layout)
{
    if (typeof q === 'object') {
        var offset = q;
        this.q = offset.q;
        this.r = offset.r;
        this.layout = typeof q.layout === 'undefined' ? model.hexagon.coordinate.Offset.EVEN_R : q.layout;
    } else {
        this.q = q;
        this.r = r;
        this.layout = typeof layout === 'undefined' ? model.hexagon.coordinate.Offset.EVEN_R : layout;
    }
}

model.hexagon.coordinate.Offset.EVEN_R = 1;
model.hexagon.coordinate.Offset.ODD_R = 2;

model.hexagon.coordinate.Offset.prototype.neighbours = {};

model.hexagon.coordinate.Offset.prototype.neighbours[
    model.hexagon.coordinate.Offset.EVEN_R] = [
        [
            { q:  1, r: 0 }, { q:  1, r: -1 }, { q: 0, r: -1 },
            { q: -1, r: 0 }, { q:  0, r:  1 }, { q: 1, r:  1 }
        ],
        [
            { q:  1, r: 0 }, { q:  0, r: -1 }, { q: -1, r: -1 },
            { q: -1, r: 0 }, { q: -1, r:  1 }, { q:  0, r: 1 }
        ]
    ];

model.hexagon.coordinate.Offset.prototype.neighbours[
    model.hexagon.coordinate.Offset.ODD_R] = [
        [
            { q:  1, r: 0 }, { q:  0, r: -1 }, { q: -1, r: -1 },
            { q: -1, r: 0 }, { q: -1, r:  1 }, { q:  0, r:  1 }
        ],
        [
            { q:  1, r: 0 }, { q:  1, r: -1 }, { q:  0, r: -1 },
            { q: -1, r: 0 }, { q:  0, r:  1 }, { q:  1, r: 1 }
        ]
    ];


model.hexagon.coordinate.Offset.prototype.getNeighbours = function()
{
    var neighbours = [];

    this.neighbours[this.layout][this.r & 1].forEach(function(neighbour) {
        neighbours.push(this.add(neighbour));
    }, this);

    return neighbours;
}

model.hexagon.coordinate.Offset.prototype.add = function(offset)
{
    var q = this.q + offset.q;
    var r = this.r + offset.r;

    return new model.hexagon.coordinate.Offset(q, r, this.layout);
}

model.hexagon.coordinate.Offset.prototype.toCube = function()
{
    switch (this.layout) {
        case model.hexagon.coordinate.Offset.ODD_R:
            var x = this.q - (this.r - (this.r&1)) / 2;
            var z = this.r;
            var y = -x - z;
            break;
        // todo ... implementify rest
    }

    return new model.hexagon.coordinate.Cube(x, y, z).round();
}
