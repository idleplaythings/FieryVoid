model.Raytrace = function Raytrace(start, end)
{
    this._start = start;
    this._end = end;

};

model.Raytrace.prototype.get = function()
{
    return this._bresenhamRaytrace(this._start, this._end);
};


model.Raytrace.prototype._bresenhamRaytrace = function(start, end)
{
    var x0 = start.x;
    var x1 = end.x;
    var y0 = start.y;
    var y1 = end.y;

    var dx = Math.abs(x1-x0);
    var dy = Math.abs(y1-y0);
    var sx = (x0 < x1) ? 1 : -1;
    var sy = (y0 < y1) ? 1 : -1;
    var err = dx-dy;

    var coords = Array();

    while(true)
    {
        var e2 = 2*err;
        
        if (e2 >-dy && e2 < dx)
        {  
            //coords.push({x:x0+sx, y:y0});
            coords.push({x:x0, y:y0+sy});
        }

        if (e2 >-dy)
        {
            err -= dy;
            x0  += sx;
        }

        if (e2 < dx)
        {
            err += dx;
            y0  += sy;
        }

        coords.push({x:x0, y:y0});

        if ((x0==x1) && (y0==y1))
            break;
    }

    return coords;
}