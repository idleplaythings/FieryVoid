model.ShipStatus = function ShipStatus(ship, modules, timeline)
{
	this.ship = ship;
	this.modules = modules;
	this._timeline = timeline;
	
	this.managers = {};
	this.gameScene, this.effectManager, this.dispatcher, this.uiResolver = null;
	
    this.managers.power = new model.PowerManagement(modules);
    this.managers.crew = new model.CrewManagement(modules, timeline);
    this.managers.thrust = new model.ThrustManagement(modules, this.managers.power, this.managers.crew);
    this.managers.movement = new model.Movement(modules, timeline);
    this.managers.sensor = new model.SensorManagement(modules, timeline, ship, this.managers.power, this.managers.crew);
    this.managers.weapon = new model.WeaponManagement(modules, timeline, ship, this.managers.power, this.managers.crew);
};

model.ShipStatus.prototype.subscribeToScene = function(
	gameScene, effectManager, dispatcher, uiResolver)
{
	this.gameScene = gameScene;
	this.effectManager = effectManager;
	this.dispatcher = dispatcher;
	this.uiResolver = uiResolver;
	
	Object.keys(this.managers).forEach(function(key){ 
		this.managers[key].subscribeToScene(
			gameScene, effectManager, dispatcher, uiResolver);
	}, this);
};

model.ShipStatus.prototype.setOwner = function(owner)
{
	var entry = this._timeline.filter(function(entry){ return entry.name == 'shipOwner'}).pop();
	
	if (entry && entry.canUpdate())
		entry.update({owner: owner});
	else
		this._timeline.add('shipOwner', {owner: owner});
};

model.ShipStatus.prototype.getOwner = function()
{
	var entry = this._timeline.filter(function(entry){ return entry.name == 'shipOwner'}).pop();
	return entry ? entry.payload.owner : null;
};

model.ShipStatus.prototype.changeName = function(name)
{
	var entry = this._timeline.filter(function(entry){ return entry.name == 'shipName'}).pop();
	
	if (entry && entry.canUpdate())
		entry.update({name: name});
	else
		this._timeline.add('shipName', {name: name});
};

model.ShipStatus.prototype.getName = function()
{
	var entry = this._timeline.filter(function(entry){ return entry.name == 'shipName'}).pop();
	return entry ? entry.payload.name : null;
};

model.ShipStatus.prototype.getSymbols = function(module)
{
    var symbols = [];
    symbols = this.getPowerSymbols(module, symbols);
    symbols = this.getCrewSymbols(module, symbols);
    symbols = this.getThrustSymbols(module, symbols);
    symbols = this.managers.sensor.getSensorSymbols(module, symbols);
    return symbols;
};

model.ShipStatus.prototype.getPowerSymbols = function(module, symbols)
{
    var status = this.managers.power.getPowerStatus(module);

    if (status !== null)
        symbols.push(new model.ShipStatusSymbolPower(status));

    return symbols;
};

model.ShipStatus.prototype.getThrustSymbols = function(module, symbols)
{
    var thrustProduced = this.managers.thrust.getThrustProduced(module);
    if (thrustProduced !== null )
        symbols.push(new model.ShipStatusSymbolThrust(thrustProduced));

    return symbols;
};

model.ShipStatus.prototype.getCrewSymbols = function(module, symbols)
{
    var status = this.managers.crew.getCrewStatus(module);

    if (status !== null)
        symbols = symbols.concat(status.getShipStatusSymbols());

    return symbols;
};

model.ShipStatus.prototype.getActionButtons = function()
{
	var buttons = [];
    Object.keys(this.managers).forEach(function(key){
		buttons = buttons.concat(this.managers[key].getActionButtons());
	}, this);
	
	return buttons;
};
