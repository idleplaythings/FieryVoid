model.ShipStatusResolver = function ShipStatusResolver()
{
    this.power = new model.PowerManagement();
    this.crew = null;
    this.thrust = new model.ThrustManagement(this.power, this.crew);
};

model.ShipStatusResolver.prototype.setModules = function(modules)
{
    this.power.setModules(modules);
    this.crew = new model.CrewManagement(modules);
    this.thrust.setModules(modules);
};

model.ShipStatusResolver.prototype.getSymbols = function(module)
{
    var symbols = [];
    symbols = this.getPowerSymbols(module, symbols);
    symbols = this.getCrewSymbols(module, symbols);
    symbols = this.getThrustSymbols(module, symbols);
    return symbols;
};

model.ShipStatusResolver.prototype.getPowerSymbols = function(module, symbols)
{
    var status = this.power.getPowerStatus(module);

    if (status !== null)
        symbols.push(new model.ShipStatusSymbolPower(status));

    return symbols;
};

model.ShipStatusResolver.prototype.getThrustSymbols = function(module, symbols)
{
    var thrustProduced = this.thrust.getThrustProduced(module);
    if (thrustProduced !== null )
        symbols.push(new model.ShipStatusSymbolThrust(thrustProduced));

    return symbols;
};

model.ShipStatusResolver.prototype.getCrewSymbols = function(module, symbols)
{
    var status = this.crew.getCrewStatus(module);

    if (status !== null)
        symbols = symbols.concat(status.getShipStatusSymbols());

    return symbols;
};