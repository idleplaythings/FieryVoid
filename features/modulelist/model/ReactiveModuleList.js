model.ReactiveModuleList = function ReactiveModuleList(target, dispatcher, findCriteria)
{
    model.ModuleList.call(this, target, dispatcher);
    this.findCriteria = findCriteria || {'published': true};
    this.reactivityHandle = null;
};

model.ReactiveModuleList.prototype =
    Object.create(model.ModuleList.prototype);

model.ReactiveModuleList.prototype.react = function()
{
	console.log("modulelist react");
    var self = this;
    this.reactivityHandle = Deps.autorun(function(){
        var modules = ModuleLayouts.find(self.findCriteria);
        self.update(modules.fetch());
    });

    return this;
};

model.ReactiveModuleList.prototype.destroy = function()
{
    this.reactivityHandle.stop();
    model.ModuleList.prototype.destroy.call(this);
};

