model.ModuleImageChooser = function(
	dispatcher, moduleImageStorage, target)
{
	
	dispatcher.attach(
        'moduleLayoutChanged', this.onModuleLayoutChanged.bind(this));
        
	this.target = target;
	
	this.types = ['inside', 'outside', 'hull', 'over'];
	
	this.allModuleImages = moduleImageStorage.getAll();
	
	this.module = null;
};

model.ModuleImageChooser.prototype.onModuleLayoutChanged = function(event)
{
	var module = event.payload;
	this.module = module;
	
	console.log("module changed chooser");
	this.types.forEach(function(type){
		var moduleValue = module.image[type];
		var view = jQuery('.moduleImageChooseEntry div.'+type, this.target);
		var select = jQuery('.moduleImageChooseEntry select.'+type, this.target);
		
		if (select.find('option').length == 1)
		{
			select.on('change', function(event){
				this.change(type, jQuery(event.currentTarget).val());
			}.bind(this));
    
			this.getImages(type).forEach(function (image){
				var selected = moduleValue == image ? 'selected = "selected"' : '';
				select.append('<option value="'+image+'" '+selected+'>'+image+'</option>');
			});
		}
		
		view.html('');
		
		if ( ! moduleValue)
			return;
			
		new model.ModuleIconOnCanvas(module, [type]).drawTo(view);
		
	}, this);
};

model.ModuleImageChooser.prototype.change = function(type, value)
{
	if ( ! this.module)
		return;
		
	this.module.image[type] = value;	
	this.module.updateValue('image', this.module.image.serialize());
};

model.ModuleImageChooser.prototype.getImages = function(type)
{
	return this.allModuleImages[type];
};

model.ModuleImageChooser.prototype.create = function()
{
    if ( ! this.template)
    {
        this.template = jQuery(
            '<div class="small list-module selectable"></div>');
    }

    return this.template.clone();
};

model.ModuleImageChooser.prototype.getTemplate = function()
{
    if ( ! this.template)
    {
        this.template = jQuery(
            '<div class="moduleImageChooseEntry"></div>');
    }

    return this.template.clone();
};
