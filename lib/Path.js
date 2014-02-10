model.Path = function Path(start, end, control)
{
	this._start = start;
	this._control = control;
	this._end = end;
	this._shape = null;
};

model.Path.prototype.get = function()
{
	if ( ! this._shape)
	{
		this._shape = new THREE.Shape();
    	this._shape.moveTo(this._start.x, this._start.y);
    	this._shape.quadraticCurveTo(this._end.x, this._end.y, this._control.x, this._control.y);
	}
	
    return this._shape;
};

model.Path.prototype.getSpacedGeometry = function(space)
{
	return this.get().createSpacedPointsGeometry(space);
};
