model.ActionButtonWeapon = function ActionButtonWeapon(ship, weapon, dispatcher, uiResolver)
{
	this._ship = ship;
	this._weapon = weapon;
	this._dispatcher = dispatcher;
	this._uiResolver = uiResolver;
	this._selected = false;

	model.Button.call(
		this,
		'',
		this.onWeaponClick.bind(this),
		{}
	);

	this.get().css({
		'background-image': 'url('+weapon.image.getByType('ui')+')'
	});

	this._dispatcher.attach("ModuleDeselectedEvent", this.onDeselected.bind(this));
	this._dispatcher.attach("FireOrderEvent", this.onFireOrder.bind(this));
};

model.ActionButtonWeapon.prototype = Object.create(model.ActionButton.prototype);

model.ActionButtonWeapon.prototype.onWeaponClick = function()
{
	var current = this._uiResolver.getCurrentClickStrategy();

	if ( this._selected && current instanceof model.ClickStrategyWeapon)
	{
		current.removeWeapon();
		this.deselect();
		return;
	}
	
	
	if ( ! (current instanceof model.ClickStrategyWeapon))
	{
		current  = this._uiResolver.clickStrategyFactory.construct(
			'ClickStrategyWeapon', {ship: this._ship});
		this._uiResolver.addClickStrategy(current);
	}
	
	current.addWeapon(this._weapon);

	this.select();
};

model.ActionButtonWeapon.prototype.onDeselected = function(event)
{
	if (event.module == this._weapon)
		this.deselect();
};

model.ActionButtonWeapon.prototype.onFireOrder = function(event)
{
	
};

/*

.map(function(module){
			return new model.ActionButton('', function(){self.selectWeapon(module);}, {background: module.image.getByType('ui')});
		}, this);
*/