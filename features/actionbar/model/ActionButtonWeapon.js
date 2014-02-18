model.ActionButtonWeapon = function ActionButtonWeapon(ship, weapon, dispatcher, uiResolver, turn)
{
	this._ship = ship;
	this._weapon = weapon;
	this._dispatcher = dispatcher;
	this._uiResolver = uiResolver;
	this._selected = false;

	model.ActionButton.call(
		this,
		'',
		this.onWeaponClick.bind(this),
		{}
	);

	this.get().css({
		'background-image': 'url('+weapon.image.getByType('ui')+')'
	});

	this._deselectListener = this._dispatcher.attach("ModuleDeselectedEvent", this.onDeselected.bind(this));
	this._fireOrderListener = this._dispatcher.attach("FireOrdersChangedEvent", this.onFireOrdersChanged.bind(this));
	this.setFireOrderClassIfApplicaple(turn);
};

model.ActionButtonWeapon.prototype = Object.create(model.ActionButton.prototype);

model.ActionButtonWeapon.prototype.onWeaponClick = function()
{
	var current = this._uiResolver.getCurrentClickStrategy();

	if ( this._selected && current instanceof model.ClickStrategyWeapon)
	{
		current.removeWeapon(this._weapon);
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

model.ActionButtonWeapon.prototype.setFireOrderClassIfApplicaple = function(turn)
{
	if (this._ship.status.managers.weapon.getFireOrder(this._weapon, turn))
	{
		if (this.get().hasClass("fireOrder"))
			return;

		this.get().css({
			'background-image': 'url(/misc/fireOrder.png), url('+this._weapon.image.getByType('ui')+')'
		});
		this.get().addClass("fireOrder");
	}
	else
	{
		this.get().css({
			'background-image': 'url('+this._weapon.image.getByType('ui')+')'
		});
		this.get().removeClass("fireOrder");
	}

};

model.ActionButtonWeapon.prototype.onFireOrdersChanged = function(event)
{
	var ship = event.ship;
	var turn = event.turn;

	if (ship == this._ship)
		this.setFireOrderClassIfApplicaple(turn);
};


model.ActionButtonWeapon.prototype.destroy = function()
{
	this._dispatcher.detach('ModuleDeselectedEvent', this._deselectListener); 
	this._dispatcher.detach('FireOrdersChangedEvent', this._fireOrderListener);
};
