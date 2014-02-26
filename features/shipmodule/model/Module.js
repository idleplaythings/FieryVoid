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
