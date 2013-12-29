model.ShipStatus = function ShipStatus(ship, modules, timeline)
{
	this.ship = ship;
	this.modules = modules;
	this._timeline = timeline;
	
    this.power = new model.PowerManagement(modules);
    this.crew = new model.CrewManagement(modules, timeline);
    this.thrust = new model.ThrustManagement(modules, this.power, this.crew);
    this.movement = new model.Movement(modules, timeline);
    this.sensor = new model.SensorManagement(modules, timeline, ship, this.power, this.crew);
};

model.ShipStatus.prototype.getSymbols = function(module)
{
    var symbols = [];
    symbols = this.getPowerSymbols(module, symbols);
    symbols = this.getCrewSymbols(module, symbols);
    symbols = this.getThrustSymbols(module, symbols);
    symbols = this.sensor.getSensorSymbols(module, symbols);
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
