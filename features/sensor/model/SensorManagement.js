model.SensorManagement = function SensorManagement(
	modules, timeline, ship, power, crew)
{
	this.modules = modules;
	this.crew = crew;
	this.power = power;
	this.timeline = timeline;
	this.ship = ship;
};

model.SensorManagement.prototype.getSensorEfficiency = function(module)
{
	return module.sensor.getSensorEfficiency(
		this.crew, this.power, this.getSensorAmount());
};

model.SensorManagement.prototype.getSensorAmount = function()
{
    return this.modules.filter(function(module){return module.sensor;}).length;  
};

model.SensorManagement.prototype.getSensorSymbols = function(module, symbols)
{
	if ( ! module.sensor)
		return symbols;

	symbols.push(new model.ShipStatusSymbolSensor(
		'best', this.getSensorEfficiency(module)));
	
    return symbols;
};

