model.ThrustManagement = function ThrustManagement(
	 ship, modules, timeline, power, crew)
{
	model.ShipStatusManager.call(this, ship, modules, timeline);
	this.crew = crew;
	this.power = power;
    this.modules = modules;
};

model.ThrustManagement.prototype = Object.create(model.ShipStatusManager.prototype);

model.ThrustManagement.prototype.getThrustProduced = function(module)
{
    if ( ! module.thrustProducer)
        return null;

    return module.thrustProducer.getThrustProduced();
};

model.ThrustManagement.prototype.getTotalThrustProduced = function()
{
	return this.modules.reduce(function(thrust, module){
		 if ( ! module.thrustProducer)
			return thrust;
			
		return thrust + module.thrustProducer.getThrustProduced();
	},0);
};

model.ThrustManagement.prototype.getThrusters = function()
{
	return this.modules.filter(function(module){
		return module.thruster;
	}).map(function(module){
		return new model.movement.Thruster({
			moduleId: module.idOnShip,
			direction: module.getThrustDirection(),
			efficiency: 1,
			max: module.getMaxChannel()
		});
	});
};

model.ThrustManagement.prototype.getActionButtons = function()
{
    return [];
};
