model.ActionBar = function ActionBar(dispatcher, gameContainer)
{
    this._ship = null;
    this._container = null;
    this._dispatcher = dispatcher;
    this._buttons = [];
    this._gameContainer = gameContainer;
};

model.ActionBar.prototype.create = function(ship, turn)
{
	console.log("action bar create", ship._id);
	var container = this._getContainer().html('');
	this._buttons = [];
	this._addWeapons(ship, turn);

  return this;
};

model.ActionBar.prototype._addWeapons = function(ship, turn)
{ 
  ship.getWeapons().map(function(module){
		return new model.ActionButtonWeapon(ship, module, this._dispatcher);
	}, this).forEach(function(button){
		this._buttons.push(button);
		button.get().appendTo(this._getContainer());
	}, this);
};

model.ActionBar.prototype.show = function()
{ 
  this._getContainer().show();
  return this;
};

model.ActionBar.prototype.hide = function()
{ 
  this._getContainer().hide();
  return this;
};

model.ActionBar.prototype.selectByModules = function(modules){
  callByModules.call(this, modules, 'select');
};

model.ActionBar.prototype.deselectByModules = function(modules){
  callByModules.call(this, modules, 'deselect');
};

model.ActionBar.prototype.activateByModules = function(modules){
  callByModules.call(this, modules, 'activate');
};

model.ActionBar.prototype.deactivateByModules = function(modules){
  callByModules.call(this, modules, 'deactivate');
};

var callByModules = function(modules, functionName)
{ 
  modules = [].concat(modules);

  this._buttons.filter(function(button){
    return button.owns(modules);
  }).forEach(function(button){
    button[functionName]();
  })
};

model.ActionBar.prototype._getContainer = function(event)
{
	if ( this._container)
		return this._container;
		
	var container = jQuery('#ActionBar');
    if (container.length == 0)
    {
		this._container = jQuery('<div id="ActionBar"></div>').appendTo(this._gameContainer.getClickContainer());
	}
	else
	{
		this._container = container;
	}
	
	return this._container;
};
