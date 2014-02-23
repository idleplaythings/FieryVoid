model.ModuleDetailView = function ModuleDetailView(gameContainer, dispatcher)
{
    model.TooltipView.call(this, gameContainer, dispatcher);
    this.currentModule = null;
    this.htmlClass = 'moduledetailview';
};

model.ModuleDetailView.prototype = Object.create(model.TooltipView.prototype);

model.ModuleDetailView.prototype.remove  = function()
{
    this.currentModule = null;
    this.hide();
};

model.ModuleDetailView.prototype.display = function(
	module, position)
{
    if (module === null)
    {
        this.remove();
        return;
    }

    if (module == this.currentModule)
        return;

    this.currentModule = module;

    var template = this.getTemplate();
    template.html('');
    template.append('<h4>'+module.getName()+'</h4>');
    template.append('<p>'+module.getDescription()+'</p>');

    var symbols = module.getStatusSymbols();
    symbols.forEach(function(symbol){
		if ( ! symbol.displayOnModuleView)
			return;

        var container = jQuery('<div></div>');
        container.appendTo(template);
        container.append(symbol.getHtmlElement())
            .append('<span>'+symbol.description+'</span>');
    });

    this.position(position, module);
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
