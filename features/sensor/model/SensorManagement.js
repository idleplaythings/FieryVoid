model.SensorManagement = function SensorManagement(
	ship, modules, timeline, power, crew)
{
	model.ShipStatusManager.call(this, ship, modules, timeline);

	this.crew = crew;
	this.power = power;
};

model.SensorManagement.prototype = Object.create(model.ShipStatusManager.prototype);

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

model.SensorManagement.prototype.getActionButtons = function()
{
    return [];
};
