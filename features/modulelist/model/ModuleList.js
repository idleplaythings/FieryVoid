model.ModuleList = function ModuleList(dispatcher)
{
    this.target = null;
    this.modules = [];
    this.template = null;
    this.dispatcher = dispatcher;

    this.selectedModule = null;
};

model.ModuleList.prototype.init = function(target)
{
    this.target = target;
    return this;
};

model.ModuleList.prototype.hide = function(modules)
{
    this.target.hide();
    return this;
};

model.ModuleList.prototype.show = function(modules)
{
    this.target.show();
    this.update(this.modules);
    return this;
};

model.ModuleList.prototype.update = function(modules)
{
	console.log('update module list', modules);
    this.target.html('');
    modules.forEach(this.createEntry, this);

    this.modules = modules;

    return this;
};

model.ModuleList.prototype.unselect = function(modules)
{
    jQuery('.list-module', this.target).removeClass('selected');
    this.selectedModule = null;
};

model.ModuleList.prototype.createEntry = function(module)
{
    var template = this.getTemplate();
    template.appendTo(this.target);

    new model.ModuleIconOnCanvas(module, ['inside', 'over']).drawTo(template);

    template.data("module", module);
    template.on('click', this.onClick.bind(this));
};

model.ModuleList.prototype.onClick = function(event)
{
    var target = jQuery(event.currentTarget);
    var module = target.data('module');

    if (module == this.selectedModule)
        return;

    jQuery('.list-module', this.target).removeClass('selected');
    target.addClass('selected');

    this.selectedModule = module;
    this.dispatcher.dispatch({name: 'selectedModuleChange', module:module});
};

model.ModuleList.prototype.getTemplate = function()
{
    if ( ! this.template)
    {
        this.template = jQuery(
            '<div class="small list-module selectable"></div>');
    }

    return this.template.clone();
};

model.ModuleList.prototype.destroy = function()
{
};
