model.ActionBar = function ActionBar(dispatcher, uiResolver)
{
    this._ship = null;
    this._container = null;
    this._dispatcher = dispatcher;
    this._uiResolver = uiResolver;
};

model.ActionBar.prototype._create = function(ship)
{
	var container = this._getContainer().html('');
	this._addWeapons(ship);
};

model.ActionBar.prototype._addWeapons = function(ship)
{ 
	ship.status.managers.weapon.getWeapons().map(function(weapon){
		return new model.ActionButtonWeapon(ship, weapon, this._dispatcher, this._uiResolver);
	}, this).forEach(function(button){
		button.get().appendTo(this._getContainer());
	}, this);
};

model.ActionBar.prototype.onShipSelected = function(ship)
{ 
	this._ship = ship;
	this._create(ship);
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
