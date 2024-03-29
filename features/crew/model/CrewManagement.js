model.CrewManagement = function CrewManagement(ship, modules, timeline)
{
    model.ShipStatusManager.call(this, ship, modules, timeline);

    this.crew = [];

    if (this.timeline)
        this.getFromTimeline();
    else
        this.getDefault();
};

model.CrewManagement.prototype = Object.create(model.ShipStatusManager.prototype);

model.CrewManagement.prototype.getFromTimeline = function()
{
	this.getDefault();
};

model.CrewManagement.prototype.getDefault = function()
{
    var crewProviders = this.modules.filter(
        function(module){
            return module.crewProvider;
        });

    crewProviders.forEach(function(module){
        var crew = module.crewProvider.getProvidedCrew();

        while(crew--)
        {
            this.crew.push(new model.Crew(0, module))
        }

    }, this);

    var crewRequirers = this.modules.filter(
        function(module){
            return module.requiresCrew;
        });

    var i = 0;

    crewRequirers.forEach(function(module){
        var crewRequirement = module.requiresCrew.getRequiredCrew();

        while(crewRequirement--)
        {
            if (i >= this.crew.length)
                return;

            this.crew[i].module = module;
            i++;
        };

    }, this);
};

model.CrewManagement.prototype.isCrewed = function(module)
{
    return this.getCrewStatus(module).isFullyCrewed();
};

model.CrewManagement.prototype.getCrewStatus = function(module)
{
    var onModule = this.crew.filter(function(crew){ return crew.module == module});
    return new model.CrewStatus(module, onModule, this);
};

model.CrewManagement.prototype.getActionButtons = function()
{
    return [];
};
