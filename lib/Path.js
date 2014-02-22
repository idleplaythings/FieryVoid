model.Path = function Path(start, end, control)
{
    this._start = start;
    this._control = control;
    this._end = end;
    this._shape = null;

    this._initShape();
};

model.Path.prototype.getStart = function()
{
    return this._start;
}

model.Path.prototype.getControl = function()
{
    return this._control;
}

model.Path.prototype.getEnd = function()
{
    return this._end;
}

model.Path.prototype.getShape = function()
{
    return this._shape;
}

model.Path.prototype.getSpacedGeometry = function(divisions)
{
    var points = this._shape.getPoints(divisions);
    return this._shape.createGeometry(points);
};

model.Path.prototype._initShape = function()
{
    this._shape = new THREE.Shape();
    this._shape.moveTo(this._start.x, this._start.y);
    this._shape.quadraticCurveTo(this._end.x, this._end.y, this._control.x, this._control.y);
};
