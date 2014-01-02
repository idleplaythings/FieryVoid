model.ModuleIconOnCanvas = function ModuleIconOnCanvas(module, types, tileSize)
{
	this.types = types.map(function(type){return {type:type, data: null}});
    this.module = module;
    this.tileSize = tileSize;
};

model.ModuleIconOnCanvas.prototype.drawTo = function(target)
{
	this.width = jQuery(target).width();
    this.height = jQuery(target).height();

    this.target = jQuery(
        '<canvas class="shipDisplay"'
        +' width="'
        +this.width
        +'" height="'
        +this.height
        +'"></canvas>')
        .appendTo(target)[0];

    this.loadImages();
};

model.ModuleIconOnCanvas.prototype.loadImages = function()
{
	this.types.forEach(function(type){
		var image = this.module.image.getByType(type.type);

		console.log(image);
		if ( ! image)
		{
			type.data = true;
			return;
		}

		new model.CompositeImageModule(
        	{imageSrc: image, shadow: type == 'over', rotation: this.module.getRotation()}
    	).getImageDataToCallback(
    		function(data){
    			type.data = data;
    			this.drawIfReady();
    		}.bind(this)
    	);
	}, this);
};

model.ModuleIconOnCanvas.prototype.drawIfReady = function()
{
	if ( ! this.types.every(function(type){ return type.data; }))
		return;

	this.types.forEach(function(type){

		if (type.data === true)
			return;

		Tools.getCanvasDrawingTool().resizeToFitAndDrawToMiddle(this.target, type.data.data);
	}, this);
};

