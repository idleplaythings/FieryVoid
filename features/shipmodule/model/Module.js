model.Module = function Module(moduleLayout, power)
{
	this._moduleLayout = moduleLayout;
	this._power = power;
};

model.Module.prototype.getStatusSymbols = function()
{
    return [].concat(this._power.getStatusSymbols(this));
};

model.Module.prototype.getModuleLayout = function()
{
    return this._moduleLayout;
};

model.Module.prototype.getWidth = function()
{
    return this._moduleLayout.getWidth();
};

model.Module.prototype.getHeight = function()
{
    return this._moduleLayout.getHeight();
};

model.Module.prototype.getName = function()
{
    return this._moduleLayout.name;
};

model.Module.prototype.getDescription = function()
{
    return this._moduleLayout.description;
};


