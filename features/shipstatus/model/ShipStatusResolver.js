model.ShipStatusResolver = function ShipStatusResolver()
{
    this.power = new model.PowerManagement();
    this.crew = new model.CrewManagement();
};

model.ShipStatusResolver.prototype.setModules = function(modules)
{
    this.power.setModules(modules);
};

model.ShipStatusResolver.prototype.getSymbols = function(module)
{
    var symbols = [];
    symbols = this.getPowerSymbols(module, symbols);
    symbols = this.getCrewSymbols(module, symbols);
    return symbols;
};

model.ShipStatusResolver.prototype.getPowerSymbols = function(module, symbols)
{
    var powerGenerated = this.power.getPowerGenerated(module);
    if (powerGenerated !== null )
        symbols.push(new model.ShipStatusSymbolPowerProducer(powerGenerated));

    var powerConsumed = this.power.getPowerConsumed(module);
    if (powerConsumed !== null)
        symbols.push(new model.ShipStatusSymbolPowerConsumer(powerConsumed));

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