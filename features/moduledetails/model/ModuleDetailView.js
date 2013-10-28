model.ModuleDetailView = function ModuleDetailView(target)
{
    this.target = target;
    this.currentModule = null;
    this.symbolResolver = new model.ShipStatusResolver();
};

model.ModuleDetailView.prototype.display = function(module, position, modules)
{
    if (module === null)
    {
        this.currentModule = null;
        this.hide();
    }

    if (module == this.currentModule)
        return;

    this.currentModule = module;

    this.symbolResolver.setModules(modules);

    var template = this.getTemplate();
    template.html('');
    template.append('<h4>'+module.name+'</h4>');
    template.append('<p>'+module.description+'</p>');

    var symbols = this.symbolResolver.getSymbols(module);
    symbols.forEach(function(symbol){
        var container = jQuery('<div></div>');
        container.appendTo(template);
        container.append(symbol.getHtmlElement())
            .append('<span>'+symbol.description+'</span>');
    });

    this.position(position, module);
};

model.ModuleDetailView.prototype.hide = function()
{
    this.getTemplate().hide();
};

model.ModuleDetailView.prototype.position = function(position, module)
{
    this.getTemplate().css(
        {
            'left': (position.x + module.getWidth()/2*30)+ 'px',
            'top': (position.y - module.getHeight()/2*30) + 'px'
        })
        .show();
};

model.ModuleDetailView.prototype.getTemplate = function()
{
    var template = jQuery('#moduleDetailView', this.target);

    if (template.length == 0)
    {
        template = jQuery('<div id="moduleDetailView" style="display:none;position:absolute;left:0px;top:0px;"></div>').appendTo(this.target);
    }

    return template;
};