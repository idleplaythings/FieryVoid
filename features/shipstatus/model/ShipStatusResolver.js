model.ShipStatusResolver = function ShipStatusResolver()
{
    this.power = new model.PowerManagement();
    this.crew = new model.CrewManagement();
    this.thrust = new model.ThrustManagement();
};

model.ShipStatusResolver.prototype.setModules = function(modules)
{
    this.power.setModules(modules);
    this.crew.setModules(modules);
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
    var crewRequired = this.crew.getCrewRequired(module);
    if (crewRequired !== null )
    {
        while (crewRequired--)
        {
            symbols.push(new model.ShipStatusSymbolCrew());
        }
    }

    return symbols;
};