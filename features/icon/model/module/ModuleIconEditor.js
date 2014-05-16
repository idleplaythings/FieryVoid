model.ModuleIconEditor = function ModuleIconEditor(gameScene, dispatacher)
{
    model.ModuleIcon.call(this, gameScene, dispatacher);
    this.setTypes(['under', 'inside', 'outside', 'hull', 'over']);
    this.outsideTypes = ['under', 'outside', 'hull', 'over'];
    this.insideTypes = ['under', 'inside'];

    this._viewMode = "outside";
};

model.ModuleIconEditor.prototype =
    Object.create(model.ModuleIcon.prototype);

model.ModuleIconEditor.prototype.createSprites = function()
{
    model.ModuleIcon.prototype.createSprites.call(this);

    var module = this.getModuleLayout();

    if ( ! module)
        return;

    var z = (5 + this.z);
    this.sprites.grid = new model.SpriteGrid(
        new model.GridLayout(new model.TileLayout(), module), z);

    this.addObject(this.sprites.grid);
};

model.ModuleIconEditor.prototype.toggleViewMode = function(){
    if ( this._viewMode == 'outside'){
        this._viewMode = 'inside';
        this.setInsideMode();
    }else{
        this.setOutsideMode();
        this._viewMode = 'outside';
    }
};

model.ModuleIconEditor.prototype.setOutsideMode = function()
{
	this.showIfInList(this.outsideTypes);
};

model.ModuleIconEditor.prototype.setInsideMode = function()
{
    this.showIfInList(this.insideTypes);
};

model.ModuleIconEditor.prototype.toggleGrid = function()
{
    if (this.sprites.grid.hidden)
		this.sprites.grid.show();
	else
		this.sprites.grid.hide();
};

model.ModuleIconEditor.prototype.showIfInList = function(list)
{
	Object.keys(this.sprites).forEach(function(type){
		
		if (type == 'grid')
			return;
			
		var sprite = this.sprites[type];
		if (list.indexOf(type) > -1)
			sprite.show();
		else
			sprite.hide();
	}, this);
};

model.ModuleIconEditor.prototype.updateSprites = function()
{
    model.ModuleIcon.prototype.updateSprites.call(this);
    this.sprites.grid.update(this.getModuleLayout());
};
