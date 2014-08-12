model.WeaponArc = function WeaponArc(start)
{
	this.start= start;
	this.end = null;
};

model.WeaponArc.prototype.isOnArc = function(angle)
{
	return (angle >= this.start) || (angle <= this.end);
};

model.WeaponArc.prototype.setEnd = function(end)
{
	this.end = end;
	return this;
};

model.WeaponArc.prototype.isClosed = function()
{
	return this.end !== null;
};

model.WeaponArc.prototype.combine = function(weaponArc)
{
	this.start = weaponArc.start;
	return this;
};

model.WeaponArc.prototype.close = function(weaponArc)
{
	this.start = 0;
	this.end = 360;
	return this;
};