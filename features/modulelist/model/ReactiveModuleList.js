model.ReactiveModuleList = function ReactiveModuleList(dispatcher, findCriteria, moduleRepository)
{
    model.ModuleList.call(this, dispatcher);
    this.findCriteria = findCriteria || {};
    this.reactivityHandle = null;
    this._moduleRepository = moduleRepository;
};

model.ReactiveModuleList.prototype =
    Object.create(model.ModuleList.prototype);

model.ReactiveModuleList.prototype.react = function()
{
	console.log("modulelist react");
    var self = this;
    this.reactivityHandle = Deps.autorun(function(){

        var modules = self._moduleRepository.getModuleLayouts(self.findCriteria);
        self.update(modules);
    });

    return this;
};

model.ReactiveModuleList.prototype.destroy = function()
{
    this.reactivityHandle.stop();
    model.ModuleList.prototype.destroy.call(this);
};

