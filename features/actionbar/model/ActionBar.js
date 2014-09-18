model.ActionBar = function ActionBar(dispatcher, gameContainer)
{
    this._ship = null;
    this._container = null;
    this._dispatcher = dispatcher;
    this._buttons = [];
    this._gameContainer = gameContainer;
    jQuery('.actionBar div, .actionBar h4').on('click', actionBarClick.bind(this));
};

model.ActionBar.prototype.create = function(ship, turn)
{
	console.log("action bar create", ship._id);
	var container = getWeaponContainer().html('');
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
		button.get().appendTo(getWeaponContainer());
	}, this);
};

model.ActionBar.prototype.show = function()
{ 
  jQuery('.actionBar').show();
  return this;
};

model.ActionBar.prototype.hide = function()
{ 
  jQuery('.actionBar').hide();
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

var actionBarClick = function(event){
  var id = jQuery(event.target).parent()[0].id;
  var name = "";

  if (id == 'actionBarMovement'){
    name = 'movement';
  }else if (id == 'actionBarWeapons'){
    name = 'weapons';
  }else if (id == 'actionBarEW'){
    name = 'EW';
  }else{
    return;
  }

  this._dispatcher.dispatch({name: 'actionBarClickEvent', type:name});
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


var getWeaponContainer = function(){
  return jQuery('#actionBarWeapons div');
};
