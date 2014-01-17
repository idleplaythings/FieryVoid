if ( typeof model === 'undefined')
    model = {};

if ( typeof model.hexagon === 'undefined')
    model.hexagon = {};

if ( typeof model.hexagon.coordinate === 'undefined')
    model.hexagon.coordinate = {};

model.hexagon.coordinate.Offset = function Offset(q, r)
{
    this.q = q;
    this.r = r;
}