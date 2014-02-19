model.WeaponArc = function WeaponArc(start)
{
	this.start= start;
	this.end = null;
};

model.WeaponArc.prototype.setEnd = function(end)
{
	this.end = end;
	return this;
};

model.WeaponArc.prototype.isClosed = function()
{
	return this.end !== null;
	return this;
};

model.WeaponArc.prototype.combine = function(weaponArc)
{
	return this.start = weaponArc.start;
	return this;
};