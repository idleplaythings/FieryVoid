model.ActionButtonWeapon = function ActionButtonWeapon(ship, module, dispatcher)
{
	this._ship = ship;
	this._module = module;
	this._dispatcher = dispatcher;
	this._selected = false;

	model.ActionButton.call(
		this,
		'',
		this.onWeaponClick.bind(this),
		{}
	);

	this.get().css({
		'background-image': 'url('+module.getImageByType('ui')+')'
	});

	this._deselectListener = this._dispatcher.attach("ModuleDeselectedEvent", this.onDeselected.bind(this));
	this._fireOrderListener = this._dispatcher.attach("FireOrdersChangedEvent", this.onFireOrdersChanged.bind(this));
	//this.setFireOrderClassIfApplicaple(turn);
	//this._positionService = ship.getPositionService(turn);
	//this._arcIndicator = new model.ArcIndicatorService(gameScene);
};

model.ActionButtonWeapon.prototype = Object.create(model.ActionButton.prototype);

model.ActionButtonWeapon.prototype.onWeaponClick = function()
{
	this._dispatcher.dispatch({name: 'WeaponClickedEvent', module: this._module});
	/*
	var current = this._uiResolver.getCurrentInputMode();

	if ( this._selected && current instanceof model.InputModeWeapon)
	{
		current.removeWeapon(this._weapon);
		this.deselect();
		return;
	}


	if ( ! (current instanceof model.InputModeWeapon))
	{
		current  = this._uiResolver.InputModeFactory.construct(
			'InputModeWeapon', {ship: this._ship});
		this._uiResolver.addInputMode(current);
	}

	current.addWeapon(this._weapon);

	this.select();
	*/
};

model.ActionButtonWeapon.prototype.onDeselected = function(event)
{
	if (event.module == this._weapon)
		this.deselect();
};

model.ActionButtonWeapon.prototype.owns = function(modules)
{
	console.log("owns?")
	return modules.filter(function(module){
		console.log(module, this._module);
		return module === this._module;
	}, this).pop();
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
	//this._arcIndicator.removeAll();
	this._dispatcher.detach('ModuleDeselectedEvent', this._deselectListener);
	this._dispatcher.detach('FireOrdersChangedEvent', this._fireOrderListener);
};

model.ActionButtonWeapon.prototype.onMouseover = function()
{
	this._dispatcher.dispatch({name: "MouseOverWeaponEvent", module: this._module, ship: this._ship});
	//this._arcIndicator.display(this._positionService.getFacing(), this._weapon, this._positionService.getPosition());
	console.log("mouseover");
};

model.ActionButtonWeapon.prototype.onMouseout = function()
{
	this._dispatcher.dispatch({name: "MouseOutWeaponEvent", module: this._module, ship: this._ship});
	//this._arcIndicator.removeAll();
	console.log("mouseout");
};