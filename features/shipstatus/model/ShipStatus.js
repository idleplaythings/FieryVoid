model.ShipStatus = function ShipStatus(shipId, modules, timeline)
{
	this.shipId = shipId;
	this.modules = modules;
	this._timeline = timeline;
    this.power = new model.PowerManagement(modules);
    this.crew = new model.CrewManagement(modules, timeline);
    this.thrust = new model.ThrustManagement(modules, this.power, this.crew);
    this.movement = new model.Movement(modules, timeline);
};

model.ShipStatus.prototype.serialize = function()
{
    return this._timeline ? this._timeline._id : null;
};

model.ShipStatus.prototype.getSymbols = function(module)
{
    var symbols = [];
    symbols = this.getPowerSymbols(module, symbols);
    symbols = this.getCrewSymbols(module, symbols);
    symbols = this.getThrustSymbols(module, symbols);
    return symbols;
};

model.ShipStatus.prototype.getPowerSymbols = function(module, symbols)
{
    var status = this.power.getPowerStatus(module);

    if (status !== null)
        symbols.push(new model.ShipStatusSymbolPower(status));

    return symbols;
};

model.ShipStatus.prototype.getThrustSymbols = function(module, symbols)
{
    var thrustProduced = this.thrust.getThrustProduced(module);
    if (thrustProduced !== null )
        symbols.push(new model.ShipStatusSymbolThrust(thrustProduced));

    return symbols;
};

model.ShipStatus.prototype.getCrewSymbols = function(module, symbols)
{
    var status = this.crew.getCrewStatus(module);

    if (status !== null)
        symbols = symbols.concat(status.getShipStatusSymbols());

    return symbols;
};
