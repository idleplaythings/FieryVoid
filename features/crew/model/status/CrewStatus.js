model.CrewStatus = function CrewStatus(module, crew, crewManagement)
{
	this.crewManagement = crewManagement;
    this.crew = crew;
    this.module = module;
};

model.CrewStatus.prototype.isFullyCrewed = function()
{
    return ! this.module.requiresCrew || this.module.requiresCrew.getRequiredCrew() >= this.crew.length;
};

model.CrewStatus.prototype.getShipStatusSymbols = function()
{
	var crewManagement = this.crewManagement;
    var required = this.module.requiresCrew ? this.module.requiresCrew.getRequiredCrew() : 0;
    var provided = this.module.crewProvider ? this.module.crewProvider.getProvidedCrew() : 0;
    var crew = this.crew.slice(0);
    var symbols = [];

    while(required--)
    {
        var assignee = crew.pop();
        if (! assignee)
            symbols.push(new model.ShipStatusSymbolCrew('missing', 0, crewManagement));
        else
            symbols.push(new model.ShipStatusSymbolCrew('assigned', assignee, crewManagement));
    };

    crew.forEach(function(assignee){
        symbols.push(new model.ShipStatusSymbolCrew('idle', assignee, crewManagement));
    });
    
    var freeSpace = provided - crew.length;
    
    while (freeSpace--)
    {
		symbols.push(new model.ShipStatusSymbolCrew('freeSpace', assignee, crewManagement));
	}

    return symbols;
};
