model.ReactiveModuleList = function ReactiveModuleList(target, dispatcher)
{
    model.ModuleList.call(this, target, dispatcher);
    this.reactivityHandle = null;
};

model.ReactiveModuleList.prototype =
    Object.create(model.ModuleList.prototype);

model.ReactiveModuleList.prototype.react = function()
{
    var self = this;
    this.reactivityHandle = Deps.autorun(function(){
        var modules = ModuleLayouts.find({'published': true});
        self.update(modules.fetch());
    });

    return this;
};

model.ReactiveModuleList.prototype.destroy = function()
{
    this.reactivityHandle.stop();
    model.ModuleList.prototype.destroy.call(this);
};

