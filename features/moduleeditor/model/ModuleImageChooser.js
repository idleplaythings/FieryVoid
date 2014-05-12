model.ModuleImageChooser = function(
	dispatcher, moduleImageStorage, moduleEditorService)
{
	this._moduleEditorService = moduleEditorService;
	
	dispatcher.attach(
        'moduleLayoutChanged', this.onModuleLayoutChanged.bind(this));
        
	this.target = null;
	
	this.types = ['inside', 'outside', 'hull', 'over', 'under', 'ui'];
	
	this.allModuleImages = moduleImageStorage.getAll();
	
	this.module = null;
};

model.ModuleImageChooser.prototype.init = function(target){
	this.target = target;
};

model.ModuleImageChooser.prototype.onModuleLayoutChanged = function(event)
{
	var module = event.payload;

	if ( ! module)
		return;
	
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
			
			this.allModuleImages.forEach(function (image){
	
				if ((image.type == 'ui' && type != 'ui') || (image.type != 'ui' && type == 'ui'))
					return;
				
				
				var selected = moduleValue == image.name ? 'selected = "selected"' : '';
				select.append('<option value="'+image.name+'" '+selected+'>'+image.name+'</option>');
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
		
	this._moduleEditorService.updateImage(this.module, type, value);
};

model.ModuleImageChooser.prototype.getBump = function(type, value)
{
	return this.allModuleImages[type+'bump'].filter(function(image){
		return image == value; 
	})[0];
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
