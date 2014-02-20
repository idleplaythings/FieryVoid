model.ActionBar = function ActionBar(dispatcher, uiResolver, gameScene)
{
    this._ship = null;
    this._container = null;
    this._dispatcher = dispatcher;
    this._uiResolver = uiResolver;
    this._gameScene = gameScene;
    this._buttons = [];
};

model.ActionBar.prototype._create = function(ship, turn)
{
	var container = this._getContainer().html('');
	this._buttons.forEach(function(button){button.destroy();});
	this._buttons = [];
	this._addWeapons(ship, turn);
};

model.ActionBar.prototype._addWeapons = function(ship, turn)
{ 
	ship.status.managers.weapon.getWeapons().map(function(weapon){
		return new model.ActionButtonWeapon(ship, weapon, this._dispatcher, this._uiResolver, this._gameScene, turn);
	}, this).forEach(function(button){
		this._buttons.push(button);
		button.get().appendTo(this._getContainer());
	}, this);
};

model.ActionBar.prototype.onShipSelected = function(ship, turn)
{ 
	this._ship = ship;
	this._create(ship, turn);
};

model.ActionBar.prototype._getContainer = function(event)
{
	if ( this._container)
		return this._container;
		
	var container = jQuery('#ActionBar');
    if (container.length == 0)
    {
		this._container = jQuery('<div id="ActionBar"></div>').appendTo('#gameContainer');
	}
	else
	{
		this._container = container;
	}
	
	return this._container;
};
